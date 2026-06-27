
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { zasadyDoc, loDocs, internatDocs, type DocItem } from "@/lib/docs";
import { translations, languageOptions, type Lang } from "@/lib/site-i18n";
import {
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Trophy,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Home,
  Utensils,
  Wifi,
  Languages,
  Check,
  FileText,
  ChevronDown,
  Download,
  Instagram,
  Facebook,
  Archive as ArchiveIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import logo from "@/assets/real/logo.png.asset.json";
import heroImg from "@/assets/real/recruitment.jpg.asset.json";
import schoolStart from "@/assets/real/school-start.jpg.asset.json";

import matura from "@/assets/real/matura.jpg.asset.json";
import certificate from "@/assets/real/certificate.jpg.asset.json";
import dorm1 from "@/assets/real/dorm-1.jpg.asset.json";
import dorm2 from "@/assets/real/dorm-2.jpg.asset.json";
import dorm3 from "@/assets/real/dorm-3.jpg.asset.json";
import dorm4 from "@/assets/real/dorm-4.jpg.asset.json";
import dorm5 from "@/assets/real/dorm-5.jpg.asset.json";
import dorm6 from "@/assets/real/dorm-6.jpg.asset.json";
import dorm7 from "@/assets/real/dorm-7.jpg.asset.json";
import dorm8 from "@/assets/real/dorm-8.jpg.asset.json";
import dorm9 from "@/assets/real/dorm-9.jpg.asset.json";
import dorm10 from "@/assets/real/dorm-10.jpg.asset.json";

const SOCIAL_LINKS = [
  { label: "Instagram – Kolegium", url: "https://www.instagram.com/kolegium_sw.stanislawakostki/", icon: Instagram },
  { label: "Instagram – Internat", url: "https://www.instagram.com/nasz_internat/", icon: Instagram },
  { label: "Facebook – Kolegium", url: "https://www.facebook.com/profile.php?id=100063546372254", icon: Facebook },
  { label: "Facebook – Bobrowiecka 9", url: "https://www.facebook.com/bobrowiecka9", icon: Facebook },
];


export default function App() {
  return <HomePage />;
}

/* ---------- hooks ---------- */
function useReveal(lang: Lang) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
          }
        });
      },
      { threshold: 0.12 }
    );

    el.querySelectorAll(".reveal").forEach((n) => {
      n.classList.remove("reveal-in");
      io.observe(n);
    });

    return () => io.disconnect();
  }, [lang]);

  return ref;
}

