import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const iranYekan = localFont({
  src: "../../public/fonts/IRANYekanX/IRANYekanXVF.woff2",
  variable: "--font-iran-yekan",
  display: "swap",
});

const sofiaPro = localFont({
  src: "../../public/fonts/SofiaPro/SofiaProUltraLightAz.otf",
  variable: "--font-sofia-pro",
  display: "swap",
  weight: "250",
});

export const metadata: Metadata = {
  title: "Achin Wood | Crafted Interior Woodwork",
  description:
    "Achin Wood creates warm architectural interiors, custom joinery, and crafted wood details for residential and commercial spaces.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fa-IR" dir="rtl" className={`${iranYekan.variable} ${sofiaPro.variable} h-full antialiased`}>
      <body className="min-h-full bg-neutral-950 text-white">{children}</body>
    </html>
  );
}
