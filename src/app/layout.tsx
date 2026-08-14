import type { Metadata } from "next";
import { headers } from "next/headers";
import { ClickSparkProvider } from "@/components/ClickSparkProvider";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const origin = `${protocol}://${host}`;

  return {
    title: "Natchanon Ritthisak | Frontend Developer",
    description: "Portfolio of Natchanon Ritthisak, a Computer Engineering student building thoughtful and reliable web experiences.",
    keywords: ["Natchanon Ritthisak", "Frontend Developer", "Computer Engineering", "Portfolio", "Internship"],
    openGraph: {
      title: "Natchanon Ritthisak | Frontend Developer",
      description: "Computer Engineering student focused on modern web development.",
      type: "website",
      images: [{ url: `${origin}/og.png`, width: 1536, height: 804, alt: "Natchanon Ritthisak — Frontend Developer" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Natchanon Ritthisak | Frontend Developer",
      description: "Building thoughtful digital experiences.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body><ClickSparkProvider>{children}</ClickSparkProvider></body></html>;
}
