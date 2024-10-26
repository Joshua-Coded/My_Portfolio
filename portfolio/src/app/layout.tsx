import "@/styles/globals.css";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aspiring Linux Kernel Engineer & Full Stack Developer',
  description: 'Experienced Full Stack Developer specializing in system programming and modern web technologies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}