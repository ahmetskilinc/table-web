import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import appCss from "../styles.css?url";
import { initWebAnalytics } from "../lib/analytics";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Table — PostgreSQL Desktop Client",
      },
      {
        name: "description",
        content:
          "Table is a native-feeling PostgreSQL desktop client for local and cloud databases. Query, browse schemas, edit rows, and inspect data quickly.",
      },
      {
        property: "og:title",
        content: "Table — PostgreSQL Desktop Client",
      },
      {
        property: "og:description",
        content: "Query, inspect, and manage your Postgres database with a fast, native-feeling desktop app.",
      },
      {
        property: "og:type",
        content: "website",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <AnalyticsBootstrap />
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function AnalyticsBootstrap(): null {
  useEffect(() => {
    const cleanup = initWebAnalytics();
    return () => {
      cleanup?.();
    };
  }, []);
  return null;
}
