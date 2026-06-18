import { Eye, Truck, Package, Clock } from "lucide-react";
import Link from "next/link";

const orders = [
  {
    id: "ORD-001",
    stripeId: "cs_test_abc123",
    customer: "Sarah Mitchell",
    email: "sarah@example.com",
    items: ["Crimson Peony Khaden x1"],
    total: 2800,
    status: "paid",
    date: "2025-01-15",
    shippingCountry: "US",
  },
  {
    id: "ORD-002",
    stripeId: "cs_test_def456",
    customer: "James Chen",
    email: "james@example.com",
    items: ["Indigo Dragon Runner x1"],
    total: 3400,
    status: "shipped",
    date: "2025-01-14",
    shippingCountry: "GB",
    trackingNumber: "1Z999AA10123456784",
  },
  {
    id: "ORD-003",
    stripeId: "cs_test_ghi789",
    customer: "Emma Williams",
    email: "emma@example.com",
    items: ["Lotus Medallion Cushion Cover x2"],
    total: 1360,
    status: "processing",
    date: "2025-01-13",
    shippingCountry: "AU",
  },
  {
    id: "ORD-004",
    stripeId: "cs_test_jkl012",
    customer: "Hans Mueller",
    email: "hans@example.com",
    items: ["Saffron Meditation Mat x1", "Lotus Medallion Cushion x1"],
    total: 2280,
    status: "paid",
    date: "2025-01-12",
    shippingCountry: "DE",
  },
];

const statusConfig: Record<string, { color: string; icon: typeof Clock }> = {
  pending: { color: "bg-muted text-muted-foreground", icon: Clock },
  paid: { color: "bg-jade/10 text-jade", icon: Package },
  processing: { color: "bg-saffron/10 text-foreground", icon: Package },
  shipped: { color: "bg-indigo-tibet/10 text-indigo-tibet", icon: Truck },
  delivered: { color: "bg-jade/10 text-jade", icon: Package },
  cancelled: { color: "bg-destructive/10 text-destructive", icon: Clock },
};

export default function AdminOrdersPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl text-foreground">Orders</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {orders.length} orders total
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by order ID or customer..."
          className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <select className="rounded-md border border-border bg-background px-3 py-2 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring">
          <option>All Status</option>
          <option>Pending</option>
          <option>Paid</option>
          <option>Processing</option>
          <option>Shipped</option>
          <option>Delivered</option>
        </select>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {orders.map((order) => {
          const config = statusConfig[order.status] || statusConfig.pending;
          const StatusIcon = config.icon;

          return (
            <div
              key={order.id}
              className="rounded-lg border border-border bg-card overflow-hidden"
            >
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <StatusIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium text-foreground">
                        {order.id}
                      </span>
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${config.color}`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {order.date}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">
                      Customer
                    </p>
                    <p className="text-foreground">{order.customer}</p>
                    <p className="text-muted-foreground text-xs">
                      {order.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">
                      Items
                    </p>
                    {order.items.map((item, i) => (
                      <p key={i} className="text-foreground text-xs">
                        {item}
                      </p>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">
                      Total / Ship to
                    </p>
                    <p className="font-medium text-foreground">
                      ${order.total.toLocaleString()}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {order.shippingCountry}
                      {order.trackingNumber && (
                        <span className="ml-1">
                          · Tracking: {order.trackingNumber.slice(0, 12)}...
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
                  {order.status === "paid" && (
                    <button className="inline-flex items-center gap-1.5 rounded-md bg-foreground text-background px-3 py-1.5 text-xs font-medium hover:bg-foreground/90 transition-colors">
                      <Package className="h-3 w-3" />
                      Mark as Processing
                    </button>
                  )}
                  {order.status === "processing" && (
                    <button className="inline-flex items-center gap-1.5 rounded-md bg-foreground text-background px-3 py-1.5 text-xs font-medium hover:bg-foreground/90 transition-colors">
                      <Truck className="h-3 w-3" />
                      Ship Order
                    </button>
                  )}
                  <Link
                    href={`/admin/orders/${order.id}`}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Eye className="h-3 w-3" />
                    Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
