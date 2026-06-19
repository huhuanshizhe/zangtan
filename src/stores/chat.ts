import { create } from "zustand";

interface ChatState {
  isOpen: boolean;
  /** Pre-filled message to send when opening the chat */
  contextMessage: string | null;
  open: (contextMessage?: string) => void;
  close: () => void;
  clearContext: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
  isOpen: false,
  contextMessage: null,
  open: (contextMessage) =>
    set({ isOpen: true, contextMessage: contextMessage || null }),
  close: () => set({ isOpen: false }),
  clearContext: () => set({ contextMessage: null }),
}));
