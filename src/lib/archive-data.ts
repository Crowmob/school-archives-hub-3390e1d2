export type ArchiveItem = {
  title: string;
  excerpt: string;
  image: string;
  url: string;
  date: string;
  category: "Z życia szkoły" | "Aktualności" | "Media o nas" | "O szkole";
};

const SRC = "https://liceumpolonijne.edu.pl";

export const archiveItems: ArchiveItem[] = [
  {
    title: "Rozpoczynamy rekrutację na rok szkolny 2026/2027",
    excerpt:
      "Już dzisiaj zapewnij sobie miejsce wśród uczniów Kolegium św. Stanisława Kostki.",
    image: `${SRC}/wp-content/uploads/2026/01/557639600_1404319648362901_3384299805604978105_n.jpg`,
    url: `${SRC}/rozpoczynamy-rekrutacje-na-rok-szkolny-2026-2027/`,
    date: "23 stycznia 2026",
    category: "Aktualności",
  },
  {
    title: "Aktywni w bezpieczeństwie",
    excerpt:
      "Nasze liceum otrzymało certyfikat potwierdzający przystąpienie do projektu „Aktywni w bezpieczeństwie”.",
    image: `${SRC}/wp-content/uploads/2025/12/cert-aktyw.jpg`,
    url: `${SRC}/certyfikat-aktywni-w-bezpieczenstwie/`,
    date: "17 grudnia 2025",
    category: "Aktualności",
  },
  {
    title: "Ślubowanie nowych uczniów",
    excerpt:
      "„Dbać o honor i dobre imię naszej Szkoły, szanować jej historię i tradycje…”",
    image: `${SRC}/wp-content/uploads/2025/09/Mqk1nWSE.jpg`,
    url: `${SRC}/slubowanie-nowych-uczniow-2/`,
    date: "27 września 2025",
    category: "Z życia szkoły",
  },
  {
    title: "Uroczyste rozpoczęcie roku szkolnego 2025/2026",
    excerpt:
      "Plan dnia 1 września: spotkanie klas z wychowawcami, wspólna msza święta i uroczyste rozpoczęcie roku.",
    image: `${SRC}/wp-content/uploads/2025/08/DSC02335aaa-scaled.jpg`,
    url: `${SRC}/uroczyste-rozpoczecie-roku-szkolnego-2025-2026/`,
    date: "28 sierpnia 2025",
    category: "Z życia szkoły",
  },
  {
    title: "Świetna forma absolwentów na Maturze 2025",
    excerpt:
      "Tegoroczni maturzyści Kolegium pokazali, że są w świetnej formie — wyniki znacznie powyżej średniej krajowej.",
    image: `${SRC}/wp-content/uploads/2025/07/Vita-2.jpg`,
    url: `${SRC}/matura-2025-absolwenci-w-swietnej-formie/`,
    date: "13 lipca 2025",
    category: "Aktualności",
  },
  {
    title: "Alisa Kostylieva — stypendium Prezesa Rady Ministrów",
    excerpt:
      "Alisa Kostylieva odebrała dyplom potwierdzający przyznanie stypendium Prezesa Rady Ministrów.",
    image: `${SRC}/wp-content/uploads/2025/02/alisa-sprm.jpg`,
    url: `${SRC}/alisa-kostylieva-otrzymuje-stypendium-prezesa-rady-ministrow/`,
    date: "luty 2025",
    category: "Media o nas",
  },
  {
    title: "Święty Mikołaj odwiedza naszą szkołę",
    excerpt: "Święty Mikołaj odwiedza naszą szkołę i spotyka grzecznych uczniów!",
    image: `${SRC}/wp-content/uploads/2024/12/469233974_1133735448754657_9025301075217030165_n.jpg`,
    url: `${SRC}/swiety-mikolaj-odwiedza-nasza-szkole/`,
    date: "21 grudnia 2024",
    category: "Z życia szkoły",
  },
  {
    title: "Święto Niepodległości 2024",
    excerpt:
      "11 listopada to dzień, w którym warto sobie coś mocno uświadomić — nasz wspaniały, wolny kraj.",
    image: `${SRC}/wp-content/uploads/2024/12/466346555_1113734974088038_8114497182913591082_n-e1734802435249.jpg`,
    url: `${SRC}/swieto-niepodleglosci-2024/`,
    date: "11 listopada 2024",
    category: "Z życia szkoły",
  },
];

export const archiveCategories: ArchiveItem["category"][] = [
  "Aktualności",
  "Z życia szkoły",
  "Media o nas",
];
