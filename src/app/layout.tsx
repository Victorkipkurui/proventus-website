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
      "A full-service marketing & media solutions provider built for brands.",
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
