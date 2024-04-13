import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CartProvider } from "@/hooks/useCart";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <CartProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </CartProvider>
    </>
  );
};

export default Layout;
