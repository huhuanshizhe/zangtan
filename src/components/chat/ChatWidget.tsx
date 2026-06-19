"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { X, Send, MessageCircle, Loader2, User, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useChatStore } from "@/stores/chat";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp?: Date;
}

interface LeadForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  interests: string;
  message: string;
}

const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hello, I'm Tenzin, your cultural guide at Woven Plateau. Whether you're curious about Tibetan carpet traditions, looking for the perfect piece for your space, or exploring wholesale opportunities — I'm here to help.\n\nHow may I assist you today?",
  timestamp: new Date(),
};

const QUICK_PROMPTS = [
  "Tell me about khaden",
  "How are Tibetan rugs made?",
  "Help me choose a rug",
  "Wholesale inquiry",
];

// Clean markdown formatting from AI responses
function cleanMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "$1") // **bold** → bold
    .replace(/\*(.+?)\*/g, "$1") // *italic* → italic
    .replace(/#{1,6}\s/g, "") // ## headings
    .replace(/^\s*[-*+]\s/gm, "") // bullet points
    .replace(/^\s*\d+\.\s/gm, "") // numbered lists
    .replace(/`(.+?)`/g, "$1") // `code`
    .replace(/\[(.+?)\]\(.+?\)/g, "$1") // [links](url)
    .trim();
}

