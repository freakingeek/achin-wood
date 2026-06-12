import Image from "next/image";

import MobileHeaderMenu from "@/components/layout/MobileHeaderMenu";

const navItems = [
  { href: "#gallery", label: "گالری" },
  { href: "#about", label: "درباره ما" },
  { href: "#contact", label: "تماس با ما" },
];

const linkClasses =
  "text-[16px] font-medium leading-none text-[#DAD1BE] transition-colors duration-200 hover:text-[#FFFCF5] focus-visible:text-[#FFFCF5] focus-visible:outline-none";

export default function Header() {
  return (
    <header className="header fixed inset-x-0 top-0 z-50 h-16 bg-[#11110D] md:h-28">
      <div className="relative flex h-full items-center justify-between px-7 md:px-16" dir="rtl">
        <div className="flex items-center">
          <nav className="hidden items-center gap-14.5 md:flex" aria-label="ناوبری اصلی">
            {navItems.map((item) => (
              <a className={linkClasses} href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <MobileHeaderMenu navItems={navItems} />
        </div>

        <a
          className="shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2"
          href="#top"
          aria-label="آچین وود"
        >
          <Image
            alt="Achin Wood"
            className="h-auto w-36 md:w-88.75"
            height={45}
            priority
            src="/images/logo.png"
            width={280}
          />
        </a>

        <a
          className="hidden h-12.5 shrink-0 items-center justify-center bg-[#6A6658] px-6 text-[16px] font-medium text-[#FFFCF5] transition-colors duration-200 hover:bg-[#7A7565] focus-visible:bg-[#7A7565] focus-visible:outline-none md:inline-flex"
          href="#catalog"
        >
          دانلود کاتالوگ
        </a>
      </div>

    </header>
  );
}
