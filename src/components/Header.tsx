import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Speaking", href: "/speaking" },
  { label: "Media", href: "/media" },
  { label: "Blog", href: "/blog" },
  { label: "Brands", href: "/brands-ventures" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[hsl(var(--border))] bg-[hsl(0_0%_4%/0.85)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="font-display text-xl font-semibold tracking-tight">
          Ritesh <span className="text-gradient-gold">Watts</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="hero" size="sm" asChild className="hidden md:inline-flex">
            <Link to="/speaking">Book Ritesh to Speak</Link>
          </Button>
          <button
            className="text-foreground lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-[hsl(0_0%_4%/0.97)] backdrop-blur-xl lg:hidden">
          <nav className="container flex flex-col gap-1 py-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={`py-3 text-lg font-medium transition-colors ${
                  location.pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-6 border-t border-[hsl(var(--border))] pt-6">
              <Button variant="hero" size="lg" asChild className="w-full">
                <Link to="/speaking" onClick={() => setMobileOpen(false)}>
                  Book Ritesh to Speak
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
