import { Link } from "react-router-dom"
import {
  ArrowRight,
  Target,
  Eye,
  Lock,
  Zap,
  BarChart3,
  Users,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react"
import Button from "../components/Button"

const keyFeatures = [
  {
    icon: Eye,
    title: "Transparent Tracking",
    body: "Every grievance receives a unique ticket ID that lets users follow their case in real time, from submission to resolution.",
  },
  {
    icon: Lock,
    title: "Secure & Confidential",
    body: "Institutional-grade encryption protects personal information and supporting documents at every stage.",
  },
  {
    icon: Zap,
    title: "Swift Resolution",
    body: "Dedicated departmental officers ensure most issues are addressed within 3-5 business days with clear accountability.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    body: "Administrative analytics surface recurring issues, helping the university improve infrastructure and services.",
  },
  {
    icon: Users,
    title: "For Students & Staff",
    body: "A single portal serving the entire university community, regardless of school, department, or role.",
  },
  {
    icon: ShieldCheck,
    title: "Accountable Workflow",
    body: "Structured escalation paths guarantee that no request is lost, ignored, or left without a documented outcome.",
  },
]

const contactItems = [
  { icon: Mail, label: "Email", value: "support@gbu.edu.in", href: "mailto:support@gbu.edu.in" },
  { icon: Phone, label: "Phone", value: "+91 1234567890", href: "tel:+911234567890" },
  { icon: MapPin, label: "Address", value: "GBU Campus, Greater Noida, Uttar Pradesh 201312, India" },
  { icon: Clock, label: "Office Hours", value: "Mon – Fri, 9:00 AM – 5:00 PM" },
]

export default function About() {
  return (
    <>
      {/* Top strip */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-1.5 text-center text-xs font-medium sm:px-6 lg:px-8">
          Official University Portal · Gautam Buddha University
        </div>
      </div>

      {/* Hero / Overview */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-semibold text-primary shadow-sm ring-1 ring-border">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              About the Portal
            </span>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
              About GBU GrievanceHub
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              GBU GrievanceHub is the centralized digital grievance redressal platform for Gautam Buddha University. It
              gives students and staff a single, secure place to raise concerns, track their progress, and receive
              accountable resolutions.
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-border">
            <img
              src="/images/campus-hero.png"
              alt="Gautam Buddha University campus with students walking on the plaza"
              className="h-full w-full object-cover"
              width={800}
              height={600}
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Project Overview</p>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Bridging the gap between people and departments
            </h2>
            <div className="mt-5 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                Traditional grievance handling often relies on scattered emails, paper forms, and in-person visits that
                are difficult to track. GrievanceHub replaces that fragmented process with a unified digital workflow.
              </p>
              <p>
                From the moment a grievance is filed, it is logged, categorized, and routed to the right departmental
                officer. Both the complainant and the administration share the same source of truth, ensuring
                transparency and eliminating lost requests.
              </p>
              <p>
                The platform was built to serve the entire university community — undergraduate and postgraduate
                students, research scholars, faculty, and administrative staff alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
            <div className="lg:col-span-1">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Target className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                Our Mission
              </h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-pretty text-xl font-medium leading-relaxed text-foreground">
                To ensure that every voice in the university community is heard and every grievance is resolved with
                fairness, speed, and complete transparency.
              </p>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                We are committed to fostering a culture of accountability where concerns are treated with dignity,
                addressed within defined timelines, and used as opportunities to continuously improve the university
                experience for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">What Sets Us Apart</p>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Key Features
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A modern toolkit designed to make grievance redressal simple for users and rigorous for administrators.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {keyFeatures.map((f) => (
            <article
              key={f.title}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                <f.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Get in Touch</p>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Contact Information
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Have a question about the portal or need help with a grievance? Reach out to the Grievance Redressal
              Cell.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="mt-1 block font-semibold text-foreground hover:text-primary">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-semibold text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:text-left">
          <div>
            <h2 className="text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Still have questions?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Browse our frequently asked questions or file a grievance to get started.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button to="/faq" size="lg" variant="outline">
              View FAQ
            </Button>
            <Button to="/submit" size="lg">
              Submit a Grievance
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
