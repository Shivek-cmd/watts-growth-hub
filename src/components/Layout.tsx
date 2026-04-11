import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useRevealOnScroll, useParallaxScroll } from "@/hooks/use-reveal";

const Layout = ({ children }: { children: ReactNode }) => {
  useRevealOnScroll();
  useParallaxScroll();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="grain min-h-screen flex flex-col page-transition scroll-snap-container" key={pathname}>
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
