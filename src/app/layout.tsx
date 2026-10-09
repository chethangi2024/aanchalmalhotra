import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Cormorant Garamond - the unified typography throughout the entire website
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aanchal Malhotra | Oral Historian & Writer",
  description:
    "Official website of Aanchal Malhotra, oral historian and author of Remnants of a Separation, In the Language of Remembering, The Book of Everlasting Things, and Bahrisons: Chronicle of a Bookshop.",
  keywords: [
    "Aanchal Malhotra",
    "Oral Historian",
    "Remnants of a Separation",
    "In the Language of Remembering",
    "The Book of Everlasting Things",
    "Bahrisons",
    "Material Memory"
  ],
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text-primary)] antialiased">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
