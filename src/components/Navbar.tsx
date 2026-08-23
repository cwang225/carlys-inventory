import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/product-management" },
  { label: "Hobbies", href: "/game-dev" },
  { label: "About Me", href: "/about" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActiveLink = (href: string) => {
    if (href.startsWith("#")) {
      return location.pathname === "/" && (location.hash === href || location.hash === "");
    }

    if (href === "/game-dev") {
      return location.pathname === "/game-dev" || location.pathname === "/art";
    }

    return location.pathname === href;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-primary-foreground transition-all duration-300 ${
        scrolled
          ? "border-b border-primary-foreground/20 bg-primary/80 shadow-sm backdrop-blur-md"
          : "bg-primary"
      }`}
    >
      <nav className="container px-6 flex items-center justify-between h-16">
        <Link to="/" className="font-display font-bold text-lg text-primary-foreground">
          Carly<span className="text-primary-foreground/80">.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const isActive = isActiveLink(l.href);
            const to = l.href.startsWith("#") ? `/${l.href}` : l.href;

            return (
              <Link
                key={l.href}
                to={to}
                className={`relative text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary-foreground"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                {l.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-primary-foreground" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-b border-primary-foreground/20 overflow-hidden ${
              scrolled ? "bg-primary/80 backdrop-blur-md" : "bg-primary"
            }`}
          >
            <div className="container px-6 py-4 flex flex-col gap-4">
              {links.map((l) => {
                const isActive = isActiveLink(l.href);
                const to = l.href.startsWith("#") ? `/${l.href}` : l.href;

                return (
                  <Link
                    key={l.href}
                    to={to}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary-foreground"
                        : "text-primary-foreground/70 hover:text-primary-foreground"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
