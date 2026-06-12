"use client";

import { useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

type MobileHeaderMenuProps = {
  navItems: NavItem[];
};

export default function MobileHeaderMenu({ navItems }: MobileHeaderMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
        className="flex size-6 flex-col items-start justify-center gap-2 md:hidden"
        onClick={() => setIsMenuOpen((open) => !open)}
        type="button"
      >
        <span
          className={`block h-px w-6 bg-[#DAD1BE] transition-transform duration-300 ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`block h-px w-6 bg-[#DAD1BE] transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
        />
        <span
          className={`block h-px w-6 bg-[#DAD1BE] transition-transform duration-300 ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      <div
        aria-hidden={!isMenuOpen}
        className={`absolute inset-x-0 top-full min-h-[calc(100svh-64px)] bg-[#565449] px-7 py-6 transition-[opacity,visibility] duration-300 md:hidden ${isMenuOpen ? "visible opacity-100" : "pointer-events-none invisible opacity-0"}`}
      >
        <nav className="flex min-h-[calc(100svh-64px-48px)] flex-col" dir="rtl" aria-label="ناوبری موبایل">
          {navItems.map((item) => (
            <a
              className="border-b border-black/10 py-8 text-right text-[16px] font-medium leading-none text-[#FFFCF5] transition-colors duration-200 hover:text-white focus-visible:text-white focus-visible:outline-none"
              href={item.href}
              key={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="mt-16 inline-flex h-12 self-start items-center justify-center bg-[#11110D] px-6 text-[16px] font-medium text-[#DAD1BE] transition-colors duration-200 hover:text-[#FFFCF5] focus-visible:text-[#FFFCF5] focus-visible:outline-none"
            href="#catalog"
            onClick={() => setIsMenuOpen(false)}
          >
            دانلود کاتالوگ
          </a>
        </nav>
      </div>
    </>
  );
}
