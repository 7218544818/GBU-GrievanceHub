import { useState } from "react"
import { ArrowRight, ChevronDown, HelpCircle } from "lucide-react"
import Button from "../components/Button"

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: "What is GBU GrievanceHub and who can use it?",
    answer:
      "GBU GrievanceHub is the official digital grievance redressal platform of Gautam Buddha University. Any enrolled student, research scholar, faculty member, or administrative staff can use it to raise, track, and resolve grievances related to university services.",
  },
  {
    question: "How do I submit a grievance?",
    answer:
      "Go to the Submit Grievance page, fill in your details, choose the relevant category and priority, describe your issue, and attach any supporting documents if needed. Once submitted, you will receive a unique Ticket ID that you can use to track progress.",
  },
  {
    question: "How can I track the status of my grievance?",
    answer:
      "Visit the Track Ticket page and enter the unique Ticket ID you received when submitting your grievance. You will see the current status, the assigned officer, the responsible department, and a detailed progress history of your case.",
  },
  {
    question: "How long does it take to resolve a grievance?",
    answer:
      "Most grievances are addressed within 3-5 business days. The exact timeline depends on the complexity of the issue and its priority level. High-priority cases are escalated and handled first, and every stage is documented so you always know where your case stands.",
  },
  {
    question: "What categories of grievances can I raise?",
    answer:
      "You can raise grievances across a range of categories including Academic, Finance, Hostel & Accommodation, Infrastructure, Examination, Library, Administration, and Other. Selecting the correct category helps route your request to the right departmental officer.",
  },
  {
    question: "Is my personal information kept confidential?",
    answer:
      "Yes. All submissions are protected by institutional-grade encryption, and your personal information and documents are only accessible to authorized officers handling your case. We treat every grievance with strict confidentiality.",
  },
  {
    question: "Can I submit a grievance anonymously?",
    answer:
      "While we encourage providing your details so we can follow up and keep you informed, sensitive matters can be flagged for restricted handling. Contact the Grievance Redressal Cell directly if you require special confidentiality arrangements for your case.",
  },
  {
    question: "What should I do if my grievance is not resolved on time?",
    answer:
      "If your grievance exceeds the expected resolution time, it is automatically flagged for escalation to a senior authority. You can also reach out to the Grievance Redressal Cell using the contact details on the About Us page to request a status review.",
  },
  {
    question: "Can I edit or add information to a grievance after submitting it?",
    answer:
      "Once a Ticket ID is generated, the assigned officer can request or accept additional information during the verification stage. If you need to add important details, reply to the officer's communication or contact support with your Ticket ID.",
  },
  {
    question: "Who do I contact for technical issues with the portal?",
    answer:
      "For technical problems such as login issues or upload errors, email support@gbu.edu.in or call +91 1234567890 during office hours (Mon – Fri, 9:00 AM – 5:00 PM). Please include your Ticket ID, if available, for faster assistance.",
  },
]

function AccordionItem({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-muted"
        >
          <span className="text-base font-semibold text-foreground">{item.question}</span>
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        className={`grid transition-all duration-200 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="border-t border-border px-6 py-5 text-sm leading-relaxed text-muted-foreground">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <>
      {/* Top strip */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-1.5 text-center text-xs font-medium sm:px-6 lg:px-8">
          Official University Portal · Gautam Buddha University
        </div>
      </div>

      {/* Hero */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-semibold text-primary shadow-sm ring-1 ring-border">
              <HelpCircle className="h-4 w-4" aria-hidden="true" />
              Help Center
            </span>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              Find answers to the most common questions about submitting, tracking, and resolving grievances through the
              GBU GrievanceHub.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-4">
          {faqs.map((item, index) => (
            <AccordionItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex((current) => (current === index ? null : index))}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:text-left">
          <div>
            <h2 className="text-balance text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Didn&apos;t find what you were looking for?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Reach out to our support team or submit a grievance and we&apos;ll help you resolve it.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button to="/about" size="lg" variant="outline">
              Contact Us
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
