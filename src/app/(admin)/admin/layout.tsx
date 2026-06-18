import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Tag,
  Settings,
  LogOut,
  Image,
} from "lucide-react";

const ADMIN_COOKIE = "zangtan_admin_session";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

export function verifyAdmin(token: string | undefined): boolean {
  if (!token) return false;
  // Simple token verification
  // In production, use proper JWT or session tokens
  return token === Buffer.from(ADMIN_PASSWORD).toString("base64");
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;

  if (!verifyAdmin(token)) {
    redirect("/admin/login");
  }

  const navItems = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/products", label: "Products", icon: Package },
    { href: "/admin/orders", label: "Orders", icon: ShoppingCart },
    { href: "/admin/categories", label: "Categories", icon: Tag },
    { href: "/admin/images", label: "AI Images", icon: Image },
    { href: "/admin/settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 w-64 border-r border-border bg-card">
        <div className="flex h-16 items-center px-6 border-b border-border">
          <Link href="/admin" className="font-serif text-xl font-semibold tracking-widest">
            ZT Admin
          </Link>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors mb-1"
          >
            <LayoutDashboard className="h-4 w-4" />
            View Store
          </Link>
          <form action="/api/admin/logout" method="POST">
            <button
              type="submit"
              className="w-full flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
