import type { Metadata } from "next";
import { Header } from "@/components/layouts/Header/Header";
import { Footer } from "@/components/layouts/Footer/Footer";
import "../styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ABA Carriers",
  description:
    " Founded in 2021, ABA has rapidly grown into a trusted name in the trucking industry. With a strong focus on efficiency and reliability, we have successfully delivered tens of thousands of loads across the country.",
  keywords:
    "ABA, aba, ABA Carriers, trucks, Carriers, American truck, USA trucking, trucking in USA, hiring, turck job, world trucks",
  authors: [{ name: "OneSystem" }],
  robots: "index, follow",
  openGraph: {
    title: "ABA Carriers",
    description:
      "At ABA, we are dedicated to delivering freight safely, efficiently, and on time across the USA. With a growing fleet and a team of experienced professionals, we provide reliable trucking services tailored to your logistics needs",
    url: "https://abacarriers.com",
    siteName: "ABA Carriers",
    images: [
      {
        url: "/section_bg.png",
        width: 1200,
        height: 630,
        alt: " Founded in 2021, <span>ABA</span> has rapidly grown into a trusted name in the trucking industry.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABA Carriers",
    description:
      "At ABA, we are dedicated to delivering freight safely, efficiently, and on time across the USA. With a growing fleet and a team of experienced professionals, we provide reliable trucking services tailored to your logistics needs",
    images: ["/carriers_image.png"],
  },
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
