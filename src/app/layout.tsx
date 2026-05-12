import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Akmal Nazmi | IT Infrastructure Portfolio",
  description:
    "Premium personal portfolio for Muhammad Akmal Nazmi, an IT Infrastructure student, mobile and web developer, and IoT enthusiast.",
  keywords: [
    "Muhammad Akmal Nazmi",
    "IT Infrastructure",
    "UiTM Shah Alam",
    "IT Engineer",
    "Mobile Developer",
    "IoT",
    "Portfolio"
  ],
  authors: [{ name: "Muhammad Akmal Nazmi" }],
  creator: "Muhammad Akmal Nazmi",
  metadataBase: new URL("https://akmalnazmi.vercel.app"),
  openGraph: {
    title: "Muhammad Akmal Nazmi | IT Infrastructure Portfolio",
    description:
      "IT Infrastructure Student, Mobile & Web Developer, and IoT Enthusiast building resilient digital systems.",
    url: "https://akmalnazmi.vercel.app",
    siteName: "Akmal Nazmi Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Akmal Nazmi | IT Infrastructure Portfolio",
    description:
      "IT Infrastructure Student, Mobile & Web Developer, and IoT Enthusiast."
  },
  manifest: "/site.webmanifest"
};

export const viewport: Viewport = {
  themeColor: "#030507",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
