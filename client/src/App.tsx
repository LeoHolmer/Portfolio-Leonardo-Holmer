import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import CookieBanner from "./components/CookieBanner";
import LegalModal from "./components/LegalModal";
import Analytics from "./components/Analytics";
import { Suspense, useState, useEffect } from "react";

/**
 * Loading Spinner - Subtle and elegant animation
 */
function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-950 z-50">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950" />
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-600 border-r-blue-400 animate-spin" style={{ animationDuration: "3s" }} />
          <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-cyan-500 border-l-cyan-400 animate-spin" style={{ animationDuration: "2s", animationDirection: "reverse" }} />
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 animate-pulse" />
        </div>
        <div className="text-center animate-in fade-in duration-1000">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            Leonardo Holmer · Portfolio
          </p>
          <div className="flex justify-center gap-1 mt-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: "0s" }} />
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: "0.2s" }} />
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: "0.4s" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/project/:id"} component={ProjectDetail} />
      <Route path={"/privacidad"} component={PrivacyPage} />
      <Route path={"/terminos"} component={TermsPage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<"privacy" | "terms">("privacy");

  useEffect(() => {
    const handleOpenLegal = (e: Event) => {
      const customEvent = e as CustomEvent<"privacy" | "terms">;
      setLegalTab(customEvent.detail || "privacy");
      setLegalModalOpen(true);
    };

    window.addEventListener("portfolio_open_legal", handleOpenLegal);
    return () => {
      window.removeEventListener("portfolio_open_legal", handleOpenLegal);
    };
  }, []);

  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider defaultTheme="light" switchable>
          <TooltipProvider>
            <Toaster position="bottom-right" richColors />
            <Suspense fallback={<LoadingSpinner />}>
              <Router />
            </Suspense>
            <CookieBanner onOpenPrivacy={() => {
              setLegalTab("privacy");
              setLegalModalOpen(true);
            }} />
            <LegalModal
              open={legalModalOpen}
              onOpenChange={setLegalModalOpen}
              initialTab={legalTab}
            />
            <Analytics />
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
