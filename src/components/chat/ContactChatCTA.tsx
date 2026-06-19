"use client";

import { MessageCircle, ArrowRight } from "lucide-react";
import { useChatStore } from "@/stores/chat";

export function ContactChatCTA() {
  const openChat = useChatStore((s) => s.open);

  return (
    <div className="max-w-xl mx-auto mb-10">
      <button
        onClick={() => openChat("Hello, I have a question about your collection.")}
        className="w-full flex items-center justify-between gap-4 rounded-xl border border-border bg-secondary/50 px-6 py-5 text-left hover:border-primary/40 hover:bg-primary/5 transition-all group"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <MessageCircle className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">
              Prefer an instant answer?
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Chat with Tenzin, our cultural ambassador — ask about pieces,
              materials, shipping, or custom commissions.
            </p>
          </div>
        </div>
        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
      </button>
    </div>
  );
}
