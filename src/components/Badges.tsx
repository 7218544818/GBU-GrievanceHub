import type { TicketStatus, Priority } from "../lib/data"

const statusStyles: Record<TicketStatus, { dot: string; text: string; bg: string }> = {
  Pending: { dot: "bg-warning", text: "text-warning", bg: "bg-warning/10" },
  "In Progress": { dot: "bg-info", text: "text-info", bg: "bg-info/10" },
  Verification: { dot: "bg-info", text: "text-info", bg: "bg-info/10" },
  Resolved: { dot: "bg-success", text: "text-success", bg: "bg-success/10" },
  Escalated: { dot: "bg-danger", text: "text-danger", bg: "bg-danger/10" },
}

export function StatusBadge({ status }: { status: TicketStatus }) {
  const s = statusStyles[status]
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${s.bg} ${s.text}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} aria-hidden="true" />
      {status}
    </span>
  )
}

const priorityStyles: Record<Priority, string> = {
  LOW: "bg-muted text-muted-foreground",
  MEDIUM: "bg-accent/15 text-accent-foreground",
  HIGH: "bg-danger/10 text-danger",
}

export function PriorityBadge({ priority }: { priority: Priority }) {
  return (
    <span className={`inline-flex items-center rounded px-2 py-0.5 text-[11px] font-bold tracking-wide ${priorityStyles[priority]}`}>
      {priority}
    </span>
  )
}
