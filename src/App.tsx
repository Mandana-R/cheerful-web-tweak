import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Account from "./pages/Account";
import Blog from "./pages/Blog";
import Carriers from "./pages/Carriers";
import Contact from "./pages/Contact";
import RateCalculator from "./pages/RateCalculator";
import Services from "./pages/Services";
import Shippers from "./pages/Shippers";

const queryClient = new QueryClient();
const Router = typeof window !== "undefined" && window.location.protocol === "file:" ? HashRouter : BrowserRouter;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/index.html" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/about.html" element={<About />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account.html" element={<Account />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog.html" element={<Blog />} />
          <Route path="/carriers" element={<Carriers />} />
          <Route path="/carriers.html" element={<Carriers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact.html" element={<Contact />} />
          <Route path="/rate-calculator" element={<RateCalculator />} />
          <Route path="/rate-calculator.html" element={<RateCalculator />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services.html" element={<Services />} />
          <Route path="/shippers" element={<Shippers />} />
          <Route path="/shippers.html" element={<Shippers />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
