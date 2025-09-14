import type { Metadata } from "next";
import { Aldrich } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme_context";

const aldrich = Aldrich({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-aldrich",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Web_PortFolio jomoCode",
  description: "My web-portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${aldrich.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
