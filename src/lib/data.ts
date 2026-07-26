export type TicketStatus = "Pending" | "In Progress" | "Verification" | "Resolved" | "Escalated"
export type Priority = "LOW" | "MEDIUM" | "HIGH"

export interface Ticket {
  id: string
  studentName: string
  category: string
  status: TicketStatus
  priority: Priority
  submitted: string
}

export const recentTickets: Ticket[] = [
  { id: "GBU-8821", studentName: "Aditi Sharma", category: "Academic", status: "In Progress", priority: "HIGH", submitted: "2 mins ago" },
  { id: "GBU-8819", studentName: "Rohan Verma", category: "Hostel", status: "Pending", priority: "MEDIUM", submitted: "15 mins ago" },
  { id: "GBU-8815", studentName: "Sanya Malhotra", category: "Finance", status: "Resolved", priority: "LOW", submitted: "1 hour ago" },
  { id: "GBU-8812", studentName: "Vikram Singh", category: "Academic", status: "Escalated", priority: "HIGH", submitted: "3 hours ago" },
  { id: "GBU-8810", studentName: "Priya Das", category: "Infrastructure", status: "In Progress", priority: "MEDIUM", submitted: "5 hours ago" },
]

export const categories = [
  "Academic",
  "Finance",
  "Hostel & Accommodation",
  "Infrastructure",
  "Examination",
  "Library",
  "Administration",
  "Other",
]

export interface ActivityPoint {
  day: string
  received: number
  resolved: number
}

export const activityData: ActivityPoint[] = [
  { day: "Mon", received: 62, resolved: 48 },
  { day: "Tue", received: 74, resolved: 55 },
  { day: "Wed", received: 58, resolved: 60 },
  { day: "Thu", received: 80, resolved: 66 },
  { day: "Fri", received: 71, resolved: 70 },
  { day: "Sat", received: 40, resolved: 44 },
  { day: "Sun", received: 33, resolved: 38 },
]

export interface CategoryDatum {
  name: string
  tickets: number
  color: string
}

export const categoryData: CategoryDatum[] = [
  { name: "Academic", tickets: 400, color: "#1e3a8a" },
  { name: "Hostel", tickets: 300, color: "#dc2626" },
  { name: "Finance", tickets: 200, color: "#f59e0b" },
  { name: "Infrastructure", tickets: 284, color: "#16a34a" },
]

/* Sample ticket for tracking demo */
export interface TrackedTicket {
  id: string
  category: string
  status: TicketStatus
  priority: Priority
  submittedOn: string
  assignedTo: string
  department: string
  subject: string
  timeline: { label: string; date: string; done: boolean; description: string }[]
}

export const sampleTrackedTicket: TrackedTicket = {
  id: "GBU-2026-042",
  category: "Academic",
  status: "In Progress",
  priority: "HIGH",
  submittedOn: "12 Jan 2026, 10:24 AM",
  assignedTo: "Dr. Meera Nair",
  department: "School of Engineering",
  subject: "Discrepancy in semester examination marks",
  timeline: [
    { label: "Grievance Filed", date: "12 Jan 2026", done: true, description: "Submitted through the encrypted online form." },
    { label: "Officer Assigned", date: "12 Jan 2026", done: true, description: "Dr. Meera Nair assigned as case handler." },
    { label: "Verification", date: "14 Jan 2026", done: true, description: "Documents and records under internal review." },
    { label: "Resolution", date: "Pending", done: false, description: "Final action will be documented once complete." },
  ],
}
