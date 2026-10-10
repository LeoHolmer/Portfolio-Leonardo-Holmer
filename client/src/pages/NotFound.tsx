import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NotFound() {
  const [, setLocation] = useLocation();
  const { language } = useLanguage();

  const isEs = language === "es";

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4 transition-colors">
      <Card className="w-full max-w-lg shadow-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl">
        <CardContent className="pt-10 pb-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center">
              <AlertCircle className="w-8 h-8" />
            </div>
          </div>

          <span className="text-xs font-mono font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Error 404
          </span>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2 mb-3">
            {isEs ? "Página no encontrada" : "Page Not Found"}
          </h1>

          <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 max-w-sm mx-auto leading-relaxed">
            {isEs
              ? "La página o el recurso que buscas no existe, ha sido movido o no está disponible en este momento."
              : "The page or resource you are looking for doesn't exist, has been moved, or is temporarily unavailable."}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => setLocation("/")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow-md shadow-blue-500/20 transition-all hover:scale-105"
            >
              <Home className="w-4 h-4 mr-2" />
              {isEs ? "Volver al Inicio" : "Go Home"}
            </Button>
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-medium text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {isEs ? "Regresar" : "Go Back"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
