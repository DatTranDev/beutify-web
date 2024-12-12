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
import { Search, Heart } from "lucide-react";

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
        <header className="flex py-4 px-40 justify-between items-center border-b shadow-sm shadow-gray-400 fixed top-0 left-0 w-full bg-white z-50">
          <div className="flex items-center ml-4">
            <img src="/icons/textLogo.svg" className="h-10" alt="logo" />
          </div>
          <div className="flex-grow flex justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem >
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Trang chủ
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Sản phẩm</NavigationMenuTrigger>
                  <NavigationMenuContent >
                  <ul className="grid gap-3 p-4 md:w-[200px] lg:w-[300px] lg:grid-cols-[.75fr_1fr] font-sans font-medium">
                    <li className="col">
                      <NavigationMenuLink asChild>
                        <a
                          className="font-sans font-medium"
                          href="/product"
                        >
                          Tất cả
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li className="">
                      <NavigationMenuLink asChild>
                        <a
                          className="font-sans font-medium"
                          href="/product/1"
                        >
                          Eyes
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li className="">
                      <NavigationMenuLink asChild>
                        <a
                          className=""
                          href="/product/3"
                        >
                          Face
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li className="">
                      <NavigationMenuLink asChild>
                        <a
                          className=""
                          href="/product/2"
                        >
                          Lip
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className=""
                          href="/product/4"
                        >
                          Makeup Tools
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Chính sách
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Liên hệ
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center mr-8 pl-8">
            <Search className="h-6 mr-8"/>
            <Heart className="h-6"/>
          </div>
        </header>
        <div className="">
          {children}
        </div>
        <footer className="bg-[--hwheat]  px-44 py-12">
          <div className="container grid grid-cols-3 md:grid-cols-3 gap-16">
            {/* Column 1: Newsletter */}
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

            {/* Column 2: Contact Info */}
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

            {/* Column 3: Social Links */}
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
      </body>
    </html>
  );
}