function useScrolled() {
  const [s, setS] = useState(false);
  useEffect(() => {
    const on = () => setS(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return s;
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "");
  useEffect(() => {
    const onScroll = () => {
      const probe = window.innerHeight * 0.35;
      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - probe <= 0) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids.join("|")]);
  return active;
}

/* ---------- page ---------- */
function HomePage() {
  const scrolled = useScrolled();
  const [lang, setLang] = useState<Lang>("pl");
  const rootRef = useReveal(lang);
  const t = translations[lang];

  const navItems = [
    { id: "o-szkole", label: t.nav.about },
    { id: "oferta", label: t.nav.offer },
    { id: "internat", label: t.nav.dorm },
    { id: "rekrutacja", label: t.nav.recruitment },
    { id: "kontakt", label: t.nav.contact },
  ];
  const active = useActiveSection(navItems.map((n) => n.id));

  return (
    <div ref={rootRef} className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-background transition-shadow duration-300 ${
          scrolled ? "shadow-sm border-b border-border" : ""
        }`}
      >
        <div className="container-x flex items-center justify-between h-20 gap-4">
          <a href="#top" className="flex items-center gap-3 shrink-0">
            <img src={logo.url} alt="Kolegium św. Stanisława Kostki" className="h-12 md:h-14 w-auto" />
          </a>
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navItems.map((n) => {
              const isActive = active === n.id;
              return (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  className={`relative py-1 whitespace-nowrap transition-colors ${
                    isActive ? "text-accent" : "text-foreground hover:text-accent"
                  }`}
                >
                  {n.label}
                  <span
                    className={`pointer-events-none absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-accent origin-left transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              );
            })}
            <Link
              to="/archiwum"
              className="relative py-1 whitespace-nowrap transition-colors text-foreground hover:text-accent inline-flex items-center gap-1.5"
            >
              <ArchiveIcon className="w-4 h-4" />
              {t.nav.archive}
            </Link>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/archiwum"
              aria-label={t.nav.archive}
              className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-foreground hover:text-accent hover:bg-accent/10 transition-colors"
            >
              <ArchiveIcon className="w-5 h-5" />
            </Link>
            <LanguageSwitcher lang={lang} onChange={setLang} ariaLabel={t.nav.langAria} />
            <Button
              asChild
              className="hidden sm:inline-flex bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-5"
            >
              <a href="#rekrutacja">
                {t.nav.apply} <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative h-[100svh] min-h-[560px] sm:min-h-[640px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg.url}
            alt="Kolegium"
            className="hidden sm:block w-full h-full object-cover object-center kenburns"
          />
          <div className="sm:hidden absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(var(--primary)/0.92)]" />
          <div className="sm:hidden absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 15% 15%, hsl(var(--accent)) 0%, transparent 45%), radial-gradient(circle at 85% 85%, hsl(var(--accent)) 0%, transparent 45%)" }} />
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-b from-primary/75 via-primary/55 to-primary/85" />
        </div>

        <div className="relative z-10 container-x h-full flex flex-col justify-center text-primary-foreground pt-20">
          <p className="reveal text-accent uppercase tracking-[0.3em] text-[10px] sm:text-xs md:text-sm mb-4 sm:mb-5">
            {t.hero.eyebrow}
          </p>
          <h1 className="reveal font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-5xl">
            {t.hero.titlePre}{" "}
            <span className="italic text-accent">{t.hero.titleAccent}</span>
          </h1>
          <p className="reveal mt-5 sm:mt-7 text-base sm:text-lg md:text-2xl max-w-2xl text-primary-foreground/90 leading-relaxed">
            {t.hero.lead}
          </p>
          <div className="reveal mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 max-w-md sm:max-w-none">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-sm sm:text-base h-12 sm:h-14 px-5 sm:px-8 whitespace-nowrap w-full sm:w-auto justify-center">
              <a href="#rekrutacja">{t.hero.cta1} <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 shrink-0" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full text-sm sm:text-base h-12 sm:h-14 px-5 sm:px-8 bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground whitespace-nowrap w-full sm:w-auto justify-center">
              <a href="#internat">{t.hero.cta2}</a>
            </Button>
          </div>
        </div>

        <a href="#o-szkole" className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 text-primary-foreground/80 hover:text-accent transition-colors" aria-label={t.hero.scrollAria}>
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </a>
      </section>

      {/* O SZKOLE */}
      <section id="o-szkole" className="py-24 md:py-32 container-x scroll-mt-24">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="reveal relative">
            <img src={schoolStart.url} alt="" className="rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover" />
            <div className="absolute -bottom-8 -right-6 md:-right-10 bg-accent text-accent-foreground rounded-2xl p-6 shadow-xl max-w-[220px]">
              <div className="font-display text-4xl">{t.about.badgeNumber}</div>
              <div className="text-sm mt-1 font-medium">{t.about.badgeText}</div>
            </div>
          </div>
          <div>
            <p className="reveal text-accent uppercase tracking-[0.25em] text-xs font-semibold mb-4">{t.about.eyebrow}</p>
            <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-primary">{t.about.title}</h2>
            <div className="space-y-5 mt-8 text-lg text-muted-foreground leading-relaxed">
              <p className="reveal">{t.about.p1}</p>
              <p className="reveal">{t.about.p2}</p>
              <p className="reveal">{t.about.p3}</p>
              <p className="reveal">{t.about.p4}</p>
            </div>
            <div className="reveal grid grid-cols-2 gap-4 mt-10 pt-10 border-t border-border">
              <div>
                <div className="font-display text-3xl md:text-4xl text-primary">{t.about.statYearsValue}</div>
                <div className="text-sm text-muted-foreground mt-1">{t.about.statYearsLabel}</div>
              </div>
              <div>
                <div className="font-display text-3xl md:text-4xl text-primary">{t.about.statCountriesValue}</div>
                <div className="text-sm text-muted-foreground mt-1">{t.about.statCountriesLabel}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="py-24 md:py-32 bg-secondary/50 scroll-mt-24">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="reveal text-accent uppercase tracking-[0.25em] text-xs font-semibold mb-4">{t.offer.eyebrow}</p>
            <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">{t.offer.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.offer.items.map((f, i) => {
              const Icon = [GraduationCap, Languages, Home, HeartHandshake, ShieldCheck, Trophy][i];
              return (
                <div key={f.title} className="reveal group bg-card rounded-2xl p-8 border border-border hover:border-accent/60 hover:shadow-xl transition-all">
                  <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-2xl text-primary mb-2">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTERNAT */}
      <section id="internat" className="py-24 md:py-32 container-x scroll-mt-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <p className="reveal text-accent uppercase tracking-[0.25em] text-xs font-semibold mb-4">{t.dorm.eyebrow}</p>
            <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">{t.dorm.title}</h2>
            <p className="reveal mt-6 text-lg text-muted-foreground leading-relaxed">{t.dorm.lead}</p>
            <ul className="reveal mt-8 space-y-3">
              {t.dorm.bullets.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{p}</span>
                </li>
              ))}
            </ul>
            <div className="reveal flex gap-6 mt-10">
              {[
                { i: Home, t: t.dorm.badgeRooms },
                { i: Utensils, t: t.dorm.badgeFood },
                { i: Wifi, t: t.dorm.badgeWifi },
              ].map((b) => (
                <div key={b.t} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary">
                    <b.i className="w-6 h-6" />
                  </div>
                  <span className="text-xs text-muted-foreground mt-2">{b.t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-6 grid-rows-6 gap-3 h-[520px] md:h-[620px]">
            <img src={dorm1.url} alt="" className="reveal col-span-4 row-span-4 w-full h-full object-cover rounded-2xl shadow-lg" />
            <img src={dorm2.url} alt="" className="reveal col-span-2 row-span-2 w-full h-full object-cover rounded-2xl shadow-lg" />
            <img src={dorm3.url} alt="" className="reveal col-span-2 row-span-2 w-full h-full object-cover rounded-2xl shadow-lg" />
            <img src={dorm4.url} alt="" className="reveal col-span-6 row-span-2 w-full h-full object-cover rounded-2xl shadow-lg" />
          </div>
        </div>

        <div className="mt-16">
          <div className="reveal flex items-end justify-between mb-6">
            <h3 className="font-display text-2xl md:text-3xl text-primary">{t.dorm.galleryTitle}</h3>
            <span className="text-sm text-muted-foreground">{t.dorm.gallerySubtitle}</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[dorm5, dorm6, dorm7, dorm8, dorm9, dorm10].map((img, i) => (
              <img key={i} src={img.url} alt="" className="reveal w-full aspect-square object-cover rounded-xl shadow hover:scale-[1.03] transition-transform" />
            ))}
          </div>
        </div>
      </section>

      {/* OSIĄGNIĘCIA */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container-x relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="reveal text-accent uppercase tracking-[0.25em] text-xs font-semibold mb-4">{t.ach.eyebrow}</p>
              <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
                {t.ach.titlePre} <span className="italic text-accent">{t.ach.titleAccent}</span>.
              </h2>
              <p className="reveal mt-6 text-lg text-primary-foreground/80 leading-relaxed">{t.ach.lead}</p>
              <div className="reveal mt-8 inline-flex items-center gap-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-5 py-3">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <span className="text-sm">{t.ach.badge}</span>
              </div>
            </div>

            <div className="reveal grid grid-cols-2 gap-5">
              <img src={matura.url} alt="" className="w-full aspect-[3/4] object-cover rounded-2xl shadow-2xl" />
              <img src={certificate.url} alt="" className="w-full aspect-[3/4] object-cover rounded-2xl shadow-2xl mt-10" />
            </div>
          </div>
        </div>
      </section>

      {/* REKRUTACJA */}
      <section id="rekrutacja" className="py-24 md:py-32 container-x scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="reveal text-accent uppercase tracking-[0.25em] text-xs font-semibold mb-4">{t.rec.eyebrow}</p>
          <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">{t.rec.title}</h2>
          <p className="reveal mt-5 text-lg text-muted-foreground">{t.rec.lead}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <DocsCard title={t.rec.zasady} subtitle={t.rec.zasadySub} icon={ShieldCheck} highlight items={[zasadyDoc]} downloadLabel={t.rec.download} />
          <DocsCard title={t.rec.lo} subtitle={t.rec.loSub} icon={GraduationCap} items={loDocs} downloadLabel={t.rec.download} />
          <DocsCard title={t.rec.internat} subtitle={t.rec.internatSub} icon={Home} items={internatDocs} downloadLabel={t.rec.download} />
        </div>

        <div className="reveal mt-14 rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-10 md:p-14 text-primary-foreground flex flex-col md:flex-row items-start md:items-center gap-8 justify-between">
          <div>
            <h3 className="font-display text-3xl md:text-4xl">{t.rec.ctaTitle}</h3>
            <p className="mt-3 text-primary-foreground/85 max-w-xl">{t.rec.ctaLead}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full h-13 px-7">
              <a href="mailto:rekrutacja.kolegium@gmail.com">
                <Mail className="mr-2 w-5 h-5" /> rekrutacja.kolegium@gmail.com
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-13 px-7 bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <a href="tel:+48225592110">
                <Phone className="mr-2 w-5 h-5" /> +48 22 559 21 10
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="py-24 md:py-32 bg-secondary/50 scroll-mt-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="reveal text-accent uppercase tracking-[0.25em] text-xs font-semibold mb-4">{t.contact.eyebrow}</p>
            <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">{t.contact.title}</h2>
            <p className="reveal mt-6 text-lg text-muted-foreground">{t.contact.lead}</p>

            <div className="reveal mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-primary">{t.contact.addressLabel}</div>
                  <div className="text-muted-foreground">{t.contact.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-primary">{t.contact.phoneLabel}</div>
                  <a href="tel:+48225592110" className="text-muted-foreground hover:text-accent">22 559 21 10</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-primary">{t.contact.emailLabel}</div>
                  <a href="mailto:sekretariat@liceumpolonijne.edu.pl" className="text-muted-foreground hover:text-accent break-all">
                    sekretariat@liceumpolonijne.edu.pl
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal rounded-2xl overflow-hidden shadow-xl border border-border h-[480px]">
            <iframe
              title="Mapa — ul. Bobrowiecka 9, Warszawa"
              src="https://www.google.com/maps?q=ul.+Bobrowiecka+9,+Warszawa&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground/85 py-12">
        <div className="container-x grid gap-8 md:grid-cols-3 items-center">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <img src={logo.url} alt="" className="h-12 w-auto brightness-0 invert" />
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs uppercase tracking-[0.25em] text-primary-foreground/70">
              {t.footer.followUs}
            </span>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.url}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-primary-foreground/25 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <p className="text-sm text-center md:text-right">
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ---------- helper components ---------- */
function LanguageSwitcher({
  lang,
  onChange,
  ariaLabel,
}: {
  lang: Lang;
  onChange: (l: Lang) => void;
  ariaLabel: string;
}) {
  const current = languageOptions.find((o) => o.code === lang)!;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium hover:border-accent/60 transition-colors"
          aria-label={ariaLabel}
        >
          <span className="text-base leading-none">{current.flag}</span>
          <span className="hidden sm:inline">{current.code.toUpperCase()}</span>
          <ChevronDown className="w-3.5 h-3.5 opacity-60" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[180px]">
        {languageOptions.map((o) => (
          <DropdownMenuItem
            key={o.code}
            onClick={() => onChange(o.code)}
            className={`gap-2 cursor-pointer ${o.code === lang ? "font-semibold text-accent" : ""}`}
          >
            <span className="text-base leading-none">{o.flag}</span>
            <span>{o.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DocsCard({
  title,
  subtitle,
  icon: Icon,
  items,
  highlight,
  downloadLabel,
}: {
  title: string;
  subtitle: string;
  icon: typeof FileText;
  items: DocItem[];
  highlight?: boolean;
  downloadLabel: string;
}) {
  return (
    <div
      className={`reveal flex flex-col rounded-2xl border p-7 transition-all hover:shadow-xl ${
        highlight ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border hover:border-accent/60"
      }`}
    >
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
          highlight ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
        }`}
      >
        <Icon className="w-7 h-7" />
      </div>
      <h3 className={`font-display text-2xl mb-1 ${highlight ? "text-primary-foreground" : "text-primary"}`}>{title}</h3>
      <p className={`text-sm mb-6 ${highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{subtitle}</p>

      <ul className="space-y-2 flex-1">
        {items.map((item) => (
          <li
            key={item.name}
            className={`rounded-xl border p-3 ${
              highlight ? "border-primary-foreground/15 bg-primary-foreground/5" : "border-border bg-secondary/40"
            }`}
          >
            <div className="flex items-start gap-3">
              <FileText className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
              <div className="flex-1 min-w-0">
                <div className={`text-sm font-medium leading-snug ${highlight ? "text-primary-foreground" : "text-foreground"}`}>
                  {item.name}
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {item.files.map((f) => (
                    <a
                      key={f.kind + f.url}
                      href={f.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-semibold tracking-wide transition-colors ${
                        highlight ? "bg-accent text-accent-foreground hover:bg-accent/90" : "bg-primary text-primary-foreground hover:bg-primary/85"
                      }`}
                      aria-label={`${downloadLabel} ${item.name} (${f.kind})`}
                    >
                      <Download className="w-3 h-3" />
                      {f.kind}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
