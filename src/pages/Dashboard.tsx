import { useState } from "react"
import {
  Menu,
  Search,
  Plus,
  Ticket,
  Clock,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import DashboardSidebar from "../components/DashboardSidebar"
import { ActivityChart, CategoryChart } from "../components/DashboardCharts"
import { StatusBadge, PriorityBadge } from "../components/Badges"
import { recentTickets } from "../lib/data"

const kpis = [
  { label: "Total Tickets", value: "1,284", delta: "+12.5%", trend: "up", icon: Ticket, tint: "bg-info/10 text-info" },
  { label: "Pending Resolution", value: "342", delta: "+2", trend: "up", icon: Clock, tint: "bg-warning/10 text-warning" },
  { label: "Resolved Today", value: "48", delta: "+8", trend: "up", icon: CheckCircle2, tint: "bg-success/10 text-success" },
  { label: "Escalated", value: "12", delta: "-3", trend: "down", icon: AlertTriangle, tint: "bg-danger/10 text-danger" },
]

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-card px-4 sm:px-6">
          <button
            type="button"
            className="rounded-md p-2 text-foreground hover:bg-muted lg:hidden"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="relative hidden max-w-md flex-1 sm:block">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <label htmlFor="dash-search" className="sr-only">
              Search tickets or students
            </label>
            <input
              id="dash-search"
              type="search"
              placeholder="Search tickets, students..."
              className="h-10 w-full rounded-md border border-input bg-background pl-10 pr-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
            />
          </div>

          <div className="ml-auto flex items-center gap-3">
            <button
              type="button"
              className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">New Announcement</span>
            </button>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary">
              GA
            </span>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {/* Overview header */}
          <div className="rounded-2xl bg-primary p-6 text-primary-foreground sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-foreground/70">Admin Overview</p>
            <h1 className="mt-1 text-2xl font-extrabold sm:text-3xl">Welcome back, GBU Administrator</h1>
            <p className="mt-3 max-w-2xl leading-relaxed text-primary-foreground/80">
              System performance at a glance. Manage university-wide grievances, monitor response times, and identify
              critical bottlenecks across all departments.
            </p>
          </div>

          {/* KPI cards */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {kpis.map((k) => (
              <div key={k.label} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <div className="flex items-start justify-between">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-lg ${k.tint}`}>
                    <k.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${
                      k.trend === "up" ? "bg-success/10 text-success" : "bg-danger/10 text-danger"
                    }`}
                  >
                    <TrendingUp className={`h-3.5 w-3.5 ${k.trend === "down" ? "rotate-180" : ""}`} aria-hidden="true" />
                    {k.delta}
                  </span>
                </div>
                <p className="mt-4 text-3xl font-extrabold text-foreground">{k.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{k.label}</p>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <section className="rounded-xl border border-border bg-card p-5 shadow-sm lg:col-span-2 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-base font-bold text-foreground">Ticket Activity Trend</h2>
                  <p className="text-sm text-muted-foreground">Daily comparison of received vs resolved grievances</p>
                </div>
                <div className="flex gap-2 text-xs font-medium">
                  <button className="rounded-md bg-secondary px-3 py-1.5 text-primary">Last 7 Days</button>
                  <button className="rounded-md border border-border px-3 py-1.5 text-muted-foreground hover:bg-muted">
                    Custom Range
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <ActivityChart />
              </div>
            </section>

            <section className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6">
              <h2 className="text-base font-bold text-foreground">Grievance Categories</h2>
              <p className="text-sm text-muted-foreground">Issue distribution by department</p>
              <div className="mt-4">
                <CategoryChart />
              </div>
            </section>
          </div>

          {/* Recent tickets table */}
          <section className="mt-6 rounded-xl border border-border bg-card shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-5 sm:p-6">
              <div>
                <h2 className="text-base font-bold text-foreground">Recent Tickets</h2>
                <p className="text-sm text-muted-foreground">Review and manage the latest grievance submissions</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border text-xs uppercase tracking-wide text-muted-foreground">
                    <th scope="col" className="px-6 py-3 font-semibold">Ticket ID</th>
                    <th scope="col" className="px-6 py-3 font-semibold">Student Name</th>
                    <th scope="col" className="px-6 py-3 font-semibold">Category</th>
                    <th scope="col" className="px-6 py-3 font-semibold">Status</th>
                    <th scope="col" className="px-6 py-3 font-semibold">Priority</th>
                    <th scope="col" className="px-6 py-3 font-semibold">Submitted</th>
                    <th scope="col" className="px-6 py-3 text-right font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTickets.map((t) => (
                    <tr key={t.id} className="border-b border-border last:border-0 hover:bg-muted/40">
                      <td className="px-6 py-4 font-semibold text-primary">{t.id}</td>
                      <td className="px-6 py-4 font-medium text-foreground">{t.studentName}</td>
                      <td className="px-6 py-4 text-muted-foreground">{t.category}</td>
                      <td className="px-6 py-4">
                        <StatusBadge status={t.status} />
                      </td>
                      <td className="px-6 py-4">
                        <PriorityBadge priority={t.priority} />
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">{t.submitted}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted">
                          Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-border p-4 sm:px-6">
              <p className="text-sm text-muted-foreground">Showing 5 of 342 pending tickets</p>
              <div className="flex gap-2">
                <button className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-muted disabled:opacity-50" disabled>
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  Previous
                </button>
                <button className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-sm font-medium text-foreground hover:bg-muted">
                  Next
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </section>

          {/* Footer status */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-card px-5 py-4 text-xs text-muted-foreground">
            <span className="font-semibold uppercase tracking-wide">GBU GrievanceHub Dashboard v2.4.0</span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
              System Status: Optimal
            </span>
          </div>
        </main>
      </div>
    </div>
  )
}
