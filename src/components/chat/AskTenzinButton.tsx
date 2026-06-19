"use client";

import { Sparkles } from "lucide-react";
import { useChatStore } from "@/stores/chat";

interface AskTenzinButtonProps {
  productName: string;
  productCategory: string;
}

export function AskTenzinButton({ productName, productCategory }: AskTenzinButtonProps) {
  const openChat = useChatStore((s) => s.open);

  return (
    <button
      onClick={() =>
        openChat(
          `I'd like to know more about the "${productName}" (${productCategory}). Can you tell me about its craftsmanship, materials, and cultural significance?`
        )
      }
      className="w-full flex items-center justify-center gap-2 rounded-md border border-primary/30 bg-primary/5 py-3 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
    >
      <Sparkles className="h-4 w-4" />
      Ask Tenzin About This Piece
    </button>
  );
}
