import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Navigate",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Speaking", href: "/speaking" },
      { label: "Media / Podcast", href: "/media" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Brands & Ventures", href: "/brands-ventures" },
      { label: "Contact", href: "/contact" },
      { label: "Work With Ritesh", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Subscribe to Newsletter", href: "/#newsletter" },
    ],
  },
];

const Footer = () => (
  <footer className="border-t border-border/50 bg-surface">
    <div className="container py-16">
      <div className="grid gap-10 md:grid-cols-4">
        <div>
          <Link to="/" className="text-xl font-bold tracking-tight">
            Ritesh <span className="text-gradient-gold">Watts</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Author · Entrepreneur · Investor · Speaker
          </p>
        </div>
        {footerLinks.map((group) => (
          <div key={group.title}>
            <h4 className="mb-4 text-sm font-semibold text-foreground">{group.title}</h4>
            <ul className="space-y-2.5">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Ritesh Watts. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
