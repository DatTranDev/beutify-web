'use client';
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
import { Search, Heart, Trash2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { getCookies, navigate, setCookies } from "@/lib/action";
import { useWishlist } from "@/context/WishListContext";

export default function Header() {
    const { wishlist, addToWishlist, removeFromWishlist} = useWishlist();
    const [showWishlist, setShowWishlist] = useState(false);

    // Example product
    const exampleProduct = {
        id: "1",
        name: "Lipstick",
        category: "Lip",
        shortDescription: "A beautiful lipstick",
        description: "Long-lasting lipstick.",
        price: 25,
        image: ["/images/lipstick.jpg"],
    };
    // Fetch wishlist from cookies on component mount       

    return(
        <div>
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
                            href="/product"
                            >
                            Eyes
                            </a>
                        </NavigationMenuLink>
                        </li>
                        <li className="">
                        <NavigationMenuLink asChild>
                            <a
                            className=""
                            href="/product"
                            >
                            Face
                            </a>
                        </NavigationMenuLink>
                        </li>
                        <li className="">
                        <NavigationMenuLink asChild>
                            <a
                            className=""
                            href="/product"
                            >
                            Lip
                            </a>
                        </NavigationMenuLink>
                        </li>
                        <li>
                        <NavigationMenuLink asChild>
                            <a
                            className=""
                            href="/product"
                            >
                            Makeup Tools
                            </a>
                        </NavigationMenuLink>
                        </li>
                    </ul>
                    </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                    <Link href="#" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Chính sách
                        </NavigationMenuLink>
                    </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                    <Link href="#" legacyBehavior passHref>
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
                <Heart 
                className="h-6 cursor-pointer"
                onClick={() => setShowWishlist(!showWishlist)} // Toggle wishlist visibility
                />
            </div>
            </header>
            {/* Wishlist Sidebar */}
            <aside
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-4 overflow-y-auto z-50 transition-transform duration-500 ${
            showWishlist ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-[--peach]">Yêu thích</h2>
            <button onClick={() => setShowWishlist(false)}>
              <X className="h-6 text-gray-600" />
            </button>
          </div>

          {wishlist.length > 0 ? (
            wishlist.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-4 border-b pb-2"
              >
                {/* Product Image */}
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded-md"
                />
                {/* Product Name */}
                <button onClick={()=>{
                    setShowWishlist(false);
                    navigate(`/product/${item.id}`)
                }} className="flex-1 ml-2 text-left">
                  <p className="font-medium">{item.name}</p>
                </button>
                {/* Delete Button */}
                <button onClick={() => removeFromWishlist(item.id)}>
                  <Trash2 className="h-5 text-red-500" />
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 mt-12">Danh sách đang trống</p>
          )}
        </aside>
        </div>
    )
}