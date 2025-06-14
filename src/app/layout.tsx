import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./main.css";
import Navigation from "@/components/Navigation";
import Sidebars from "@/components/Sidebars";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deepesh N - Portfolio",
  description: "Personal portfolio showcasing my work and experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <Sidebars />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
