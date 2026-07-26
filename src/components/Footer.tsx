import { Link } from "react-router-dom"
import { ShieldCheck, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/submit", label: "Submit Grievance" },
  { to: "/track", label: "Track Ticket" },
  { to: "/about", label: "About Us" },
  { to: "/faq", label: "FAQ" },
]

const socials = [
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "Twitter", icon: Twitter, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/15">
              <ShieldCheck className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="text-lg font-extrabold">GBU GrievanceHub</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
            A centralized digital platform for students and staff to raise, track, and resolve grievances with
            institutional accountability.
          </p>
          <p className="mt-6 text-xs text-primary-foreground/60">
            &copy; {new Date().getFullYear()} GBU GrievanceHub. All rights reserved.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/80">Quick Links</h3>
          <ul className="mt-4 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/80">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              <a href="mailto:support@gbu.edu.in" className="hover:text-primary-foreground">
                support@gbu.edu.in
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              <a href="tel:+911234567890" className="hover:text-primary-foreground">
                +91 1234567890
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>GBU Campus, Greater Noida, India</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/80">Follow Us</h3>
          <div className="mt-4 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <s.icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
