import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import CaseStudyPage from "./pages/CaseStudyPage.tsx";
import GameDevPage from "./pages/GameDevPage.tsx";
import ArtPage from "./pages/ArtPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ProjectManagementPage from "./pages/ProjectManagementPage.tsx";
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
          <Route path="/case-study" element={<CaseStudyPage />} />
          <Route path="/game-dev" element={<GameDevPage />} />
          <Route path="/art" element={<ArtPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product-management" element={<ProjectManagementPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
