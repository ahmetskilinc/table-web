import { Download, History, LayoutPanelLeft, PenSquare, SearchCode, ShieldCheck, SortAsc, TableProperties } from "lucide-react";

export const releaseUrl = "https://github.com/ahmetskilinc/postgres-db-app/releases";

export const features = [
  {
    icon: SearchCode,
    title: "Schema-aware SQL Editor",
    description: "Run queries with autocomplete for schemas, tables, columns, and SQL keywords.",
  },
  {
    icon: LayoutPanelLeft,
    title: "Fast Schema Navigation",
    description: "Browse large Postgres schemas with expandable trees and quick table access.",
  },
  {
    icon: TableProperties,
    title: "Table Browser",
    description: "Open any table instantly with pagination, row selection, and row inspector details.",
  },
  {
    icon: SortAsc,
    title: "Sort and Filter",
    description: "Sort by column and apply SQL-style WHERE filters directly from the grid.",
  },
  {
    icon: PenSquare,
    title: "Inline Editing",
    description: "Edit, insert, and delete rows with primary key safety checks.",
  },
  {
    icon: History,
    title: "Query History",
    description: "Restore previously executed queries with duration and row count context.",
  },
  {
    icon: Download,
    title: "Export Data",
    description: "Export result sets as CSV or JSON in one click.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Connection Storage",
    description: "Connection credentials are encrypted via system-level secure storage.",
  },
];

export const faqs = [
  {
    q: "Does Table work with local and cloud Postgres?",
    a: "Yes. You can connect to local Postgres, Neon, Supabase, RDS, and other hosted providers.",
  },
  {
    q: "Can I connect with a full connection string?",
    a: "Yes. The connection dialog supports both field-based input and direct Postgres connection strings.",
  },
  {
    q: "Is my connection password stored safely?",
    a: "Yes. Credentials are encrypted and stored with OS-backed secure storage through Electron safeStorage.",
  },
  {
    q: "Can I edit and delete table rows?",
    a: "Yes. Inline updates, inserts, and deletes are supported for tables with primary keys.",
  },
  {
    q: "Does Table include updates?",
    a: "Yes. The desktop app is configured with release-based auto-update support.",
  },
  {
    q: "How much does Table cost?",
    a: "Table is currently free while features continue to expand.",
  },
];
