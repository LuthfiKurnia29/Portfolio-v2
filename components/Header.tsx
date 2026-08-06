"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { NavbarData } from "@/constants";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-30 border-b border-cardBorder/60 bg-bodyColor/80 backdrop-blur-md">
      <Container className="py-4 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NavbarData.map(({ title, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={title}
                href={href}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {title}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA + Mobile Menu */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:luthfikurnia@email.com"
            id="header-hire-me"
            className="btn-primary hidden md:inline-flex text-xs py-2 px-4"
          >
            Hire Me
          </a>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
};

export default Header;