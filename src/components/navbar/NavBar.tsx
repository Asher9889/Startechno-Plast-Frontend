import { motion } from "framer-motion";
import { Button } from "../../components/ui";
import { Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/index";
import { logo } from "@/assets";
// import logo from "@/assets/logo.png"; // replace with your logo

const navLinks = ["Home", "Products", "About Us", "Contact Us", "Blogs"];
const actionLinks = ["Call", "Email", "Whatsapp", "Get Quotes"];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-bg/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="Star Technoplast" className="h-16 w-auto" />
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <motion.a
              key={link}
              href="#"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="text-text hover:text-primary font-medium"
            >
              {link}
            </motion.a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          {actionLinks.map((action, i) => (
            <motion.a
              key={action}
              href="#"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
              className={cn(
                "text-sm font-medium transition-colors",
                action === "Get Quotes"
                  ? "px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary-light"
                  : "text-text hover:text-primary"
              )}
            >
              {action}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-text" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-surface flex flex-col">
              <nav className="flex flex-col gap-6 mt-8 flex-1">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-text hover:text-primary font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {link}
                  </a>
                ))}
                <hr className="my-4 border-border" />
                <div className="flex flex-col gap-4">
                  {actionLinks.map((action) => (
                    <a
                      key={action}
                      href="#"
                      className={cn(
                        "font-medium text-center transition-colors",
                        action === "Get Quotes"
                          ? "px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary-light"
                          : "text-text hover:text-primary"
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {action}
                    </a>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
