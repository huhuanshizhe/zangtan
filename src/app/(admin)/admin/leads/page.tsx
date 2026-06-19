"use client";

import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Globe,
  Building,
  Clock,
  ChevronDown,
  RefreshCw,
  MessageSquare,
  Tag,
  Star,
  Filter,
} from "lucide-react";

interface Inquiry {
  id: string;
  session_id: string | null;
  name: string | null;
  email: string | null;
  phone: string | null;
  company: string | null;
  country: string | null;
  source_page: string | null;
  interests: string | null;
  message: string | null;
  conversation_summary: string | null;
  status: string;
  priority: string;
  assigned_to: string | null;
  admin_notes: string | null;
  contacted_at: string | null;
  created_at: string;
}

const STATUS_OPTIONS = [
  { value: "new", label: "New", color: "bg-blue-100 text-blue-800" },
  {
    value: "contacted",
    label: "Contacted",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    value: "qualified",
    label: "Qualified",
    color: "bg-purple-100 text-purple-800",
  },
  { value: "quoted", label: "Quoted", color: "bg-orange-100 text-orange-800" },
  {
    value: "converted",
    label: "Converted",
    color: "bg-green-100 text-green-800",
  },
  { value: "closed", label: "Closed", color: "bg-gray-100 text-gray-800" },
];

const PRIORITY_OPTIONS = [
  { value: "low", label: "Low", color: "text-gray-500" },
  { value: "medium", label: "Medium", color: "text-blue-600" },
  { value: "high", label: "High", color: "text-orange-600" },
  { value: "urgent", label: "Urgent", color: "text-red-600" },
];

