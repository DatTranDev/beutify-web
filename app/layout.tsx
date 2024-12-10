import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beautify E-Catalog ",
  description: "Shopping made easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="text-red">Header</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
