import Link from "next/link";
import { Plus, Edit, Trash2, Eye } from "lucide-react";

// Placeholder products
const products = [
  {
    id: "1",
    name: "Crimson Peony Khaden",
    category: "Khaden",
    price: 2800,
    status: "published",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=200&q=60",
  },
  {
    id: "2",
    name: "Indigo Dragon Runner",
    category: "Temple Rugs",
    price: 3400,
    status: "published",
    image: "https://images.unsplash.com/photo-1558618666-fcd24c82cd38?w=200&q=60",
  },
  {
    id: "3",
    name: "Saffron Meditation Mat",
    category: "Khaden",
    price: 1600,
    status: "published",
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=200&q=60",
  },
  {
    id: "4",
    name: "Phoenix & Cloud Khaden",
    category: "Khaden",
    price: 3200,
    status: "draft",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&q=60",
  },
  {
    id: "5",
    name: "Lotus Medallion Cushion",
    category: "Cushions",
    price: 680,
    status: "published",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&q=60",
  },
  {
    id: "6",
    name: "Tiger Stripe Saddle Rug",
    category: "Saddle Rugs",
    price: 2400,
    status: "published",
    image: "https://images.unsplash.com/photo-1558882224-dda166733046?w=200&q=60",
  },
];

const statusBadge: Record<string, string> = {
  published: "bg-jade/10 text-jade",
  draft: "bg-muted text-muted-foreground",
  archived: "bg-destructive/10 text-destructive",
};

export default function AdminProductsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl text-foreground">Products</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {products.length} products in catalog
          </p>
        </div>
        <Link
          href="/admin/products/new"
          className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-4 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Add Product
        </Link>
      </div>

      {/* Search & Filter */}
      <div className="flex items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <select className="rounded-md border border-border bg-background px-3 py-2 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring">
          <option>All Categories</option>
          <option>Khaden</option>
          <option>Temple Rugs</option>
          <option>Saddle Rugs</option>
          <option>Cushions</option>
        </select>
        <select className="rounded-md border border-border bg-background px-3 py-2 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring">
          <option>All Status</option>
          <option>Published</option>
          <option>Draft</option>
          <option>Archived</option>
        </select>
      </div>

      {/* Products Table */}
      <div className="rounded-lg border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-secondary/50">
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider w-16">
                Image
              </th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Product
              </th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Category
              </th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Price
              </th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Status
              </th>
              <th className="text-right px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {products.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-secondary/30 transition-colors"
              >
                <td className="px-4 py-3">
                  <div className="w-10 h-10 rounded-sm bg-secondary overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </td>
                <td className="px-4 py-3 font-medium text-foreground">
                  {product.name}
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {product.category}
                </td>
                <td className="px-4 py-3 text-foreground">
                  ${product.price.toLocaleString()}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${
                      statusBadge[product.status] || ""
                    }`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/product/${product.id}`}
                      className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                      title="View"
                    >
                      <Eye className="h-4 w-4" />
                    </Link>
                    <Link
                      href={`/admin/products/${product.id}/edit`}
                      className="p-1.5 text-muted-foreground hover:text-primary transition-colors"
                      title="Edit"
                    >
                      <Edit className="h-4 w-4" />
                    </Link>
                    <button
                      className="p-1.5 text-muted-foreground hover:text-destructive transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
