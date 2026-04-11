import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Speaking from "./pages/Speaking.tsx";
import Media from "./pages/Media.tsx";
import InviteRitesh from "./pages/InviteRitesh.tsx";
import ApplyGuest from "./pages/ApplyGuest.tsx";
import Blog from "./pages/Blog.tsx";
import BrandsVentures from "./pages/BrandsVentures.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/media" element={<Media />} />
          <Route path="/media/invite" element={<InviteRitesh />} />
          <Route path="/media/apply" element={<ApplyGuest />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/brands-ventures" element={<BrandsVentures />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
