"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";
import { setCookies, getCookies } from "@/lib/action";


// Define the Wishlist State and Actions
interface WishlistState {
  wishlist: Product[];
}

type WishlistAction =
  | { type: "LOAD_WISHLIST"; payload: Product[] }
  | { type: "ADD_TO_WISHLIST"; payload: Product }
  | { type: "REMOVE_FROM_WISHLIST"; payload: number };

// Reducer Function to Update Wishlist State
const wishlistReducer = (state: WishlistState, action: WishlistAction): WishlistState => {
  switch (action.type) {
    case "LOAD_WISHLIST":
      return { wishlist: action.payload };

    case "ADD_TO_WISHLIST":
      return { wishlist: [...state.wishlist, action.payload] };

    case "REMOVE_FROM_WISHLIST":
      return { wishlist: state.wishlist.filter((product) => product.id !== action.payload) };

    default:
      return state;
  }
};

// Context Initialization
const WishlistContext = createContext<{
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
}>({
  wishlist: [],
  addToWishlist: () => {},
  removeFromWishlist: () => {},
});

// Wishlist Provider Component
export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, { wishlist: [] });

  // Load Wishlist from Cookies on Initial Render
  useEffect(() => {
    const loadWishlist = async () => {
      const storedWishlist = await getCookies("wishlist");
      if (storedWishlist) {
        dispatch({
          type: "LOAD_WISHLIST",
          payload: JSON.parse(storedWishlist.value || "[]"),
        });
      }
    };
    loadWishlist();
  }, []);

  // Add Product to Wishlist
  const addToWishlist = async (product: Product) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: product });
    const updatedWishlist = [...state.wishlist, product];
    await setCookies("wishlist", JSON.stringify(updatedWishlist));
  };

  // Remove Product from Wishlist
  const removeFromWishlist = async (productId: number) => {
    const updatedWishlist = state.wishlist.filter((item) => item.id !== productId);
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: productId });
    await setCookies("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist: state.wishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// Custom Hook to Use Wishlist
export const useWishlist = () => useContext(WishlistContext);
