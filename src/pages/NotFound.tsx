import { FileQuestion } from "lucide-react"
import Button from "../components/Button"

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
        <FileQuestion className="h-8 w-8" aria-hidden="true" />
      </span>
      <p className="mt-6 text-sm font-bold uppercase tracking-wide text-primary">404 Error</p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground">Page not found</h1>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        The page you are looking for does not exist or has been moved. Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button to="/" size="lg">
          Back to Home
        </Button>
        <Button to="/track" size="lg" variant="outline">
          Track a Ticket
        </Button>
      </div>
    </section>
  )
}
