import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Koshyari Consultants Pvt. Ltd. – Virtual CFO & Allied Services",
  description:
    "Koshyari Consultants Pvt. Ltd. – Expert Virtual CFO, accounting, tax compliance & company secretarial services in Mumbai. Trusted financial solutions for startups, SMEs & MNCs.",
  icons: {
    icon: "/kc-logo.png",
    shortcut: "/kc-logo.png",
    apple: "/kc-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--color-brand-bg)] text-slate-900`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
