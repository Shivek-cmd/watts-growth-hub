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

const Footer = () => (
  <footer className="border-t border-[hsl(var(--border))]">
    <div className="container" style={{ paddingTop: "var(--section-py)", paddingBottom: "var(--section-py)" }}>
      <div className="grid gap-16 md:grid-cols-[2fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <Link to="/" className="font-display text-2xl font-semibold tracking-tight">
            Ritesh <span className="text-gradient-gold">Watts</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
            Author, Entrepreneur, Investor, and Speaker helping ambitious people build smarter businesses, move across borders strategically, and grow long-term wealth.
          </p>
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
              <a
                href="https://www.linkedin.com/in/riteshwatts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                LinkedIn
              </a>
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
