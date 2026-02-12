import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import { Suspense } from "react";

/**
 * Loading Spinner - Subtle and elegant animation
 */
function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-950 z-50">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950" />
      
      {/* Animation container */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Main spinner with multiple layers */}
        <div className="relative w-16 h-16">
          {/* Outer layer - slow rotation */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-600 border-r-blue-400 animate-spin" style={{ animationDuration: "3s" }} />
          
          {/* Middle layer - reverse rotation */}
          <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-cyan-500 border-l-cyan-400 animate-spin" style={{ animationDuration: "2s", animationDirection: "reverse" }} />
          
          {/* Inner layer - pulsing */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 animate-pulse" />
        </div>

        {/* Text with fade animation */}
        <div className="text-center animate-in fade-in duration-1000">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            Loading portfolio
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
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        switchable
      >
        <TooltipProvider>
          <Toaster />
          <Suspense fallback={<LoadingSpinner />}>
            <Router />
          </Suspense>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
