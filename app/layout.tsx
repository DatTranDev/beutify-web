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

          <Header></Header>
          <div className="">
            {children}
          </div>
          <footer className="bg-[--hwheat]  px-44 py-12">
            <div className="container grid grid-cols-3 md:grid-cols-3 gap-16">
              <div className="text-center md:text-left">
                <h3 className="text-4xl font-bold p-0 m-0">Nhận thông tin</h3>
                <h3 className="text-4xl font-bold mb-4 p-0 ">khuyến mãi</h3>
                <form className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-2">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                  />
                </form>
                <div className="mt-12">
                  <h3 className="text-lg font-bold mb-4">Thông tin liên hệ</h3>
                  <ul className="space-y-2 text-sm">
                    <li>info@beatify.com</li>
                    <li>15 Linh Trung, Tp.Thủ Đức, Thành phố Hồ Chí Minh</li>
                    <li>0969032940</li>
                  </ul>
                </div>
              </div>

              <div className="text-center md:text-left">
                <div className="h-24"> 
                </div>
                <button
                  className="bg-[--pink] hover:bg-[--lpink] text-white px-8 py-2 rounded-xl shadow-lg"
                >
                  Đăng ký
                </button>
                <div className="mt-12">
                  <h3 className="text-lg font-bold mb-4">Về chúng tôi</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#">Lịch sử công ty</a></li>
                    <li><a href="#">Câu chuyện thương hiệu</a></li>
                    <li><a href="#">Chính sách bảo mật</a></li>
                  </ul>
                </div>
              </div>

              <div className="text-center md:text-left">
                <img src="/icons/logo.svg" className="h-36" alt="logo" />
                <div className="mt-10">
                  <h3 className="text-lg font-bold mb-4">Fanpage</h3>
                  <div className="flex justify-center md:justify-start space-x-4">
                    <a href="#" className="text-blue-600">
                      <img src="/icons/logos_facebook.svg" className="h-6"></img>
                    </a>
                    <a href="#" className="text-pink-500">
                      <img src="/icons/logos_instagram.svg" className="h-6"></img>
                    </a>
                    <a href="#" className="text-blue-400">
                      <img src="/icons/logos_tiktok-icon.svg" className="h-6"></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </WishlistProvider>
      </body>
    </html>
  );
}
