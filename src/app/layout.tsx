import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "../components/NavBar";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://imagetopdf-converter.vercel.app"),
  keywords: [
    "image to PDF converter",
    "convert images to PDF",
    "PDF converter tool",
    "convert JPEG to PDF",
    "image to PDF online",
    "free image to PDF conversion",
    "high-quality PDF conversion",
    "batch image to PDF converter",
    "image to PDF without losing quality",
    "best image to PDF converter",
    "конвертер изображений в PDF",
    "конвертировать изображения в PDF",
    "инструмент для конвертации в PDF",
    "конвертация JPEG в PDF",
    "онлайн конвертер изображений в PDF",
    "бесплатная конвертация изображений в PDF",
    "конвертация в PDF высокого качества",
    "пакетный конвертер изображений в PDF",
    "конвертация изображений в PDF без потери качества",
    "лучший конвертер изображений в PDF",
    "convertisseur d'image en PDF",
    "convertir des images en PDF",
    "outil de conversion en PDF",
    "convertir JPEG en PDF",
    "image en PDF en ligne",
    "conversion gratuite d'image en PDF",
    "conversion PDF de haute qualité",
    "convertisseur d'image en PDF par lot",
    "image en PDF sans perte de qualité",
    "meilleur convertisseur d'image en PDF",
  ],
  title: "Convert Image to PDF Online: Fast & Free Tool",
  description:
    "Effortlessly convert images to PDF with our online converter tool. Enjoy high-quality PDF outputs without any loss in image resolution or quality.",
  icons: {
    icon: ['/favicon.ico?v=1'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png'],
  },
  authors: [{ name: "image-to-pdf-converter" }],
  creator: "image-to-pdf-converter",
  publisher: "image-to-pdf-converter",
  manifest: '/site.webmanifest',
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "Convert Image to PDF Online: Fast & Free Tool",
    description: "Effortlessly convert images to PDF with our online converter tool. Enjoy high-quality PDF outputs without any loss in image resolution or quality.",
    images: [
      {
        url: "https://imagetopdf-converter.vercel.app/opengraph-image.jpg",
        alt: "Convert Image to PDF Online",
      },
    ],
  },
  openGraph: {
    title: 'Convert Image to PDF Online: Fast & Free Tool',
    description: 'Effortlessly convert images to PDF with our online converter tool. Enjoy high-quality PDF outputs without any loss in image resolution or quality.',
    url: "https://imagetopdf-converter.vercel.app",
    siteName: "Convert Image to PDF Online: Fast & Free Tool",
    type: "website",
    images: [
      {
        url: "https://imagetopdf-converter.vercel.app/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Convert Image to PDF Online",
      },
    ],
  },
  robots: "all",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Head>
    <meta name="robots" content="all" />
    <link rel="canonical" href="https://imagetopdf-converter.vercel.app" />

    </Head>
      <body className={inter.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
