import type { Metadata } from "next";
import { roboto } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "PT. NEURONWORKS INDONESIA",
  description: "PT. NEURONWORKS INDONESIA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
