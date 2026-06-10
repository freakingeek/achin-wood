import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achin Wood",
  description: "",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fa_IR" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
