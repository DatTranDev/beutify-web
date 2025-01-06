import type { Metadata } from "next";
import "./globals.css";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import { Search, Heart, X } from "lucide-react";
import Header from "@/components/custom/header";
import { WishlistProvider } from "@/context/WishListContext";
import { headers } from 'next/headers'
import Footer from "@/components/custom/footer";
export const metadata: Metadata = {
  title: "Beautify E-Catalog ",
  description: "Shopping made easy",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const objectString = JSON.stringify(headersList);
  const match = objectString.includes("/question")
  console.log(match);
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" /> 
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <WishlistProvider>
        {
          !match && <Header></Header> } 
          <div className="mt-16">
            {children}
          </div>
          {
            !match &&
            <Footer></Footer>
          }
        </WishlistProvider>
      </body>
    </html>
  );
}
