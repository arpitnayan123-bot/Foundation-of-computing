import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SwRegister } from "@/components/atlas/SwRegister";
import { Analytics } from "@vercel/analytics/next";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "The Atlas — Visual Revision Notes for Everything",
  description:
    "Six university subjects, each rebuilt as living revision notes — animated diagrams, exam simulators and real CPython 3.12 running in the browser. Shelf 01: Foundations of Computing. More shelves drop as the PDFs arrive.",
  keywords: [
    "The Atlas",
    "revision notes",
    "Foundations of Computing",
    "Python",
    "IIT Jodhpur",
    "exam simulator",
  ],
  openGraph: {
    title: "The Atlas — Visual Revision Notes for Everything",
    description:
      "Animated revision notes, pen-paper exam simulators and a real CPython 3.12 lab — one shelf per subject.",
    type: "website",
    siteName: "The Atlas",
    images: [{ url: "/atlas-logo.svg", width: 512, height: 512, alt: "The Atlas — an open book whose pages rise into a spinning wireframe globe" }],
  },
  twitter: {
    card: "summary",
    title: "The Atlas — Visual Revision Notes for Everything",
    description: "Animated revision notes, exam simulators and a real Python lab — one shelf per subject.",
  },
};

export const viewport: Viewport = {
  themeColor: "#140d08",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${jakarta.variable} ${jetbrains.variable} antialiased`}
      >
        {children}
        <Toaster />
        <SwRegister />
        <Analytics />
      </body>
    </html>
  );
}