export default function LeadsPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [updating, setUpdating] = useState(false);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/leads?status=${statusFilter}&limit=100`);
      const data = await res.json();
      setInquiries(data.inquiries || []);
      setTotal(data.total || 0);
    } catch (err) {
      console.error("Failed to fetch inquiries:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, [statusFilter]);

  const updateInquiry = async (
    id: string,
    updates: Record<string, string>
  ) => {
    setUpdating(true);
    try {
      await fetch("/api/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...updates }),
      });
      await fetchInquiries();
    } catch (err) {
      console.error("Failed to update inquiry:", err);
    } finally {
      setUpdating(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const opt = STATUS_OPTIONS.find((s) => s.value === status);
    return (
      <span
        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${opt?.color || "bg-gray-100 text-gray-800"}`}
      >
        {opt?.label || status}
      </span>
    );
  };

  const getPriorityIcon = (priority: string) => {
    const opt = PRIORITY_OPTIONS.find((p) => p.value === priority);
    return (
      <Star
        className={`h-3.5 w-3.5 ${opt?.color || "text-gray-400"} ${priority === "urgent" || priority === "high" ? "fill-current" : ""}`}
      />
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl font-semibold">Inquiries</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {total} total inquiries from the cultural ambassador chat
          </p>
        </div>
        <button
          onClick={fetchInquiries}
          className="flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <RefreshCw
            className={`h-4 w-4 ${loading ? "animate-spin" : ""}`}
          />
          Refresh
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 mb-6">
        <Filter className="h-4 w-4 text-muted-foreground" />
        {["all", ...STATUS_OPTIONS.map((s) => s.value)].map((s) => (
          <button
            key={s}
            onClick={() => setStatusFilter(s)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              statusFilter === s
                ? "bg-foreground text-background"
                : "border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {s === "all" ? "All" : STATUS_OPTIONS.find((o) => o.value === s)?.label}
          </button>
        ))}
      </div>

      {/* Table */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <RefreshCw className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
      ) : inquiries.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground">
          <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-20" />
          <p className="text-lg font-medium">No inquiries yet</p>
          <p className="text-sm mt-1">
            Inquiries from the chat widget will appear here.
          </p>
        </div>
      ) : (
        <div className="border border-border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-secondary/50">
              <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="px-4 py-3 font-medium">Contact</th>
                <th className="px-4 py-3 font-medium">Company</th>
                <th className="px-4 py-3 font-medium">Interest</th>
                <th className="px-4 py-3 font-medium">Source</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Priority</th>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {inquiries.map((inq) => (
                <tr
                  key={inq.id}
                  className="hover:bg-secondary/30 transition-colors cursor-pointer"
                  onClick={() => setSelectedInquiry(inq)}
                >
                  <td className="px-4 py-3">
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {inq.name || "Anonymous"}
                      </p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                        <Mail className="h-3 w-3" />
                        {inq.email || "—"}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">
                    {inq.company || "—"}
                    {inq.country && (
                      <p className="text-xs flex items-center gap-1 mt-0.5">
                        <Globe className="h-3 w-3" />
                        {inq.country}
                      </p>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground max-w-[150px] truncate">
                    {inq.interests || "—"}
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {inq.source_page || "—"}
                  </td>
                  <td className="px-4 py-3">{getStatusBadge(inq.status)}</td>
                  <td className="px-4 py-3">
                    {getPriorityIcon(inq.priority)}
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {new Date(inq.created_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                  <td className="px-4 py-3">
                    <select
                      value={inq.status}
                      onChange={(e) => {
                        e.stopPropagation();
                        updateInquiry(inq.id, { status: e.target.value });
                      }}
                      onClick={(e) => e.stopPropagation()}
                      className="rounded border border-input bg-background px-2 py-1 text-xs"
                      disabled={updating}
                    >
                      {STATUS_OPTIONS.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Detail Panel */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-foreground/40 backdrop-blur-sm">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-background rounded-t-xl sm:rounded-xl shadow-2xl border border-border">
            <div className="sticky top-0 bg-background border-b border-border px-6 py-4 flex items-center justify-between">
              <h2 className="font-serif text-lg font-semibold">
                Inquiry Details
              </h2>
              <button
                onClick={() => setSelectedInquiry(null)}
                className="rounded-full p-2 hover:bg-secondary transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="px-6 py-5 space-y-5">
              {/* Contact Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">
                    Name
                  </label>
                  <p className="text-sm font-medium mt-1">
                    {selectedInquiry.name || "—"}
                  </p>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">
                    Email
                  </label>
                  <p className="text-sm font-medium mt-1 flex items-center gap-1">
                    <Mail className="h-3.5 w-3.5" />
                    <a
                      href={`mailto:${selectedInquiry.email}`}
                      className="underline underline-offset-2"
                    >
                      {selectedInquiry.email || "—"}
                    </a>
                  </p>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">
                    Phone
                  </label>
                  <p className="text-sm font-medium mt-1 flex items-center gap-1">
                    <Phone className="h-3.5 w-3.5" />
                    {selectedInquiry.phone || "—"}
                  </p>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">
                    Company / Country
                  </label>
                  <p className="text-sm font-medium mt-1 flex items-center gap-1">
                    <Building className="h-3.5 w-3.5" />
                    {selectedInquiry.company || "—"}{" "}
                    {selectedInquiry.country && (
                      <span className="text-muted-foreground">
                        / {selectedInquiry.country}
                      </span>
                    )}
                  </p>
                </div>
              </div>

              {/* Inquiry Details */}
              <div className="border-t border-border pt-4 space-y-3">
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">
                    Interests
                  </label>
                  <p className="text-sm mt-1">
                    {selectedInquiry.interests || "—"}
                  </p>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">
                    Message
                  </label>
                  <p className="text-sm mt-1">
                    {selectedInquiry.message || "—"}
                  </p>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">
                    Source Page
                  </label>
                  <p className="text-sm mt-1">
                    {selectedInquiry.source_page || "—"}
                  </p>
                </div>
              </div>

              {/* Conversation Summary */}
              {selectedInquiry.conversation_summary && (
                <div className="border-t border-border pt-4">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">
                    Conversation History
                  </label>
                  <div className="mt-2 bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground whitespace-pre-wrap font-mono text-xs leading-relaxed">
                    {selectedInquiry.conversation_summary}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="border-t border-border pt-4 flex items-center gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-1.5">
                    Status
                  </label>
                  <select
                    value={selectedInquiry.status}
                    onChange={(e) =>
                      updateInquiry(selectedInquiry.id, {
                        status: e.target.value,
                      })
                    }
                    className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                    disabled={updating}
                  >
                    {STATUS_OPTIONS.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-1.5">
                    Priority
                  </label>
                  <select
                    value={selectedInquiry.priority}
                    onChange={(e) =>
                      updateInquiry(selectedInquiry.id, {
                        priority: e.target.value,
                      })
                    }
                    className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                    disabled={updating}
                  >
                    {PRIORITY_OPTIONS.map((p) => (
                      <option key={p.value} value={p.value}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-1.5">
                    Quick Reply
                  </label>
                  <a
                    href={`mailto:${selectedInquiry.email}?subject=Re: Woven Plateau Inquiry&body=Dear ${selectedInquiry.name || "Customer"},%0D%0A%0D%0AThank you for your interest in Woven Plateau.`}
                    className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-foreground/90 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    Send Email
                  </a>
                </div>
              </div>

              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" />
                Created:{" "}
                {new Date(selectedInquiry.created_at).toLocaleString()}
                {selectedInquiry.contacted_at &&
                  ` · Contacted: ${new Date(selectedInquiry.contacted_at).toLocaleString()}`}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
