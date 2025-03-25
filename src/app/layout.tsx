import type { Metadata } from "next";
import { Header } from "@/components/layouts/Header/Header";
import { Footer } from "@/components/layouts/Footer/Footer";
import "../styles/globals.css";
import { Poppins } from "next/font/google";
import { Navbar } from "@/components/ui/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ABA - CARRIERS",
  description: "Developed by OneSystem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${poppins.variable}`}>
        <Header />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
