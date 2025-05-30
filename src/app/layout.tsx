// app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import { WishlistProvider } from "./context/WishlistContext";

export const metadata: Metadata = {
  title: "Minha Loja",
  description: "Loja online com Next.js, TypeScript e Tailwind CSS",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <AuthProvider>
          <CartProvider>
            <ProductProvider>
              <WishlistProvider>
                <Navbar />
                <main>
                  {children}
                </main>
                <Footer />
              </WishlistProvider>
            </ProductProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
