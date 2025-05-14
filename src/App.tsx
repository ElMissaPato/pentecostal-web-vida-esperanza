
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import QuienesSomos from "./pages/QuienesSomos";
import DeclaracionDeFe from "./pages/DeclaracionDeFe";
import Distritos from "./pages/Distritos";
import Iglesias from "./pages/Iglesias";
import NotFound from "./pages/NotFound";
import Asociaciones from "./pages/Asociaciones";
import AsociacionDetalle from "./pages/AsociacionDetalle";
import Departamentos from "./pages/Departamentos";
import ComiteRegional from "./pages/ComiteRegional";
import PerfilPastor from "./pages/PerfilPastor";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminPanel from "./pages/admin/AdminPanel";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/declaracion-de-fe" element={<DeclaracionDeFe />} />
          <Route path="/distritos" element={<Distritos />} />
          <Route path="/asociaciones" element={<Asociaciones />} />
          <Route path="/asociaciones/:id" element={<AsociacionDetalle />} />
          <Route path="/departamentos" element={<Departamentos />} />
          <Route path="/comite" element={<ComiteRegional />} />
          <Route path="/pastor/:id" element={<PerfilPastor />} />
          <Route path="/admin-idpmi" element={<AdminLogin />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
