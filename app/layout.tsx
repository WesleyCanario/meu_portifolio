import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { LazyParticlesBackground } from "@/components/LazyParticlesBackground";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { personal } from "@/data/personal";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = "https://wesley-canario-portfolio.vercel.app";
const title = `${personal.name} — ${personal.role}`;
const description = personal.tagline;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${personal.name}`,
  },
  description,
  keywords: [
    "Analista de Dados",
    "Power BI",
    "SQL",
    "ETL",
    "Dashboards",
    "Data Analytics",
    personal.name,
  ],
  authors: [{ name: personal.name }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title,
    description,
    siteName: personal.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider>
          <LazyParticlesBackground />
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
