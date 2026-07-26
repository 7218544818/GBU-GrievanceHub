import { Link } from "react-router-dom"
import { ShieldCheck } from "lucide-react"

interface LogoProps {
  subtitle?: string
  onLight?: boolean
}

export default function Logo({ subtitle = "Transparency & Accountability", onLight = true }: LogoProps) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="GBU GrievanceHub home">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
        <ShieldCheck className="h-6 w-6" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`text-lg font-extrabold ${onLight ? "text-foreground" : "text-primary-foreground"}`}>
          GBU <span className="text-primary">GrievanceHub</span>
        </span>
        {subtitle && (
          <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">{subtitle}</span>
        )}
      </span>
    </Link>
  )
}
