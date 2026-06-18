"use client";

import { useState } from "react";
import { Wand2, Loader2, Download } from "lucide-react";

const stylePresets = [
  { id: "living-room", label: "Modern Living Room" },
  { id: "bedroom", label: "Serene Bedroom" },
  { id: "meditation", label: "Meditation Space" },
  { id: "gallery", label: "Art Gallery Wall" },
  { id: "entrance", label: "Grand Entrance" },
];

export default function AdminImagesPage() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("living-room");
  const [generating, setGenerating] = useState(false);

  async function handleGenerate() {
    setGenerating(true);
    // TODO: Call DashScope API
    await new Promise((r) => setTimeout(r, 2000));
    setGenerating(false);
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-3xl text-foreground">AI Image Generator</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Generate lifestyle scenes for product listings using AI
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Scene Style
            </label>
            <div className="grid grid-cols-2 gap-2">
              {stylePresets.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => setStyle(preset.id)}
                  className={`rounded-md border px-3 py-2 text-sm transition-colors ${
                    style === preset.id
                      ? "border-primary bg-primary/5 text-foreground"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Custom Prompt
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="A handwoven Tibetan carpet with crimson peony pattern, placed in a sunlit reading corner with a leather armchair and brass floor lamp..."
              className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring h-32 resize-none"
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={generating || !prompt}
            className="w-full flex items-center justify-center gap-2 rounded-md bg-foreground text-background py-3 text-sm font-medium hover:bg-foreground/90 transition-colors disabled:opacity-50"
          >
            {generating ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Wand2 className="h-4 w-4" />
                Generate Image
              </>
            )}
          </button>

          <p className="text-xs text-muted-foreground">
            Uses DashScope z-image-turbo. Images will be 1024x1024 and saved to
            Vercel Blob storage.
          </p>
        </div>

        {/* Preview */}
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="text-sm font-medium text-foreground mb-4">Preview</h3>
          <div className="aspect-square rounded-md bg-secondary flex items-center justify-center">
            {generating ? (
              <Loader2 className="h-8 w-8 text-muted-foreground/30 animate-spin" />
            ) : (
              <p className="text-sm text-muted-foreground/50 text-center px-8">
                Generated image will appear here. Select a style and describe the
                scene you want.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
