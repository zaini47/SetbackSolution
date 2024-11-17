import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Setback Solutions",
  description: "This is legal Web app for any complaints to filled ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
