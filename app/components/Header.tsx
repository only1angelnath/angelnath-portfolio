"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#lab", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#110720]/80 backdrop-blur-sm border-b border-white/10">
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-purple-400 transition-colors"
          >
            ANGELNATH
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white hover:text-purple-400 transition-colors text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                download
                className="text-sm px-4 py-2 rounded-full border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white transition-all"
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-[#110720]/95 backdrop-blur-md border border-white/10 rounded-lg p-6">
            <ul className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-purple-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-block px-6 py-2 rounded-full border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
