import { Link } from "react-router-dom";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Speaking", href: "/speaking" },
  { label: "Media", href: "/media" },
  { label: "Blog", href: "/blog" },
  { label: "Brands & Ventures", href: "/brands-ventures" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/riteshwatts",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/riteshwatts",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46L20 4" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/riteshwatts",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@riteshwatts",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    ),
  },
];

const Footer = () => (
  <footer className="border-t border-[hsl(var(--border))]">
    <div className="container" style={{ paddingTop: "var(--section-py)", paddingBottom: "var(--section-py)" }}>
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <Link to="/" className="font-display text-3xl font-semibold tracking-tight typewriter-reveal">
            Ritesh <span className="text-gradient-gold">Watts</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
            Author, Entrepreneur, Investor, and Speaker helping ambitious people build smarter businesses, move across borders strategically, and grow long-term wealth.
          </p>
          {/* Social icons */}
          <div className="mt-6 flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-muted-foreground hover:text-gold transition-colors duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigate */}
        <div>
          <p className="section-label mb-6">Navigate</p>
          <ul className="space-y-3">
            {footerNav.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <p className="section-label mb-6">Connect</p>
          <ul className="space-y-3">
            <li>
              <Link to="/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Work With Ritesh
              </Link>
            </li>
            <li>
              <a href="/#newsletter" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Subscribe to Newsletter
              </a>
            </li>
            <li>
              <Link to="/speaking" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Book to Speak
              </Link>
            </li>
            <li>
              <Link to="/media/invite" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Invite to Podcast
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <p className="section-label mb-6">Legal</p>
          <ul className="space-y-3">
            <li>
              <Link to="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 border-t border-[hsl(var(--border))] pt-8 flex flex-col sm:flex-row justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ritesh Watts. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
          <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
