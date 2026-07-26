import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"
import { activityData, categoryData } from "../lib/data"

const tooltipStyle = {
  borderRadius: "0.5rem",
  border: "1px solid var(--color-border)",
  fontSize: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
}

export function ActivityChart() {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={activityData} margin={{ top: 10, right: 10, left: -18, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "8px" }} iconType="circle" />
          <Line
            type="monotone"
            dataKey="received"
            name="Received"
            stroke="#1e3a8a"
            strokeWidth={2.5}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="resolved"
            name="Resolved"
            stroke="#f59e0b"
            strokeWidth={2.5}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export function CategoryChart() {
  const total = categoryData.reduce((sum, c) => sum + c.tickets, 0)
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative h-52 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="tickets"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={80}
              paddingAngle={2}
              stroke="none"
            >
              {categoryData.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip contentStyle={tooltipStyle} formatter={(value: number) => [`${value} tickets`, ""]} />
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-extrabold text-foreground">{total.toLocaleString()}</span>
          <span className="text-xs text-muted-foreground">Total</span>
        </div>
      </div>
      <ul className="grid w-full grid-cols-2 gap-3">
        {categoryData.map((c) => (
          <li key={c.name} className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2">
            <span className="flex items-center gap-2 text-sm font-medium text-foreground">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: c.color }} aria-hidden="true" />
              {c.name}
            </span>
            <span className="text-sm font-bold text-muted-foreground">{c.tickets}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
