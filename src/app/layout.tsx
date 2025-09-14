import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "CutCoach - Cut Weight Effortlessly",
  description: "The ultimate weight cutting app for combat sport athletes. Cut up to 7% of bodyweight safely with personalized nutrition plans, AI food tracking, and professional refueling protocols.",
  keywords: "weight cutting, combat sports, MMA, wrestling, boxing, nutrition, meal plans, food tracking, refueling, athletes, weight management",
  authors: [{ name: "CutCoach Team" }],
  icons: {
    icon: '/cutcoach_app_icon.png',
    apple: '/cutcoach_app_icon.png',
  },
  openGraph: {
    title: "CutCoach - Cut Weight Effortlessly",
    description: "The ultimate weight cutting app for combat sport athletes. Cut up to 7% of bodyweight safely with personalized nutrition plans, AI food tracking, and professional refueling protocols.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: '/cutcoach_app_icon.png',
        width: 512,
        height: 512,
        alt: 'CutCoach Logo',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CutCoach - Cut Weight Effortlessly",
    description: "The ultimate weight cutting app for combat sport athletes. Cut up to 7% of bodyweight safely with personalized nutrition plans, AI food tracking, and professional refueling protocols.",
    images: ['/cutcoach_app_icon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LESZPH8DJE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LESZPH8DJE');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
