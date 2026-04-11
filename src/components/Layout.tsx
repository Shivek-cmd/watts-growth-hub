import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useRevealOnScroll } from "@/hooks/use-reveal";

const Layout = ({ children }: { children: ReactNode }) => {
  useRevealOnScroll();

  return (
    <div className="grain min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
