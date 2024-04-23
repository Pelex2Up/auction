import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Аукцион",
  description: "Аукцион",
  icons: [
    {
      rel: "icon",
      url: "https://assets.vercel.com/image/upload/v1573246280/front/favicon/vercel/android-chrome-192x192.png",
    },
    {
      rel: "apple-touch-icon",
      url: "https://assets.vercel.com/image/upload/v1573246280/front/favicon/vercel/android-chrome-192x192.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="w-screen min-h-screen flex relative flex-col gap-[20px]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
