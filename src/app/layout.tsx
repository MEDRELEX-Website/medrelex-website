import type { Metadata, Viewport } from "next";
import { Barlow, Figtree, Montserrat } from "next/font/google";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-figtree" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-montserrat" });
const barlow = Barlow({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-barlow" });

export const metadata: Metadata = {
  title: {
    default: "MEDRELEX | Private Health Intelligence",
    template: "%s | MEDRELEX",
  },
  description:
    "MEDRELEX brings your physicians, records, laboratories and wearables into one private, longitudinal health record, and helps you and your doctors understand what is actually changing.",
  icons: { icon: "/images/mark.png" },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${figtree.variable} ${montserrat.variable} ${barlow.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  );
}
