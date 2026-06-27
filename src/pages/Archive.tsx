import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search, X } from "lucide-react";
import { archiveItems, archiveCategories, type ArchiveItem } from "@/lib/archive-data";
import { translations, type Lang } from "@/lib/site-i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import logo from "@/assets/real/logo.png.asset.json";

export default function ArchivePage() {
  const [lang] = useState<Lang>("pl");
  const t = translations[lang];
  const [filter, setFilter] = useState<ArchiveItem["category"] | "all">("all");
  const [query, setQuery] = useState("");
  const [year, setYear] = useState<string>("all");
  const [sort, setSort] = useState<"newest" | "oldest">("newest");

  const compareByDate = (a: ArchiveItem, b: ArchiveItem) => {
    const byDate = sort === "newest" ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date);
    if (byDate !== 0) return byDate;
    return a.title.localeCompare(b.title, "pl");
  };

  const years = useMemo(() => {
    const set = new Set<string>();
    archiveItems.forEach((i) => {
      if (filter !== "all" && i.category !== filter) return;
      const y = (i.date || "").slice(0, 4);
      if (y) set.add(y);
    });
    return Array.from(set).sort((a, b) => b.localeCompare(a));
  }, [filter]);

  useEffect(() => {
    if (year !== "all" && !years.includes(year)) {
      setYear("all");
    }
  }, [year, years]);

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = archiveItems.filter((i) => {
      if (filter !== "all" && i.category !== filter) return false;
      if (year !== "all" && !i.date.startsWith(year)) return false;
      if (q && !(`${i.title} ${i.excerpt}`.toLowerCase().includes(q))) return false;
      return true;
    });
    list = [...list].sort(compareByDate);
    return list;
  }, [filter, year, query, sort]);


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

        <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto_auto]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Szukaj w archiwum…"
              className="pl-9 pr-9 h-11"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground"
                aria-label="Wyczyść"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger className="h-11 sm:w-[140px]">
              <SelectValue placeholder="Rok" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Wszystkie lata</SelectItem>
              {years.map((y) => (
                <SelectItem key={y} value={y}>
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sort} onValueChange={(v) => setSort(v as "newest" | "oldest")}>
            <SelectTrigger className="h-11 sm:w-[170px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Najnowsze</SelectItem>
              <SelectItem value="oldest">Najstarsze</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          {items.length} {items.length === 1 ? "wynik" : "wyników"}
        </p>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <article
              key={`${item.category}-${item.id}`}
              className="group block rounded-2xl overflow-hidden border border-border bg-card hover:border-accent/60 hover:shadow-xl transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                {item.image ? (
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-accent font-semibold uppercase tracking-wide">
                    {item.category}
                  </span>
                  <span className="text-muted-foreground">{item.date}</span>
                </div>
                <h3 className="font-display text-xl text-primary leading-snug">{item.title}</h3>
                {item.excerpt && (
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {item.excerpt}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        {items.length === 0 && (
          <div className="mt-16 text-center text-muted-foreground">Brak wyników.</div>
        )}
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
