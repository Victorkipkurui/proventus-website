import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proventus Digital Limited | You Must Be Seen",
  description:
    "Proventus Digital Limited is a Nairobi-based full-service marketing & media solutions provider. Strategy, branding, digital marketing, DOOH, PR & more. You Must Be Seen.",
  keywords:
    "digital marketing Kenya, DOOH Nairobi, branding agency Kenya, PR communications, advertising Nairobi",
  openGraph: {
    title: "Proventus Digital Limited | You Must Be Seen",
    description:
      "Proventus Digital is a full-service marketing and media solutions company helping brands command attention, connect with audiences, and drive results. Through strategic thinking, creative execution, and premium media platforms, we transform visibility into growth—because great brands don't just exist, they are seen.",
    type: "website",
    url: "https://proventus.ke",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
