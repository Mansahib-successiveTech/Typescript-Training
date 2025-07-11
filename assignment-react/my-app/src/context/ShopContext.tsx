"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface cartInterface {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

type productType = {
  id: number;
  name: string;
  price: number;
};

interface shopInterface {
  cart: cartInterface[];
  addToCart: (product: productType) => void;
  removeFromCart: (id: number) => void;
  total: number;
}

const ShopProvider = createContext<shopInterface | undefined>(undefined);

export const ShopContext = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<cartInterface[]>([]);

  const addToCart = (product: productType) => {
    setCart((prev) => {
      const ifExist = prev.find((item) => item.id === product.id);

      if (ifExist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <ShopProvider.Provider value={{ cart, addToCart, removeFromCart, total }}>
      {children}
    </ShopProvider.Provider>
  );
};

export const useShop = (): shopInterface => {
  const context = useContext(ShopProvider);
  if (!context) {
    throw new Error("error");
  }
  return context;
};
