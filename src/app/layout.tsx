import type { Metadata } from "next";
import { Header } from "@/components/layouts/Footer/Header";
import { Footer } from "@/components/layouts/Header/Footer";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "ABA - CARRIERS",
  description: "Generated by OneSystem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
