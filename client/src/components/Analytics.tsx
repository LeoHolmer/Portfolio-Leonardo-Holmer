import { useEffect } from "react";

/**
 * Privacy-respecting Analytics component
 * Only triggers if the user has accepted cookies or when non-intrusive metrics are configured.
 */
export function Analytics() {
  useEffect(() => {
    const consent = localStorage.getItem("portfolio_cookie_consent");
    if (consent === "declined") {
      return;
    }

    const analyticsId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;
    const analyticsEndpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;

    if (analyticsId && analyticsEndpoint) {
      const script = document.createElement("script");
      script.async = true;
      script.defer = true;
      script.dataset.websiteId = analyticsId;
      script.src = `${analyticsEndpoint}/umami.js`;
      document.head.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, []);

  return null;
}
export default Analytics;
