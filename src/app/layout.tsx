import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coalition Technologies",
  description: "Next JS application for Front-End developer position",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-2`}>
        <div className="relative">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
