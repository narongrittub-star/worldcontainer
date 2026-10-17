import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans_Thai, Noto_Serif_Thai } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const plexThai = IBM_Plex_Sans_Thai({
  variable: "--font-plex-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const serifThai = Noto_Serif_Thai({
  variable: "--font-serif-thai",
  subsets: ["thai", "latin"],
  weight: ["500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const title = "Worldcontainer Co., Ltd. | โรงงานรับจ้างผลิตบรรจุภัณฑ์พลาสติก";
const description =
  "โรงงานรับจ้างฉีดขึ้นรูปและประกอบบรรจุภัณฑ์พลาสติกตามแบบลูกค้า แม่นยำระดับสเปก ส่งมอบรวดเร็ว สำหรับโรงงานเครื่องสำอางและโรงงานน้ำดื่ม ระบบคุณภาพ ISO 9001";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: "Worldcontainer",
  keywords: [
    "โรงงานฉีดพลาสติก",
    "รับจ้างผลิตบรรจุภัณฑ์พลาสติก",
    "บรรจุภัณฑ์เครื่องสำอาง",
    "ฝาขวดน้ำดื่ม",
    "Injection Molding",
    "OEM",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    siteName: "Worldcontainer",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1a4a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${plexThai.variable} ${serifThai.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
