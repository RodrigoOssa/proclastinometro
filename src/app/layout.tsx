import type { Metadata } from "next";
import "./globals.css";
import AutoThemeClass from "../components/AutoThemeClass";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es" suppressHydrationWarning className="h-full">
      <body className="h-full bg-white dark:bg-darkBg">
        <AutoThemeClass />
        <div className="h-full">
          {children}
        </div>
      </body>
    </html >
  );
}
