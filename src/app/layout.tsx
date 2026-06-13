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
  title: "آچین وود | طراحی و اجرای دکوراسیون و محصولات چوبی لوکس",
  description:
    "آچین وود با بیش از ۲۵ سال تجربه در طراحی، تولید و اجرای کابینت، درب، کمد، دکوراسیون داخلی و جزئیات چوبی لوکس برای پروژه‌های مسکونی، اداری و تجاری فعالیت می‌کند.",
  keywords: [
    "آچین وود",
    "طراحی داخلی",
    "دکوراسیون چوبی",
    "کابینت لوکس",
    "درب چوبی",
    "کمد دیواری",
    "اجرای دکوراسیون داخلی",
    "محصولات چوبی سفارشی",
  ],
  openGraph: {
    title: "آچین وود | طراحی و اجرای دکوراسیون و محصولات چوبی لوکس",
    description:
      "طراحی، تولید و اجرای محصولات چوبی لوکس؛ از کابینت، درب و کمد تا جزئیات دکوراسیون داخلی برای پروژه‌های مسکونی، اداری و تجاری.",
    siteName: "Achin Wood",
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "آچین وود | طراحی و اجرای دکوراسیون و محصولات چوبی لوکس",
    description:
      "طراحی و اجرای محصولات چوبی سفارشی و دکوراسیون داخلی لوکس برای خانه‌ها و فضاهای کاری.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
