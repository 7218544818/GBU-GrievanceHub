import { Link } from "react-router-dom"
import {
  LayoutDashboard,
  Ticket,
  Megaphone,
  Users,
  FileBarChart,
  Tags,
  Settings,
  LogOut,
  ShieldCheck,
  X,
} from "lucide-react"

const menu = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Ticket, label: "Tickets" },
  { icon: Megaphone, label: "Add Announcement" },
  { icon: Users, label: "Users" },
  { icon: FileBarChart, label: "Reports" },
  { icon: Tags, label: "Categories" },
  { icon: Settings, label: "Settings" },
]

interface Props {
  open: boolean
  onClose: () => void
}

export default function DashboardSidebar({ open, onClose }: Props) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-foreground/40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-primary text-primary-foreground transition-transform lg:static lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between gap-2 border-b border-primary-foreground/10 px-5">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/15">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-extrabold">GBU GrievanceHub</span>
              <span className="text-[10px] uppercase tracking-wide text-primary-foreground/60">Admin Panel</span>
            </span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1.5 text-primary-foreground/70 hover:bg-primary-foreground/10 lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-5" aria-label="Dashboard">
          <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-widest text-primary-foreground/50">Menu</p>
          <ul className="space-y-1">
            {menu.map((item) => (
              <li key={item.label}>
                <button
                  type="button"
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    item.active
                      ? "bg-primary-foreground/15 text-primary-foreground"
                      : "text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  }`}
                  aria-current={item.active ? "page" : undefined}
                >
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-primary-foreground/10 p-3">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-primary-foreground/70 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <LogOut className="h-5 w-5" aria-hidden="true" />
            Logout
          </Link>
        </div>
      </aside>
    </>
  )
}
