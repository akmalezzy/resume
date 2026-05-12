import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Akmal Nazmi Bin Shuhaimi | IT Infrastructure Resume",
  description:
    "Mobile-friendly web resume for Muhammad Akmal Nazmi Bin Shuhaimi, an IT Infrastructure student seeking internship opportunities.",
  keywords: [
    "Muhammad Akmal Nazmi",
    "Muhammad Akmal Nazmi Bin Shuhaimi",
    "IT Infrastructure",
    "UiTM Shah Alam",
    "IT Support",
    "Networking",
    "Internship",
    "IoT",
    "Resume"
  ],
  authors: [{ name: "Muhammad Akmal Nazmi Bin Shuhaimi" }],
  creator: "Muhammad Akmal Nazmi Bin Shuhaimi",
  metadataBase: new URL("https://akmalnazmi.vercel.app"),
  openGraph: {
    title: "Muhammad Akmal Nazmi Bin Shuhaimi | IT Infrastructure Resume",
    description:
      "IT Infrastructure student seeking internship opportunities in IT support, networking, programming, and mobile development.",
    url: "https://akmalnazmi.vercel.app",
    siteName: "Akmal Nazmi Resume",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Akmal Nazmi Bin Shuhaimi | IT Infrastructure Resume",
    description:
      "IT Infrastructure student seeking internship opportunities."
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
