import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const access = cookieStore.get("access_token");
  return (
    <html lang="en">
      <body>
        <div className="w-screen min-h-screen flex relative flex-col gap-[20px]">
          <Header token={access?.value || ""} />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
