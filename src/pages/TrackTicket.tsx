import { useState, type FormEvent } from "react"
import {
  Search,
  Ticket,
  ShieldAlert,
  Mail,
  LifeBuoy,
  CheckCircle2,
  Circle,
  Clock,
  FileText,
  BookOpen,
} from "lucide-react"
import Button from "../components/Button"
import { inputClass } from "../components/FormField"
import { StatusBadge, PriorityBadge } from "../components/Badges"
import { sampleTrackedTicket } from "../lib/data"

export default function TrackTicket() {
  const [query, setQuery] = useState("")
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState("")

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!query.trim()) {
      setError("Please enter a Ticket ID.")
      setLoaded(false)
      return
    }
    setError("")
    setLoaded(true)
  }

  return (
    <>
      <div className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Track Your Request
          </h1>
          <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Enter your unique Ticket ID below to see the current status and progress history of your grievance.
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-6 grid gap-4 lg:grid-cols-3 lg:items-start">
            <div className="lg:col-span-2">
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Search
                    className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <label htmlFor="ticketId" className="sr-only">
                    Ticket ID
                  </label>
                  <input
                    id="ticketId"
                    type="text"
                    className={`${inputClass} pl-11`}
                    placeholder="Enter Ticket ID (e.g. GBU-2026-042)"
                    value={query}
                    aria-invalid={!!error}
                    onChange={(e) => {
                      setQuery(e.target.value)
                      setError("")
                    }}
                  />
                </div>
                <Button type="submit" size="lg">
                  Track Now
                </Button>
              </div>
              {error && (
                <p className="mt-2 text-xs font-medium text-danger" role="alert">
                  {error}
                </p>
              )}
              <button
                type="button"
                className="mt-3 text-sm font-medium text-primary hover:underline"
                onClick={() => {
                  setQuery(sampleTrackedTicket.id)
                  setError("")
                  setLoaded(true)
                }}
              >
                Try a sample ticket ({sampleTrackedTicket.id})
              </button>
            </div>

            <div className="rounded-xl bg-primary p-5 text-primary-foreground shadow-sm">
              <div className="flex items-center gap-2">
                <ShieldAlert className="h-5 w-5" aria-hidden="true" />
                <p className="text-sm font-bold">Official GBU Portal</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
                Your Ticket ID is your private key to access updates. Do not share it with unauthorized personnel.
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {loaded ? <TicketResult /> : <NoTicketLoaded />}
      </div>

      {/* Trouble section */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="text-xl font-bold text-foreground">Having Trouble Tracking?</h2>
            <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">
              If your Ticket ID is not working or you&apos;re facing technical issues, please contact our helpdesk.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" variant="primary" to="/submit">
              <LifeBuoy className="h-5 w-5" aria-hidden="true" />
              Contact Support
            </Button>
            <Button size="lg" variant="outline" to="/faq">
              <BookOpen className="h-5 w-5" aria-hidden="true" />
              View User Manual
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

function NoTicketLoaded() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card p-10 text-center lg:col-span-2">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
          <Ticket className="h-8 w-8" aria-hidden="true" />
        </span>
        <h2 className="mt-5 text-xl font-bold text-foreground">No Ticket Loaded</h2>
        <p className="mt-2 max-w-md leading-relaxed text-muted-foreground">
          Use the search bar above to look up your grievance status. Your Ticket ID was sent to your registered
          official email at the time of submission.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-sm">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
            <Mail className="h-5 w-5" aria-hidden="true" />
          </span>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Check your <span className="font-semibold text-foreground">&ldquo;Sent&rdquo; folder</span> for
            GBU-GrievanceHub notification emails.
          </p>
        </div>
        <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-sm">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
            <LifeBuoy className="h-5 w-5" aria-hidden="true" />
          </span>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Contact the <span className="font-semibold text-foreground">IT Support Desk</span> if you have lost your
            Ticket ID.
          </p>
        </div>
      </div>
    </div>
  )
}

function TicketResult() {
  const t = sampleTrackedTicket
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* Main card */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:col-span-2">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Ticket ID</p>
            <h2 className="mt-1 text-2xl font-extrabold tracking-wide text-primary">{t.id}</h2>
            <p className="mt-2 text-base font-semibold text-foreground">{t.subject}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <StatusBadge status={t.status} />
            <PriorityBadge priority={t.priority} />
          </div>
        </div>

        <dl className="mt-6 grid gap-4 rounded-xl bg-muted/50 p-5 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Category</dt>
            <dd className="mt-1 text-sm font-semibold text-foreground">{t.category}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Department</dt>
            <dd className="mt-1 text-sm font-semibold text-foreground">{t.department}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Assigned Officer</dt>
            <dd className="mt-1 text-sm font-semibold text-foreground">{t.assignedTo}</dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Submitted On</dt>
            <dd className="mt-1 text-sm font-semibold text-foreground">{t.submittedOn}</dd>
          </div>
        </dl>

        {/* Timeline */}
        <div className="mt-8">
          <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">Progress History</h3>
          <ol className="mt-5 space-y-6">
            {t.timeline.map((step, i) => {
              const isLast = i === t.timeline.length - 1
              return (
                <li key={step.label} className="relative flex gap-4 pb-1">
                  {!isLast && (
                    <span
                      className={`absolute left-[15px] top-9 h-[calc(100%-4px)] w-0.5 ${
                        step.done ? "bg-primary" : "bg-border"
                      }`}
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className={`z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                      step.done ? "bg-primary text-primary-foreground" : "border border-border bg-card text-muted-foreground"
                    }`}
                  >
                    {step.done ? <CheckCircle2 className="h-5 w-5" aria-hidden="true" /> : <Circle className="h-4 w-4" aria-hidden="true" />}
                  </span>
                  <div className="pt-0.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-bold text-foreground">{step.label}</p>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {step.date}
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>

      {/* Side info */}
      <aside className="space-y-6">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h3 className="text-base font-bold text-foreground">Current Stage</h3>
          <p className="mt-3 rounded-lg bg-info/10 p-4 text-sm font-semibold text-info">
            Your grievance is being actively reviewed by the assigned officer.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            You will receive an email notification at each stage. Expected resolution within 3-5 business days.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-secondary p-6">
          <div className="flex items-center gap-2 text-primary">
            <FileText className="h-5 w-5" aria-hidden="true" />
            <h3 className="text-base font-bold text-foreground">Documents</h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            1 supporting document attached. Verified by the review committee.
          </p>
        </div>

        <Button to="/submit" variant="outline" size="lg" className="w-full">
          File a New Grievance
        </Button>
      </aside>
    </div>
  )
}
