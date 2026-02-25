import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Database, Filter, SortAsc } from "lucide-react";
import { faqs, features, releaseUrl } from "./-data";

export const Route = createFileRoute("/")({ component: LandingPage });

function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#08090b] text-[#f5f5f7]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-56 right-[-120px] h-[500px] w-[900px] rounded-full bg-[#0a84ff]/20 blur-3xl" />
        <div className="absolute -top-44 left-[-180px] h-[420px] w-[780px] rounded-full bg-white/5 blur-3xl" />
      </div>
      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 z-20 border-b border-white/10 bg-[#08090bcc] backdrop-blur-md">
          <div className="mx-auto flex h-16 w-[min(1120px,calc(100%-2.5rem))] items-center justify-between gap-4 max-md:w-[min(1120px,calc(100%-1.4rem))]">
            <a
              href="#top"
              data-track="nav_logo_click"
              data-track-label="table-logo"
              className="inline-flex items-center gap-2 font-bold tracking-[-0.01em]"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#0a84ff] shadow-[0_0_0_4px_rgba(10,132,255,0.2)]" />
              <span>Table</span>
            </a>
            <nav className="inline-flex items-center gap-6 text-[0.93rem] text-[#f5f5f7bf] max-md:hidden">
              <a href="#features" data-track="nav_features_click" className="no-underline hover:text-white">
                Features
              </a>
              <a href="#screenshots" data-track="nav_screenshots_click" className="no-underline hover:text-white">
                Screenshots
              </a>
              <a href="#pricing" data-track="nav_pricing_click" className="no-underline hover:text-white">
                Pricing
              </a>
              <a href="#faq" data-track="nav_faq_click" className="no-underline hover:text-white">
                FAQ
              </a>
            </nav>
            <a
              href={releaseUrl}
              data-track="release_cta_nav_click"
              data-track-label="github-releases-nav"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-[10px] border border-white/20 px-4 py-3 text-[0.92rem] font-semibold text-[#f5f5f7e6] no-underline transition hover:border-white/35 hover:bg-white/5"
            >
              GitHub Releases
            </a>
          </div>
        </header>

        <section id="top" className="px-0 pb-20 pt-52 max-md:pt-16">
          <div className="mx-auto grid w-[min(1120px,calc(100%-2.5rem))] grid-cols-[1.2fr_0.8fr] items-center gap-10 max-md:w-[min(1120px,calc(100%-1.4rem))] max-md:grid-cols-1 max-md:gap-6">
            <div>
              <p className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.78rem] text-[#f5f5f7b8]">
                PostgreSQL Desktop Client
              </p>
              <h1 className="m-0 max-w-[18ch] text-[clamp(2rem,5vw,3.6rem)] leading-[1.05] tracking-[-0.04em]">
                Query, inspect, and manage your Postgres database with speed.
              </h1>
              <p className="mt-5 max-w-[58ch] leading-[1.65] text-[#f5f5f7b8]">
                Table is a native-feeling desktop app for local and cloud Postgres. Built for developers who want powerful data workflows without UI clutter.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 max-md:flex-col">
                <a
                  href={releaseUrl}
                  data-track="release_cta_hero_primary_click"
                  data-track-label="view-on-github-releases-hero"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#0a84ff] px-4 py-3 text-[0.92rem] font-semibold text-white no-underline transition hover:bg-[#0077ea] max-md:w-full"
                >
                  <span>View on GitHub Releases</span>
                  <ArrowRight className="size-4" />
                </a>
                <a
                  href="#features"
                  data-track="hero_secondary_features_click"
                  className="inline-flex items-center justify-center rounded-[10px] border border-white/20 px-4 py-3 text-[0.92rem] font-semibold text-[#f5f5f7e6] no-underline transition hover:border-white/35 hover:bg-white/5 max-md:w-full"
                >
                  See Features
                </a>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["macOS app", "Secure credentials", "Fast grid performance"].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 text-[0.78rem] text-[#f5f5f794]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-[14px] border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))]">
              <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3 font-mono text-[0.82rem] text-[#f5f5f7c2]">
                <Database className="size-4" />
                <span>Connected: neondb_owner@ep-.../postgres</span>
              </div>
              <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3 font-mono text-[0.82rem] text-[#f5f5f7c2]">
                <Filter className="size-4" />
                <span>WHERE email ILIKE '%@gmail.com'</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 font-mono text-[0.82rem] text-[#f5f5f7c2]">
                <SortAsc className="size-4" />
                <span>Sorted by created_at DESC</span>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-12">
          <div className="mx-auto w-[min(1120px,calc(100%-2.5rem))] max-md:w-[min(1120px,calc(100%-1.4rem))]">
            <h2 className="m-0 text-[clamp(1.4rem,3.2vw,2rem)] tracking-[-0.03em]">Everything you need for daily Postgres work</h2>
            <p className="mt-3 leading-relaxed text-[#f5f5f7a8]">Focused tooling for browsing schemas, writing SQL, and editing data safely.</p>
            <div className="mt-6 grid grid-cols-4 gap-3 max-lg:grid-cols-2 max-md:grid-cols-1">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article key={feature.title} className="rounded-xl border border-white/10 bg-white/2 p-4">
                    <Icon className="h-5 w-5 text-[#0a84ff]" />
                    <h3 className="mb-0 mt-3 text-[0.98rem] tracking-[-0.01em]">{feature.title}</h3>
                    <p className="mb-0 mt-2 text-[0.9rem] leading-[1.45] text-[#f5f5f7a6]">{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="screenshots" className="py-12">
          <div className="mx-auto w-[min(1120px,calc(100%-2.5rem))] max-md:w-[min(1120px,calc(100%-1.4rem))]">
            <h2 className="m-0 text-[clamp(1.4rem,3.2vw,2rem)] tracking-[-0.03em]">Built for real tables and real workloads</h2>
            <p className="mt-3 leading-relaxed text-[#f5f5f7a8]">Native-feeling UI with practical features for production databases.</p>
            <div className="mt-6 grid grid-cols-3 gap-4 max-lg:grid-cols-1">
              <figure className="m-0 overflow-hidden rounded-xl border border-white/10 bg-white/2">
                <img src="/screenshots/query-editor.svg" alt="SQL editor in Table app" />
                <figcaption className="border-t border-white/10 px-3.5 py-3 text-[0.88rem] text-[#f5f5f7b8]">Multi-tab SQL editor with result panel</figcaption>
              </figure>
              <figure className="m-0 overflow-hidden rounded-xl border border-white/10 bg-white/2">
                <img src="/screenshots/table-browser.svg" alt="Table browser with sorting and filtering" />
                <figcaption className="border-t border-white/10 px-3.5 py-3 text-[0.88rem] text-[#f5f5f7b8]">
                  Table browser with sort, filter, and row selection
                </figcaption>
              </figure>
              <figure className="m-0 overflow-hidden rounded-xl border border-white/10 bg-white/2">
                <img src="/screenshots/row-inspector.svg" alt="Row inspector showing full JSON details" />
                <figcaption className="border-t border-white/10 px-3.5 py-3 text-[0.88rem] text-[#f5f5f7b8]">Row inspector for full record details</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-12">
          <div className="mx-auto w-[min(1120px,calc(100%-2.5rem))] max-md:w-[min(1120px,calc(100%-1.4rem))]">
            <h2 className="m-0 text-[clamp(1.4rem,3.2vw,2rem)] tracking-[-0.03em]">Simple pricing</h2>
            <p className="mt-3 leading-relaxed text-[#f5f5f7a8]">Start using Table today.</p>
            <div className="mt-5 flex justify-center">
              <article className="w-full max-w-[460px] rounded-[14px] border border-white/15 bg-white/2 p-5">
                <p className="m-0 text-[0.9rem] text-[#f5f5f7b3]">Table</p>
                <p className="mb-4 mt-1 text-[2rem] font-bold tracking-[-0.03em]">Free</p>
                <ul className="mb-4 grid list-disc gap-2 pl-5 text-[#f5f5f7b8]">
                  <li>Connect local and cloud Postgres</li>
                  <li>Schema explorer and SQL editor</li>
                  <li>Grid editing, sorting, filtering</li>
                  <li>Query history and row inspector</li>
                </ul>
                <a
                  href={releaseUrl}
                  data-track="release_cta_pricing_click"
                  data-track-label="download-from-releases-pricing"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-[10px] bg-[#0a84ff] px-4 py-3 text-[0.92rem] font-semibold text-white no-underline transition hover:bg-[#0077ea]"
                >
                  Download from Releases
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="faq" className="py-12">
          <div className="mx-auto w-[min(1120px,calc(100%-2.5rem))] max-md:w-[min(1120px,calc(100%-1.4rem))]">
            <h2 className="m-0 text-[clamp(1.4rem,3.2vw,2rem)] tracking-[-0.03em]">FAQ</h2>
            <div className="mt-5 grid gap-3">
              {faqs.map((item) => (
                <article key={item.q} className="rounded-xl border border-white/10 bg-white/2 p-4">
                  <h3 className="m-0 text-[0.96rem]">{item.q}</h3>
                  <p className="mb-0 mt-2 text-[0.9rem] leading-[1.55] text-[#f5f5f7ad]">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto w-[min(1120px,calc(100%-2.5rem))] max-md:w-[min(1120px,calc(100%-1.4rem))]">
            <div className="rounded-[14px] border border-white/15 bg-white/2 px-6 py-7 text-center">
              <h2 className="m-0 tracking-[-0.02em]">Ready to try Table?</h2>
              <p className="mx-auto mb-5 mt-2 max-w-[50ch] text-[#f5f5f7ad]">Get the latest release and start connecting your Postgres databases in minutes.</p>
              <a
                href={releaseUrl}
                data-track="release_cta_final_click"
                data-track-label="view-on-github-releases-final"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#0a84ff] px-4 py-3 text-[0.92rem] font-semibold text-white no-underline transition hover:bg-[#0077ea]"
              >
                <span>View on GitHub Releases</span>
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-9 border-t border-white/10">
          <div className="mx-auto flex min-h-[62px] w-[min(1120px,calc(100%-2.5rem))] items-center justify-between text-[0.85rem] text-[#f5f5f794] max-md:w-[min(1120px,calc(100%-1.4rem))] max-md:flex-col max-md:gap-1.5 max-md:py-4">
            <p>© {new Date().getFullYear()} Table</p>
            <a
              href={releaseUrl}
              data-track="release_cta_footer_click"
              data-track-label="github-releases-footer"
              target="_blank"
              rel="noreferrer"
              className="no-underline text-[#f5f5f7c7] hover:text-white"
            >
              GitHub Releases
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
