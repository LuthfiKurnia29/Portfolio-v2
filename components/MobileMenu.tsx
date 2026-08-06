"use client";

import { useState } from "react";
import { X, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavbarData } from "@/constants";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Hamburger Button */}
      <button
        id="mobile-menu-toggle"
        aria-label="Toggle menu"
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-cardBorder text-subtleText hover:text-lightSky hover:border-lightSky transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-cardBg border-l border-cardBorder flex flex-col py-8 px-6 transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          aria-label="Close menu"
          className="self-end mb-10 flex items-center justify-center w-8 h-8 rounded-lg border border-cardBorder text-subtleText hover:text-lightSky hover:border-lightSky transition-all duration-300"
          onClick={() => setIsOpen(false)}
        >
          <X size={16} />
        </button>

        {/* Logo Monogram */}
        <span className="font-mono text-xs text-lightSky tracking-widest uppercase mb-8 opacity-60">
          // navigasi
        </span>

        {/* Nav Links */}
        <nav className="flex flex-col gap-2">
          {NavbarData.map(({ title, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={title}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-lightSky/10 text-lightSky border border-lightSky/20"
                    : "text-subtleText hover:text-white hover:bg-white/5"
                }`}
              >
                {title}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="mt-auto">
          <a
            href="mailto:luthfikurnia@email.com"
            className="btn-primary w-full justify-center"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
