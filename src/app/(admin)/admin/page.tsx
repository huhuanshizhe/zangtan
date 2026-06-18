import {
  Package,
  ShoppingCart,
  DollarSign,
  Users,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import Link from "next/link";

// Placeholder stats - will be fetched from DB in production
const stats = [
  {
    label: "Total Revenue",
    value: "$12,450",
    change: "+12.5%",
    trend: "up" as const,
    icon: DollarSign,
  },
  {
    label: "Orders",
    value: "8",
    change: "+3",
    trend: "up" as const,
    icon: ShoppingCart,
  },
  {
    label: "Products",
    value: "24",
    change: "+2",
    trend: "up" as const,
    icon: Package,
  },
  {
    label: "Customers",
    value: "156",
    change: "+8",
    trend: "up" as const,
    icon: Users,
  },
];

const recentOrders = [
  {
    id: "ORD-001",
    customer: "Sarah Mitchell",
    product: "Crimson Peony Khaden",
    amount: "$2,800",
    status: "paid",
    date: "2025-01-15",
  },
  {
    id: "ORD-002",
    customer: "James Chen",
    product: "Indigo Dragon Runner",
    amount: "$3,400",
    status: "shipped",
    date: "2025-01-14",
  },
  {
    id: "ORD-003",
    customer: "Emma Williams",
    product: "Lotus Medallion Cushion",
    amount: "$680",
    status: "processing",
    date: "2025-01-13",
  },
];

const statusColors: Record<string, string> = {
  paid: "bg-jade/10 text-jade",
  shipped: "bg-indigo-tibet/10 text-indigo-tibet",
  processing: "bg-saffron/10 text-foreground",
  cancelled: "bg-destructive/10 text-destructive",
};

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-3xl text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Overview of your store performance
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-border bg-card p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </span>
              <stat.icon className="h-4 w-4 text-muted-foreground/50" />
            </div>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-semibold text-foreground">
                {stat.value}
              </span>
              <span
                className={`flex items-center text-xs font-medium mb-0.5 ${
                  stat.trend === "up"
                    ? "text-jade"
                    : "text-destructive"
                }`}
              >
                {stat.trend === "up" ? (
                  <ArrowUpRight className="h-3 w-3" />
                ) : (
                  <ArrowDownRight className="h-3 w-3" />
                )}
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif text-lg text-foreground">
              Recent Orders
            </h2>
            <Link
              href="/admin/orders"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="rounded-lg border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary/50">
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Order
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Product
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-right px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {recentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="hover:bg-secondary/30 transition-colors"
                  >
                    <td className="px-4 py-3 font-medium text-foreground">
                      {order.id}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {order.customer}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground max-w-[200px] truncate">
                      {order.product}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${
                          statusColors[order.status] || ""
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right font-medium text-foreground">
                      {order.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="font-serif text-lg text-foreground mb-4">
            Quick Actions
          </h2>
          <div className="space-y-3">
            <Link
              href="/admin/products/new"
              className="block rounded-lg border border-border p-4 hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-md bg-secondary flex items-center justify-center">
                  <Package className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Add New Product
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Create a new listing
                  </p>
                </div>
              </div>
            </Link>
            <Link
              href="/admin/orders"
              className="block rounded-lg border border-border p-4 hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-md bg-secondary flex items-center justify-center">
                  <ShoppingCart className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Manage Orders
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Process and fulfill orders
                  </p>
                </div>
              </div>
            </Link>
            <Link
              href="/admin/images"
              className="block rounded-lg border border-border p-4 hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-md bg-secondary flex items-center justify-center">
                  <DollarSign className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Generate AI Images
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Create lifestyle scenes
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
