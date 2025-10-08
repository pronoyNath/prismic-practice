import type { Metadata, ResolvingMetadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { createClient } from "@/prismicio";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "Prismic Fallback",
    description:
      settings.data.meta_description ||
      "A Next.js project with Prismic as a headless CMS",
    openGraph: {
      images: [
        settings.data.og_image.url ||
          "https://cdn-icons-png.freepik.com/512/13435/13435075.png",
      ],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
