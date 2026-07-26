import { useState, type FormEvent } from "react"
import { Link } from "react-router-dom"
import { ShieldCheck, Lock, Paperclip, CheckCircle2, Info, ArrowRight } from "lucide-react"
import Button from "../components/Button"
import { Field, inputClass, textareaClass } from "../components/FormField"
import { categories } from "../lib/data"

interface FormState {
  fullName: string
  email: string
  enrollment: string
  category: string
  priority: string
  subject: string
  description: string
  consent: boolean
}

const initialState: FormState = {
  fullName: "",
  email: "",
  enrollment: "",
  category: "",
  priority: "MEDIUM",
  subject: "",
  description: "",
  consent: false,
}

export default function SubmitGrievance() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [ticketId, setTicketId] = useState<string | null>(null)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: "" }))
  }

  function validate() {
    const next: Record<string, string> = {}
    if (!form.fullName.trim()) next.fullName = "Please enter your full name."
    if (!form.email.trim()) next.email = "Please enter your email."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address."
    if (!form.enrollment.trim()) next.enrollment = "Enrollment / Staff ID is required."
    if (!form.category) next.category = "Select a category."
    if (!form.subject.trim()) next.subject = "Please enter a subject."
    if (form.description.trim().length < 20) next.description = "Please describe your grievance (min. 20 characters)."
    if (!form.consent) next.consent = "You must confirm the information is accurate."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    const id = `GBU-2026-${Math.floor(100 + Math.random() * 900)}`
    setTicketId(id)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (ticketId) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm sm:p-12">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success">
            <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
          </span>
          <h1 className="mt-6 text-2xl font-extrabold text-foreground">Grievance Submitted Successfully</h1>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            Your grievance has been recorded. A confirmation with your Ticket ID has been sent to your registered
            email.
          </p>
          <div className="mt-6 rounded-lg border border-dashed border-primary/40 bg-secondary p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Your Ticket ID</p>
            <p className="mt-1 text-2xl font-extrabold tracking-wide text-primary">{ticketId}</p>
          </div>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to="/track" size="lg">
              Track This Ticket
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                setForm(initialState)
                setTicketId(null)
              }}
            >
              Submit Another
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <div className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-semibold text-primary shadow-sm ring-1 ring-border">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Encrypted Submission
          </span>
          <h1 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Submit a Grievance
          </h1>
          <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Fill out the form below with accurate details. Your information is confidential and a unique Ticket ID will
            be generated for tracking.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        {/* Form */}
        <form onSubmit={handleSubmit} noValidate className="lg:col-span-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-bold text-foreground">Grievant Details</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" htmlFor="fullName" required error={errors.fullName}>
                <input
                  id="fullName"
                  type="text"
                  className={inputClass}
                  placeholder="e.g. Aditi Sharma"
                  value={form.fullName}
                  aria-invalid={!!errors.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                />
              </Field>
              <Field label="Official Email" htmlFor="email" required error={errors.email}>
                <input
                  id="email"
                  type="email"
                  className={inputClass}
                  placeholder="name@gbu.edu.in"
                  value={form.email}
                  aria-invalid={!!errors.email}
                  onChange={(e) => update("email", e.target.value)}
                />
              </Field>
              <Field label="Enrollment / Staff ID" htmlFor="enrollment" required error={errors.enrollment}>
                <input
                  id="enrollment"
                  type="text"
                  className={inputClass}
                  placeholder="e.g. GBU21CSE0042"
                  value={form.enrollment}
                  aria-invalid={!!errors.enrollment}
                  onChange={(e) => update("enrollment", e.target.value)}
                />
              </Field>
              <Field label="Priority" htmlFor="priority" hint="How urgent is this issue?">
                <select
                  id="priority"
                  className={inputClass}
                  value={form.priority}
                  onChange={(e) => update("priority", e.target.value)}
                >
                  <option value="LOW">Low</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="HIGH">High</option>
                </select>
              </Field>
            </div>

            <hr className="my-7 border-border" />

            <h2 className="text-lg font-bold text-foreground">Grievance Details</h2>
            <div className="mt-5 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Category" htmlFor="category" required error={errors.category}>
                  <select
                    id="category"
                    className={inputClass}
                    value={form.category}
                    aria-invalid={!!errors.category}
                    onChange={(e) => update("category", e.target.value)}
                  >
                    <option value="">Select a department</option>
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Subject" htmlFor="subject" required error={errors.subject}>
                  <input
                    id="subject"
                    type="text"
                    className={inputClass}
                    placeholder="Brief summary of the issue"
                    value={form.subject}
                    aria-invalid={!!errors.subject}
                    onChange={(e) => update("subject", e.target.value)}
                  />
                </Field>
              </div>

              <Field
                label="Description"
                htmlFor="description"
                required
                error={errors.description}
                hint="Provide as much detail as possible, including dates and people involved."
              >
                <textarea
                  id="description"
                  rows={6}
                  className={textareaClass}
                  placeholder="Describe your grievance in detail..."
                  value={form.description}
                  aria-invalid={!!errors.description}
                  onChange={(e) => update("description", e.target.value)}
                />
              </Field>

              <Field label="Supporting Documents" htmlFor="attachment" hint="Optional. PDF, JPG or PNG up to 10MB.">
                <label
                  htmlFor="attachment"
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-input bg-muted/40 px-4 py-6 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Paperclip className="h-4 w-4" aria-hidden="true" />
                  Click to attach a file
                  <input id="attachment" type="file" className="sr-only" />
                </label>
              </Field>

              <div>
                <label className="flex items-start gap-3 text-sm">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-input text-primary focus:ring-ring"
                    checked={form.consent}
                    aria-invalid={!!errors.consent}
                    onChange={(e) => update("consent", e.target.checked)}
                  />
                  <span className="text-muted-foreground">
                    I confirm that the information provided is accurate to the best of my knowledge and consent to its
                    processing by the university administration.
                  </span>
                </label>
                {errors.consent && (
                  <p className="mt-1.5 text-xs font-medium text-danger" role="alert">
                    {errors.consent}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button type="submit" size="lg">
                Submit Grievance
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
              <Button type="reset" size="lg" variant="ghost" onClick={() => setForm(initialState)}>
                Clear Form
              </Button>
            </div>
          </div>
        </form>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="rounded-2xl bg-primary p-6 text-primary-foreground shadow-sm">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-foreground/15">
              <Lock className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-4 text-lg font-bold">Your Privacy is Protected</h2>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
              All submissions are encrypted with institutional-grade security. Only assigned officers can view your
              case details.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 text-primary">
              <Info className="h-5 w-5" aria-hidden="true" />
              <h2 className="text-base font-bold text-foreground">Before You Submit</h2>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                "Use your official GBU email so we can send your Ticket ID.",
                "Select the correct department for faster routing.",
                "Attach any relevant screenshots or documents.",
                "Save your Ticket ID to track progress later.",
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-secondary p-6">
            <h2 className="text-base font-bold text-foreground">Need help?</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Visit the Student Welfare Cell in the Admin Block (Room 102) or email{" "}
              <a href="mailto:support@gbu.edu.in" className="font-semibold text-primary hover:underline">
                support@gbu.edu.in
              </a>
              .
            </p>
            <Link to="/track" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              Track an existing ticket
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </aside>
      </div>
    </>
  )
}
