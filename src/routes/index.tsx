import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Database, Filter, SortAsc, Star } from "lucide-react";
import { faqs, features, releaseUrl } from "./-data";

export const Route = createFileRoute("/")({ component: LandingPage });

function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#09090b] text-[#fafafa]">
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-1.5 focus:text-sm focus:text-black focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Subtle gradient accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-80px] h-[400px] w-[600px] rounded-full bg-[#3b82f6]/10 blur-[120px]" />
      </div>

      <div id="main-content" className="relative z-10">
        {/* Minimal header */}
        <header className="fixed top-0 left-0 right-0 z-20 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-sm">
          <div className="mx-auto flex h-12 w-[min(1000px,calc(100%-2rem))] items-center justify-between">
            <a
              href="#top"
              aria-label="Table - Back to top"
              className="flex items-center gap-1.5 text-sm font-medium tracking-tight"
            >
              <span className="h-2 w-2 rounded-full bg-[#3b82f6]" />
              <span>Table</span>
            </a>
            <nav aria-label="Main navigation" className="flex items-center gap-5 text-[13px] text-[#a1a1aa] max-md:hidden">
              <a href="#features" className="transition-colors hover:text-white">Features</a>
              <a href="#screenshots" className="transition-colors hover:text-white">Screenshots</a>
              <a href="#pricing" className="transition-colors hover:text-white">Pricing</a>
              <a href="#faq" className="transition-colors hover:text-white">FAQ</a>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section id="top" className="px-0 pb-16 pt-32 max-md:pt-24">
          <div className="mx-auto grid w-[min(1000px,calc(100%-2rem))] grid-cols-[1.1fr_0.9fr] items-center gap-12 max-md:grid-cols-1 max-md:gap-8">
            <div>
              <span className="inline-block rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-[#71717a]">
                PostgreSQL Client
              </span>
              <h1 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-tight">
                Query, inspect, and manage Postgres with speed.
              </h1>
              <p className="mt-4 max-w-[48ch] text-[15px] leading-relaxed text-[#a1a1aa]">
                A native desktop client that gets out of your way. Fast, focused, and built for developers who care about their data.
              </p>

              {/* Tight button group */}
              <div className="mt-6 flex items-center gap-2">
                <a
                  href={releaseUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 rounded bg-[#3b82f6] px-3 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-[#2563eb]"
                >
                  <span>Download</span>
                  <ArrowRight aria-hidden="true" className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center rounded border border-white/10 bg-transparent px-3 py-1.5 text-[13px] font-medium text-[#e4e4e7] transition-colors hover:bg-white/5"
                >
                  Learn more
                </a>
              </div>

              {/* Social proof */}
              <div className="mt-6 border-t border-white/5 pt-4">
                <a
                  href="https://github.com/ahmetskilinc/table/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-[12px] text-[#71717a] transition-colors hover:text-white"
                >
                  <Star aria-hidden="true" className="size-3" />
                  <span>Star on GitHub</span>
                </a>
              </div>
            </div>

            {/* Terminal-style demo */}
            <div className="overflow-hidden rounded border border-white/10 bg-[#0c0c0f] font-mono text-[12px]">
              <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-[#ef4444]/60" />
                <span className="h-2 w-2 rounded-full bg-[#eab308]/60" />
                <span className="h-2 w-2 rounded-full bg-[#22c55e]/60" />
              </div>
              <div className="space-y-0">
                <div className="flex items-center gap-2 border-b border-white/5 px-3 py-2 text-[#71717a]">
                  <Database aria-hidden="true" className="size-3" />
                  <span>neondb_owner@ep-.../postgres</span>
                </div>
                <div className="flex items-center gap-2 border-b border-white/5 px-3 py-2 text-[#71717a]">
                  <Filter aria-hidden="true" className="size-3" />
                  <span className="text-[#a1a1aa]">WHERE</span> email ILIKE '%@gmail.com'
                </div>
                <div className="flex items-center gap-2 px-3 py-2 text-[#71717a]">
                  <SortAsc aria-hidden="true" className="size-3" />
                  <span className="text-[#a1a1aa]">ORDER BY</span> created_at DESC
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features - compact grid */}
        <section id="features" className="py-12">
          <div className="mx-auto w-[min(1000px,calc(100%-2rem))]">
            <h2 className="text-lg font-semibold tracking-tight">Features</h2>
            <p className="mt-1 text-[14px] text-[#71717a]">Everything you need for daily Postgres work.</p>
            <div className="mt-5 grid grid-cols-4 gap-px overflow-hidden rounded border border-white/10 bg-white/5 max-lg:grid-cols-2 max-md:grid-cols-1">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article key={feature.title} className="bg-[#09090b] p-4 transition-colors hover:bg-[#0c0c0f]">
                    <Icon aria-hidden="true" className="h-4 w-4 text-[#3b82f6]" />
                    <h3 className="mt-2 text-[13px] font-medium">{feature.title}</h3>
                    <p className="mt-1 text-[12px] leading-relaxed text-[#71717a]">{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section id="screenshots" className="py-12">
          <div className="mx-auto w-[min(1000px,calc(100%-2rem))]">
            <h2 className="text-lg font-semibold tracking-tight">Screenshots</h2>
            <p className="mt-1 text-[14px] text-[#71717a]">Native UI built for production databases.</p>
            <div className="mt-5 grid grid-cols-3 gap-3 max-lg:grid-cols-1">
              {[
                { src: "/screenshots/query-editor.svg", alt: "SQL editor", caption: "SQL editor" },
                { src: "/screenshots/table-browser.svg", alt: "Table browser", caption: "Table browser" },
                { src: "/screenshots/row-inspector.svg", alt: "Row inspector", caption: "Row inspector" },
              ].map((item) => (
                <figure key={item.src} className="m-0 overflow-hidden rounded border border-white/10 bg-[#0c0c0f]">
                  <img src={item.src} alt={item.alt} className="w-full" />
                  <figcaption className="border-t border-white/5 px-3 py-2 text-[12px] text-[#71717a]">{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing - minimal */}
        <section id="pricing" className="py-12">
          <div className="mx-auto w-[min(1000px,calc(100%-2rem))]">
            <h2 className="text-lg font-semibold tracking-tight">Pricing</h2>
            <div className="mt-5 flex justify-center">
              <article className="w-full max-w-sm rounded border border-white/10 bg-[#0c0c0f] p-5">
                <div className="flex items-baseline justify-between">
                  <span className="text-[13px] text-[#71717a]">Table</span>
                  <span className="text-2xl font-semibold">$0</span>
                </div>
                <p className="mt-1 text-[12px] text-[#52525b]">Free forever. No signup.</p>
                <ul className="mt-4 space-y-1.5 text-[13px] text-[#a1a1aa]">
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[#3b82f6]" />
                    Local and cloud Postgres
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[#3b82f6]" />
                    Schema explorer + SQL editor
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[#3b82f6]" />
                    Grid editing and filtering
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[#3b82f6]" />
                    Query history
                  </li>
                </ul>
                <a
                  href={releaseUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 flex w-full items-center justify-center rounded bg-white px-3 py-1.5 text-[13px] font-medium !text-[#09090b] transition-colors hover:bg-[#e4e4e7]"
                >
                  Download
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ - compact */}
        <section id="faq" className="py-12">
          <div className="mx-auto w-[min(1000px,calc(100%-2rem))]">
            <h2 className="text-lg font-semibold tracking-tight">FAQ</h2>
            <div className="mt-5 divide-y divide-white/5">
              {faqs.map((item) => (
                <article key={item.q} className="py-3">
                  <h3 className="text-[13px] font-medium">{item.q}</h3>
                  <p className="mt-1 text-[13px] text-[#71717a]">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - minimal */}
        <section className="py-12">
          <div className="mx-auto w-[min(1000px,calc(100%-2rem))]">
            <div className="flex items-center justify-between rounded border border-white/10 bg-[#0c0c0f] px-5 py-4">
              <div>
                <p className="text-[14px] font-medium">Ready to try Table?</p>
                <p className="mt-0.5 text-[13px] text-[#71717a]">Connect your first database in under a minute.</p>
              </div>
              <a
                href={releaseUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 rounded bg-[#3b82f6] px-3 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-[#2563eb]"
              >
                <span>Download</span>
                <ArrowRight aria-hidden="true" className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer - minimal */}
        <footer className="border-t border-white/5">
          <div className="mx-auto flex h-12 w-[min(1000px,calc(100%-2rem))] items-center text-[12px] text-[#52525b]">
            <p>© {new Date().getFullYear()} Table</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
