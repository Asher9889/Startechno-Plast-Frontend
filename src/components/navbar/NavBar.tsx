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
            {/* Trigger button */}
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu size={18} className="text-text" />
              </Button>
            </SheetTrigger>

            {/* Backdrop */}
            <div
              className={`fixed inset-0 z-40 bg-black/60 transition-opacity ${open ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              onClick={() => setOpen(false)}
            />

            {/* Sidebar */}
            <SheetContent
              side="right"
              className="z-50 w-72 bg-surface shadow-xl flex flex-col p-6 bg-blue-500"
            >
              {/* Close button */}
              {/* <div className="flex justify-end">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                  className="rounded-full hover:bg-muted"
                >
                  ✕
                </Button>
              </div> */}

              {/* Navigation */}
              <nav className="flex flex-col gap-6 mt-6 flex-1">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-lg text-text hover:text-primary font-medium transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link}
                  </a>
                ))}

                <hr className="my-4 border-border" />

                {/* Action Links */}
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
