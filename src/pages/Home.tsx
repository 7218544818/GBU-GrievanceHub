import { Link } from "react-router-dom"
import {
  ArrowRight,
  Search,
  Eye,
  Lock,
  Zap,
  BarChart3,
  FileText,
  UserCheck,
  ShieldCheck,
  CheckCircle2,
  Quote,
} from "lucide-react"
import Button from "../components/Button"

const stats = [
  { value: "98%", label: "Resolution Rate" },
  { value: "24h", label: "Avg. Response" },
  { value: "Secure", label: "Ticket Tracking" },
]

const features = [
  {
    icon: Eye,
    title: "Transparent Tracking",
    body: "Monitor your grievance status in real-time with unique ticket IDs. Stay informed at every stage of the resolution process.",
  },
  {
    icon: Lock,
    title: "Secure Submissions",
    body: "Your information is protected by institutional-grade encryption. Submit documents safely knowing your data is confidential.",
  },
  {
    icon: Zap,
    title: "Swift Resolution",
    body: "Dedicated departmental task forces ensure that your issues are addressed within 3-5 business days with accountability.",
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    body: "Comprehensive reporting for administrators helps identify recurring issues and improve university infrastructure.",
  },
]

const steps = [
  { num: "01", icon: FileText, title: "File Grievance", body: "Submit details through our encrypted online form." },
  { num: "02", icon: UserCheck, title: "Assign Officer", body: "A departmental representative is assigned to your case." },
  { num: "03", icon: ShieldCheck, title: "Verification", body: "Relevant documents and facts are verified internally." },
  { num: "04", icon: CheckCircle2, title: "Resolution", body: "A final action is taken and documented in the system." },
]

export default function Home() {
  return (
    <>
      {/* Top strip */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-1.5 text-center text-xs font-medium sm:px-6 lg:px-8">
          Official University Portal · Gautam Buddha University
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-semibold text-primary shadow-sm ring-1 ring-border">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Your Voice Matters
            </span>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
              Grievances Resolved with Transparency.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              The GBU GrievanceHub is a centralized digital platform designed for students and staff to raise, track,
              and manage requests with absolute security and institutional accountability.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/submit" size="lg">
                Submit a Grievance
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
              <Button to="/track" size="lg" variant="outline">
                <Search className="h-5 w-5" aria-hidden="true" />
                Track Ticket Status
              </Button>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-lg border border-border bg-card p-4 text-center shadow-sm">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-2xl font-extrabold text-primary">{s.value}</dd>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-border">
              <img
                src="/images/academics.png"
                alt="University graduates in gowns walking together under a campus archway"
                className="h-full w-full object-cover"
                width={800}
                height={600}
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl bg-card p-4 shadow-lg ring-1 ring-border sm:block">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Academics</p>
              <p className="mt-1 text-sm font-bold text-foreground">Accountability First</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">A Portal Built on Accountability</p>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Bridging the communication gap
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            We leverage modern technology to bridge the communication gap between university departments and
            stakeholders.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <article
              key={f.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                <f.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mt-5 text-[11px] font-bold uppercase tracking-wider text-primary">Feature</p>
              <h3 className="mt-1 text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              <Link
                to="/submit"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                Learn more
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              How GrievanceHub Works
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Our workflow is designed to be simple for users while maintaining rigorous tracking for the university
              administration.
            </p>
          </div>

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.num} className="relative rounded-xl border border-border bg-card p-6 shadow-sm">
                <span className="text-3xl font-extrabold text-border">{step.num}</span>
                <span className="mt-2 flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Commitment quote */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="overflow-hidden rounded-2xl bg-primary text-primary-foreground shadow-lg">
          <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-2">
              <Quote className="h-9 w-9 text-primary-foreground/40" aria-hidden="true" />
              <p className="mt-4 text-balance text-xl font-medium leading-relaxed sm:text-2xl">
                &ldquo;The university administration is committed to resolving every grievance with fairness. Our
                digital portal ensures that no voice goes unheard and every request is tracked to its logical
                conclusion.&rdquo;
              </p>
              <div className="mt-6">
                <p className="font-bold">Vice Chancellor</p>
                <p className="text-sm text-primary-foreground/70">Gautam Buddha University</p>
              </div>
            </div>
            <div className="flex lg:justify-end">
              <Button to="/about" variant="accent" size="lg">
                Read our Redressal Policy
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:text-left">
          <div>
            <h2 className="text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Ready to raise an issue or track an existing ticket?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Join thousands of students and staff resolving grievances transparently.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button to="/submit" size="lg">
              Submit a Grievance
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Button to="/track" size="lg" variant="outline">
              Track Ticket
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
