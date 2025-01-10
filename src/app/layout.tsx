import type { Metadata } from "next";
import "./globals.css";
import Footer from "./ui/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className="h-full">
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
