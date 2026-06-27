import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { archiveItems, archiveCategories, type ArchiveItem } from "@/lib/archive-data";
import { translations, type Lang } from "@/lib/site-i18n";
import { Button } from "@/components/ui/button";
import logo from "@/assets/real/logo.png.asset.json";

export default function ArchivePage() {
  const [lang] = useState<Lang>("pl");
  const t = translations[lang];
  const [filter, setFilter] = useState<ArchiveItem["category"] | "all">("all");

  const items =
    filter === "all" ? archiveItems : archiveItems.filter((i) => i.category === filter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-background">
        <div className="container-x flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo.url} alt="" className="h-12 w-auto" />
          </Link>
          <Button asChild variant="ghost" className="rounded-full">
            <Link to="/">
              <ArrowLeft className="mr-2 w-4 h-4" />
              {t.archive.back}
            </Link>
          </Button>
        </div>
      </header>

      <section className="container-x py-16 md:py-24">
        <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold mb-4">
          {t.archive.eyebrow}
        </p>
        <h1 className="font-display text-4xl md:text-6xl text-primary leading-tight max-w-3xl">
          {t.archive.title}
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">{t.archive.lead}</p>

        <div className="mt-10 flex flex-wrap gap-2">
          <FilterPill active={filter === "all"} onClick={() => setFilter("all")}>
            {t.archive.all}
          </FilterPill>
          {archiveCategories.map((c) => (
            <FilterPill key={c} active={filter === c} onClick={() => setFilter(c)}>
              {c}
            </FilterPill>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden border border-border bg-card hover:border-accent/60 hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-accent font-semibold uppercase tracking-wide">
                    {item.category}
                  </span>
                  <span className="text-muted-foreground">{item.date}</span>
                </div>
                <h3 className="font-display text-xl text-primary leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {item.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  {t.archive.readMore} <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground/80 py-10 mt-10">
        <div className="container-x text-sm text-center">
          © {new Date().getFullYear()} {t.footer.rights}
        </div>
      </footer>
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
        active
          ? "bg-primary text-primary-foreground border-primary"
          : "bg-background text-foreground border-border hover:border-accent/60"
      }`}
    >
      {children}
    </button>
  );
}
