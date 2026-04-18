"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

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
            <li>
              <Link href="#home" className="text-white hover:text-purple-400">
                About
              </Link>
            </li>
            <li>
              <Link href="#skills" className="text-white hover:text-purple-400">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#lab" className="text-white hover:text-purple-400">
                Projects
              </Link>
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
              <li>
                <Link
                  href="#home"
                  className="text-white hover:text-purple-400"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-white hover:text-purple-400"
                  onClick={() => setIsOpen(false)}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#lab"
                  className="text-white hover:text-purple-400"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}