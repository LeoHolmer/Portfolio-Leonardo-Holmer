import { cn } from "@/lib/utils";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    // Real-time production error observability (e.g., Sentry)
    if (typeof window !== "undefined" && (window as any).Sentry?.captureException) {
      (window as any).Sentry.captureException(error, { extra: errorInfo });
    }
  }

  render() {
    if (this.state.hasError) {
      const isDev = process.env.NODE_ENV !== "production";

      return (
        <div className="flex items-center justify-center min-h-screen p-8 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
          <div className="flex flex-col items-center w-full max-w-lg p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 text-center">
            <div className="w-14 h-14 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center mb-6">
              <AlertTriangle size={32} />
            </div>

            <h2 className="text-xl font-bold mb-2">Algo salió mal</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
              Ocurrió un error inesperado al renderizar esta sección. Puedes recargar la página para reintentar.
            </p>

            {isDev && this.state.error && (
              <div className="p-3 w-full text-left rounded-lg bg-slate-100 dark:bg-slate-800/60 overflow-auto mb-6 max-h-48">
                <pre className="text-xs font-mono text-red-600 dark:text-red-400 whitespace-pre-wrap break-all">
                  {this.state.error.message}
                </pre>
              </div>
            )}

            <button
              onClick={() => window.location.reload()}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold",
                "bg-blue-600 text-white shadow-md shadow-blue-500/20",
                "hover:bg-blue-700 cursor-pointer transition-colors"
              )}
            >
              <RotateCcw size={16} />
              Recargar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