export function ChatWidget() {
  const isOpen = useChatStore((s) => s.isOpen);
  const contextMessage = useChatStore((s) => s.contextMessage);
  const setIsOpen = useChatStore((s) => s.open);
  const closeChat = useChatStore((s) => s.close);
  const clearContext = useChatStore((s) => s.clearContext);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadSaved, setLeadSaved] = useState(false);
  const [leadForm, setLeadForm] = useState<LeadForm>({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    interests: "",
    message: "",
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sessionId = useRef(
    typeof window !== "undefined"
      ? `session_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`
      : ""
  );
  const currentPage =
    typeof window !== "undefined" ? window.location.pathname : "/";

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Handle context message from external triggers
  useEffect(() => {
    if (isOpen && contextMessage) {
      const timer = setTimeout(() => {
        sendMessage(contextMessage);
        clearContext();
      }, 500);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, contextMessage]);

  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim() || isLoading) return;

      const userMessage: Message = {
        role: "user",
        content: content.trim(),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsLoading(true);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: [...messages, userMessage].map((m) => ({
              role: m.role,
              content: m.content,
            })),
            sessionId: sessionId.current,
          }),
        });

        const data = await res.json();

        if (res.ok && data.reply) {
          const aiMessage: Message = {
            role: "assistant",
            content: data.reply,
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, aiMessage]);

          // If AI captured a lead, auto-save it
          if (data.leadData) {
            saveLeadToDb(data.leadData);
          }

          // Detect if AI is asking for contact info
          const contactKeywords = [
            "email",
            "your name",
            "contact",
            "follow up",
            "lookbook",
            "recommendations",
            "connect you",
          ];
          if (
            !leadSaved &&
            contactKeywords.some((kw) =>
              data.reply.toLowerCase().includes(kw)
            )
          ) {
            // Show lead form after AI asks for contact
            setTimeout(() => setShowLeadForm(true), 1500);
          }
        } else {
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content:
                "I apologize, I'm experiencing a brief pause. Please try again in a moment, or leave your email and our team will reach out to you.",
              timestamp: new Date(),
            },
          ]);
        }
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "I seem to have lost connection briefly. Please try again, or leave your email and we'll follow up with you personally.",
            timestamp: new Date(),
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [messages, isLoading, leadSaved]
  );

  const saveLeadToDb = async (leadData: Partial<LeadForm>) => {
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...leadData,
          sessionId: sessionId.current,
          sourcePage: currentPage,
          conversationSummary: messages
            .slice(-6)
            .map((m) => `${m.role}: ${m.content.slice(0, 100)}`)
            .join("\n"),
        }),
      });
      setLeadSaved(true);
      setShowLeadForm(false);
    } catch {
      // Silently fail — don't disrupt the conversation
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.email) return;

    setIsLoading(true);
    await saveLeadToDb(leadForm);

    // Add a thank-you message
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: `Thank you${leadForm.name ? `, ${leadForm.name}` : ""}! I've noted your interest${leadForm.interests ? ` in ${leadForm.interests}` : ""}. Our team will be in touch within 24 hours with personalized recommendations.\n\nIs there anything else I can help you explore about our collection or Tibetan carpet traditions?`,
        timestamp: new Date(),
      },
    ]);
    setIsLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={() => setIsOpen()}
            className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background shadow-lg hover:scale-105 transition-transform group"
            aria-label="Chat with Tenzin"
          >
            <MessageCircle className="h-6 w-6" />
            {/* Notification dot */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-4 w-4 rounded-full bg-primary" />
            </span>
            {/* Tooltip */}
            <span className="absolute bottom-full right-0 mb-3 hidden group-hover:block">
              <span className="whitespace-nowrap rounded-md bg-foreground px-3 py-1.5 text-xs text-background shadow-lg">
                Chat with Tenzin
              </span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-4 right-4 z-[9999] flex flex-col w-[calc(100vw-2rem)] sm:w-[400px] h-[min(600px,calc(100vh-6rem))] rounded-xl border border-border bg-background shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-foreground text-background px-5 py-4 shrink-0">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 text-background text-sm font-serif font-semibold">
                  T
                </div>
                <div>
                  <p className="font-serif text-sm font-semibold tracking-wide">
                    Tenzin
                  </p>
                  <p className="text-[11px] text-background/60">
                    Cultural Ambassador
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 text-[11px] text-background/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  Online
                </span>
                <button
                  onClick={() => closeChat()}
                  className="ml-2 rounded-full p-1.5 text-background/60 hover:text-background hover:bg-background/10 transition-colors"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-background">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-xs">
                      <Sparkles className="h-3.5 w-3.5" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-foreground text-background rounded-br-sm"
                        : "bg-secondary text-secondary-foreground rounded-bl-sm"
                    }`}
                  >
                    {cleanMarkdown(msg.content).split("\n").filter(l => l.trim()).map((line, li) => (
                      <p key={li} className={li > 0 ? "mt-2" : ""}>
                        {line}
                      </p>
                    ))}
                  </div>
                  {msg.role === "user" && (
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                      <User className="h-3.5 w-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isLoading && !showLeadForm && (
                <div className="flex gap-2.5 justify-start">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-xs">
                    <Sparkles className="h-3.5 w-3.5" />
                  </div>
                  <div className="bg-secondary rounded-xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:0ms]" />
                    <span className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:150ms]" />
                    <span className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              )}

              {/* Lead Capture Form */}
              <AnimatePresence>
                {showLeadForm && !leadSaved && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="rounded-xl border border-border bg-card p-4 space-y-3"
                  >
                    <p className="text-xs font-medium text-foreground">
                      Share your details for personalized recommendations:
                    </p>
                    <form
                      onSubmit={handleLeadSubmit}
                      className="space-y-2.5"
                    >
                      <input
                        type="text"
                        placeholder="Your name"
                        value={leadForm.name}
                        onChange={(e) =>
                          setLeadForm((f) => ({ ...f, name: e.target.value }))
                        }
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                      />
                      <input
                        type="email"
                        placeholder="Email *"
                        required
                        value={leadForm.email}
                        onChange={(e) =>
                          setLeadForm((f) => ({ ...f, email: e.target.value }))
                        }
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="tel"
                          placeholder="Phone"
                          value={leadForm.phone}
                          onChange={(e) =>
                            setLeadForm((f) => ({
                              ...f,
                              phone: e.target.value,
                            }))
                          }
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                        />
                        <input
                          type="text"
                          placeholder="Country"
                          value={leadForm.country}
                          onChange={(e) =>
                            setLeadForm((f) => ({
                              ...f,
                              country: e.target.value,
                            }))
                          }
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Company (optional)"
                        value={leadForm.company}
                        onChange={(e) =>
                          setLeadForm((f) => ({
                            ...f,
                            company: e.target.value,
                          }))
                        }
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                      />
                      <textarea
                        placeholder="What are you interested in?"
                        rows={2}
                        value={leadForm.interests}
                        onChange={(e) =>
                          setLeadForm((f) => ({
                            ...f,
                            interests: e.target.value,
                          }))
                        }
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                      />
                      <button
                        type="submit"
                        disabled={isLoading || !leadForm.email}
                        className="w-full rounded-md bg-foreground text-background py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors disabled:opacity-50"
                      >
                        {isLoading ? (
                          <Loader2 className="h-4 w-4 animate-spin mx-auto" />
                        ) : (
                          "Send & Get Recommendations"
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowLeadForm(false)}
                        className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Continue chatting instead
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

              {leadSaved && (
                <div className="rounded-lg bg-green-50 border border-green-200 p-3 text-center">
                  <p className="text-xs text-green-700 font-medium">
                    Thank you! Your inquiry has been submitted.
                  </p>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts (only show initially) */}
            {messages.length <= 1 && (
              <div className="px-4 py-2 flex flex-wrap gap-1.5 shrink-0 border-t border-border/50">
                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => sendMessage(prompt)}
                    className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="shrink-0 border-t border-border px-4 py-3 bg-background">
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 rounded-full border border-input bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors disabled:opacity-30"
                  aria-label="Send message"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </button>
              </form>
              <p className="text-center text-[10px] text-muted-foreground/50 mt-2">
                Highland Wool, Hand-Knotted Soul.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
