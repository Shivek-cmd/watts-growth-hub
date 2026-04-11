import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
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

  const scrollToTop = () => {
    const scrollContainer = document.getElementById("app-scroll-container");
    scrollContainer?.scrollTo({ top: 0, behavior: "smooth" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const scrollContainer = document.getElementById("app-scroll-container");
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";

    if (scrollContainer) {
      scrollContainer.style.overflowY = mobileOpen ? "hidden" : "auto";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      if (scrollContainer) {
        scrollContainer.style.overflowY = "auto";
      }
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-300 ${
        scrolled || mobileOpen
          ? "border-b border-[hsl(var(--border))] bg-[hsl(0_0%_4%/0.95)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link
          to="/"
          onClick={() => {
            setMobileOpen(false);
            scrollToTop();
          }}
          className="font-display text-2xl font-semibold tracking-tight typewriter-reveal"
        >
          Ritesh <span className="text-gradient-gold">Watts</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors duration-200 link-underline ${
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
        <div className="absolute left-0 right-0 top-full z-[90] h-[calc(100vh-5rem)] border-t border-[hsl(var(--border))] bg-[#050505] shadow-2xl lg:hidden">
          <nav className="container flex h-full flex-col gap-2 overflow-y-auto py-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={`py-3 text-lg font-medium transition-colors ${
                  location.pathname === item.href
                    ? "text-foreground"
                    : "text-foreground/88 hover:text-foreground"
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
