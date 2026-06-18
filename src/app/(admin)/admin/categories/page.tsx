import { Plus, Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function AdminCategoriesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl text-foreground">Categories</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage product categories
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-4 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors">
          <Plus className="h-4 w-4" />
          Add Category
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {siteConfig.categories.map((cat) => (
          <div
            key={cat.slug}
            className="rounded-lg border border-border bg-card p-5"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-serif text-lg text-foreground">
                  {cat.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {cat.description}
                </p>
                <p className="text-xs text-muted-foreground/60 mt-2">
                  /collection/{cat.slug}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-1.5 text-muted-foreground hover:text-primary transition-colors">
                  <Edit className="h-4 w-4" />
                </button>
                <button className="p-1.5 text-muted-foreground hover:text-destructive transition-colors">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
