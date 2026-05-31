import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/home" },
  { label: "Products", href: "/product-management" },
  { label: "Game Dev", href: "/game-dev" },
  { label: "Art", href: "/art" },
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

    return location.pathname === href;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <nav className="container px-6 flex items-center justify-between h-16">
        <Link to="/home" className="font-display font-bold text-lg">
          Carly<span className="text-primary">.</span>
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
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {isActive && <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-primary" />}
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
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
            className="md:hidden bg-background border-b border-border overflow-hidden"
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
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
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
