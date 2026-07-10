export type Lang = "pl" | "en" | "ru" | "uk" | "be" | "kk";

export const languageOptions: { code: Lang; label: string; flag: string }[] = [
  { code: "pl", label: "Polski", flag: "🇵🇱" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "uk", label: "Українська", flag: "🇺🇦" },
  { code: "be", label: "Беларуская", flag: "🇧🇾" },
  { code: "kk", label: "Қазақша", flag: "🇰🇿" },
];

type OfferItem = { title: string; desc: string };

export type Dict = {
  nav: {
    about: string;
    offer: string;
    dorm: string;
    recruitment: string;
    contact: string;
    archive: string;
    apply: string;
    langAria: string;
  };
  hero: {
    eyebrow: string;
    titlePre: string;
    titleAccent: string;
    lead: string;
    cta1: string;
    cta2: string;
    scrollAria: string;
  };
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    badgeNumber: string;
    badgeText: string;
    statYearsValue: string;
    statYearsLabel: string;
    statCountriesValue: string;
    statCountriesLabel: string;
  };
  offer: {
    eyebrow: string;
    title: string;
    items: [OfferItem, OfferItem, OfferItem, OfferItem, OfferItem, OfferItem];
  };
  dorm: {
    eyebrow: string;
    title: string;
    lead: string;
    bullets: string[];
    badgeRooms: string;
    badgeFood: string;
    badgeWifi: string;
    galleryTitle: string;
    gallerySubtitle: string;
  };
  ach: {
    eyebrow: string;
    titlePre: string;
    titleAccent: string;
    lead: string;
    badge: string;
  };
  rec: {
    eyebrow: string;
    title: string;
    lead: string;
    zasady: string;
    zasadySub: string;
    lo: string;
    loSub: string;
    internat: string;
    internatSub: string;
    download: string;
    ctaTitle: string;
    ctaLead: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    emailLabel: string;
  };
  archive: {
    eyebrow: string;
    title: string;
    lead: string;
    all: string;
    readMore: string;
    back: string;
  };
  footer: {
    rights: string;
    followUs: string;
  };
};


export const translations: Record<Lang, Dict> = {
  pl: {
    nav: { about: "O szkole", offer: "Oferta", dorm: "Internat", recruitment: "Rekrutacja", contact: "Kontakt", archive: "Z kalendarza szkolnego", apply: "Zapisz się", langAria: "Wybierz język" },
    hero: {
      eyebrow: "Liceum Polonijne · Warszawa · od 1991",
      titlePre: "Kolegium św.",
      titleAccent: "Stanisława Kostki",
      lead: "Polskie liceum z internatem w sercu Warszawy — dla młodzieży polskiego pochodzenia ze Wschodu. Solidna matura, opieka, wspólnota.",
      cta1: "Rekrutacja 2026/2027",
      cta2: "Zobacz internat",
      scrollAria: "Przewiń niżej",
    },
    about: {
      eyebrow: "O szkole",
      title: "Dom dla młodzieży\nz dala od domu",
      p1: "Liceum Ogólnokształcące Niepubliczne Kolegium św. Stanisława Kostki to szkoła w Warszawie, w której uczy się młodzież polskiego pochodzenia z Ukrainy, Białorusi, Kazachstanu i innych krajów Wschodu.",
      p2: "Łączymy mocny program akademicki przygotowujący do matury i studiów w Polsce z atmosferą wspólnoty, opartą o polskie tradycje, wartości chrześcijańskie i wzajemny szacunek.",
      p3: "Zapewniamy całodobowy internat, opiekę wychowawców i pomoc w aklimatyzacji w Warszawie — tak, aby nauka w nowym miejscu była przygodą, a nie wyzwaniem samotności.",
      p4: "Przyjmujemy zarówno młodzież polskiego pochodzenia, jak i obcokrajowców bez polskich korzeni — szkoła aktywnie stawia na integrację wszystkich uczniów i budowanie jednej, otwartej wspólnoty.",
      badgeNumber: "34",
      badgeText: "lata kształcenia młodzieży polonijnej",
      statYearsValue: "34+", statYearsLabel: "lat tradycji",
      statCountriesValue: "6+", statCountriesLabel: "krajów uczniów",
    },
    offer: {
      eyebrow: "Co oferujemy",
      title: "Wszystko, czego potrzebujesz, by się rozwijać",
      items: [
        { title: "Solidna matura", desc: "Program zorientowany na wynik — przygotowanie do matury i polskich uczelni państwowych." },
        { title: "Język polski", desc: "Intensywna nauka języka polskiego dla uczniów ze Wschodu — od podstaw do poziomu akademickiego." },
        { title: "Internat na miejscu", desc: "Komfortowe pokoje, wyżywienie i całodobowa opieka wychowawców tuż obok szkoły." },
        { title: "Wspólnota i opieka", desc: "Atmosfera rodzinna — kameralne klasy, indywidualne podejście, duchowość chrześcijańska." },
        { title: "Bezpieczeństwo", desc: "Certyfikat „Aktywni w bezpieczeństwie” — placówka wolna od przemocy i cyberprzemocy." },
        { title: "Stypendia i sukcesy", desc: "Nasi uczniowie zdobywają stypendia Prezesa Rady Ministrów i osiągają świetne wyniki na maturze." },
      ],
    },
    dorm: {
      eyebrow: "Internat",
      title: "Drugi dom — w samym sercu Warszawy",
      lead: "Nasz internat to ciepłe, komfortowe wnętrza, w których uczniowie czują się jak w domu. Mieszkanie tuż obok szkoły oznacza więcej czasu na naukę, przyjaźnie i odkrywanie Warszawy.",
      bullets: [
        "Komfortowe, jasne pokoje 2–4 osobowe",
        "Trzy posiłki dziennie — domowa kuchnia",
        "Całodobowa opieka wychowawców",
        "Pokoje nauki i świetlica",
        "Wi-Fi, pralnia, miejsce do wspólnych spotkań",
      ],
      badgeRooms: "Pokoje", badgeFood: "Wyżywienie", badgeWifi: "Wi-Fi",
      galleryTitle: "Pokoje i wnętrza",
      gallerySubtitle: "Galeria zdjęć z internatu",
    },
    ach: {
      eyebrow: "Osiągnięcia",
      titlePre: "Świetna forma absolwentów na",
      titleAccent: "Maturze 2025",
      lead: "Tegoroczni maturzyści Kolegium pokazali, że są w świetnej formie — wyniki znacznie powyżej średniej krajowej, miejsca na renomowanych uczelniach, stypendia Prezesa Rady Ministrów.",
      badge: "Certyfikat „Aktywni w bezpieczeństwie” 2025",
    },
    rec: {
      eyebrow: "Rekrutacja 2026/2027",
      title: "Dokumenty do pobrania",
      lead: "Pełny komplet oficjalnych dokumentów rekrutacyjnych Liceum Polonijnego — zasady przyjęcia, formularze dla liceum oraz dla internatu.",
      zasady: "Dokumenty szkolne", zasadySub: "2026/2027",
      lo: "Do pobrania — Liceum", loSub: "Liceum Ogólnokształcące",
      internat: "Do pobrania — Internat", internatSub: "Internat szkolny",
      download: "Pobierz",
      ctaTitle: "Zacznij rekrutację już dziś",
      ctaLead: "Skontaktuj się z sekretariatem — pomożemy Ci na każdym kroku, w języku polskim, ukraińskim lub rosyjskim.",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Odwiedź nas w Warszawie",
      lead: "Sekretariat czynny od poniedziałku do piątku w godz. 8.00–16.00. W środy sekretariat nie przyjmuje interesantów.",
      addressLabel: "Adres",
      address: "ul. Bobrowiecka 9 (budynek A), 00-728 Warszawa",
      phoneLabel: "Telefon", emailLabel: "E-mail",
    },
    archive: {
      eyebrow: "Z kalendarza szkolnego",
      title: "Z kalendarza szkolnego",
      lead: "Z życia szkoły, media o nas i wybrane wydarzenia z lat poprzednich — wszystko w jednym miejscu.",
      all: "Wszystkie",
      readMore: "Czytaj więcej",
      back: "Wróć na stronę główną",
    },
    footer: { rights: "Liceum Ogólnokształcące Niepubliczne Kolegium św. Stanisława Kostki — Warszawa", followUs: "Obserwuj nas" },
  },

  en: {
    nav: { about: "About", offer: "Programme", dorm: "Boarding", recruitment: "Admissions", contact: "Contact", archive: "From the school calendar", apply: "Apply", langAria: "Choose language" },
    hero: {
      eyebrow: "Polish High School · Warsaw · since 1991",
      titlePre: "Kolegium św.",
      titleAccent: "Stanisława Kostki",
      lead: "A Polish high school with a boarding house in the heart of Warsaw — for young people of Polish heritage from the East. A strong matura, real care, a true community.",
      cta1: "Admissions 2026/2027",
      cta2: "Tour the boarding house",
      scrollAria: "Scroll down",
    },
    about: {
      eyebrow: "About us",
      title: "A home for young people far from home",
      p1: "Liceum Ogólnokształcące Niepubliczne Kolegium św. Stanisława Kostki is an independent high school in Warsaw for young people of Polish heritage from Ukraine, Belarus, Kazakhstan and other countries to the east.",
      p2: "We combine a strong academic programme that prepares students for the matura exam and Polish universities with a warm community rooted in Polish tradition, Christian values and mutual respect.",
      p3: "Round-the-clock boarding, caring tutors and help settling into Warsaw mean studying abroad becomes an adventure — not a lonely challenge.",
      p4: "We welcome both youth of Polish heritage and foreign students with no Polish roots — the school actively focuses on integration, building one open community.",
      badgeNumber: "34",
      badgeText: "years of educating Polish heritage youth",
      statYearsValue: "34+", statYearsLabel: "years of tradition",
      statCountriesValue: "6+", statCountriesLabel: "countries of origin",
    },
    offer: {
      eyebrow: "What we offer",
      title: "Everything you need to grow",
      items: [
        { title: "A strong matura", desc: "An outcome-focused programme preparing students for the matura exam and Polish state universities." },
        { title: "Polish language", desc: "Intensive Polish for students from the East — from beginner level to academic fluency." },
        { title: "Boarding on site", desc: "Comfortable rooms, full board and 24/7 supervision right next to the school." },
        { title: "Community and care", desc: "A family atmosphere — small classes, individual attention, Christian spirituality." },
        { title: "Safety", desc: "Awarded the “Active in Safety” certificate — a school free of violence and cyber-bullying." },
        { title: "Scholarships and success", desc: "Our students win Prime Minister scholarships and achieve excellent matura results." },
      ],
    },
    dorm: {
      eyebrow: "Boarding house",
      title: "A second home — in the heart of Warsaw",
      lead: "Our boarding house offers warm, comfortable interiors where students feel at home. Living next door to the school means more time for study, friendships and discovering Warsaw.",
      bullets: [
        "Comfortable, bright rooms for 2–4 students",
        "Three home-cooked meals a day",
        "24/7 care from resident tutors",
        "Study rooms and a common room",
        "Wi-Fi, laundry and shared spaces",
      ],
      badgeRooms: "Rooms", badgeFood: "Meals", badgeWifi: "Wi-Fi",
      galleryTitle: "Rooms and interiors",
      gallerySubtitle: "Photo gallery from the boarding house",
    },
    ach: {
      eyebrow: "Achievements",
      titlePre: "Outstanding form of our graduates at the",
      titleAccent: "Matura 2025",
      lead: "This year's graduates showed they are in excellent shape — results well above the national average, places at top universities, Prime Minister scholarships.",
      badge: "“Active in Safety” certificate 2025",
    },
    rec: {
      eyebrow: "Admissions 2026/2027",
      title: "Documents to download",
      lead: "The full set of official admissions documents — admission rules, forms for the school and forms for the boarding house.",
      zasady: "School documents", zasadySub: "2026/2027",
      lo: "Downloads — School", loSub: "High school forms",
      internat: "Downloads — Boarding", internatSub: "Boarding house forms",
      download: "Download",
      ctaTitle: "Start your application today",
      ctaLead: "Contact our office — we will guide you through every step, in Polish, Ukrainian or Russian.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Visit us in Warsaw",
      lead: "The office is open Monday to Friday, 8:00–16:00. The office does not receive visitors on Wednesdays.",
      addressLabel: "Address",
      address: "ul. Bobrowiecka 9 (building A), 00-728 Warsaw, Poland",
      phoneLabel: "Phone", emailLabel: "E-mail",
    },
    archive: {
      eyebrow: "From the school calendar",
      title: "From the school calendar",
      lead: "School life, press about us and selected events from previous years — all in one place.",
      all: "All",
      readMore: "Read more",
      back: "Back to home",
    },
    footer: { rights: "Kolegium św. Stanisława Kostki Independent High School — Warsaw", followUs: "Follow us" },
  },

  ru: {
    nav: { about: "О школе", offer: "Программа", dorm: "Интернат", recruitment: "Поступление", contact: "Контакты", archive: "Из школьного календаря", apply: "Записаться", langAria: "Выбрать язык" },
    hero: {
      eyebrow: "Польский лицей · Варшава · с 1991",
      titlePre: "Коллегиум св.",
      titleAccent: "Станислава Костки",
      lead: "Польский лицей с интернатом в самом сердце Варшавы — для молодёжи польского происхождения с Востока. Серьёзная матура, забота, общность.",
      cta1: "Набор 2026/2027",
      cta2: "Посмотреть интернат",
      scrollAria: "Прокрутить вниз",
    },
    about: {
      eyebrow: "О школе",
      title: "Дом для тех, кто далеко от родного дома",
      p1: "Liceum Ogólnokształcące Niepubliczne Kolegium św. Stanisława Kostki — частный лицей в Варшаве, где учатся ребята польского происхождения из Украины, Беларуси, Казахстана и других стран Востока.",
      p2: "Мы соединяем сильную академическую программу подготовки к матуре и польским вузам с тёплой атмосферой общности, основанной на польских традициях, христианских ценностях и взаимном уважении.",
      p3: "Круглосуточный интернат, опека воспитателей и помощь в адаптации в Варшаве делают учёбу в новом городе приключением, а не испытанием одиночеством.",
      p4: "Мы принимаем как молодёжь польского происхождения, так и иностранцев без польских корней — школа активно делает акцент на интеграции и создании единой открытой общности.",
      badgeNumber: "34",
      badgeText: "года обучения польской молодёжи",
      statYearsValue: "34+", statYearsLabel: "лет традиций",
      statCountriesValue: "6+", statCountriesLabel: "стран учеников",
    },
    offer: {
      eyebrow: "Что мы предлагаем",
      title: "Всё, что нужно для развития",
      items: [
        { title: "Сильная матура", desc: "Программа, нацеленная на результат — подготовка к матуре и польским государственным вузам." },
        { title: "Польский язык", desc: "Интенсивный курс польского для учеников с Востока — от нуля до академического уровня." },
        { title: "Интернат на месте", desc: "Комфортные комнаты, питание и круглосуточная опека рядом со школой." },
        { title: "Общность и забота", desc: "Семейная атмосфера — небольшие классы, индивидуальный подход, христианская духовность." },
        { title: "Безопасность", desc: "Сертификат «Активные в безопасности» — школа без насилия и кибербуллинга." },
        { title: "Стипендии и успехи", desc: "Наши ученики получают стипендии Премьер-министра и отличные результаты на матуре." },
      ],
    },
    dorm: {
      eyebrow: "Интернат",
      title: "Второй дом — в самом сердце Варшавы",
      lead: "Наш интернат — это тёплые, уютные интерьеры, где ученики чувствуют себя как дома. Жить рядом со школой — значит больше времени для учёбы, дружбы и знакомства с Варшавой.",
      bullets: [
        "Комфортные светлые комнаты на 2–4 человека",
        "Трёхразовое питание — домашняя кухня",
        "Круглосуточная опека воспитателей",
        "Учебные комнаты и общая гостиная",
        "Wi-Fi, прачечная, место для встреч",
      ],
      badgeRooms: "Комнаты", badgeFood: "Питание", badgeWifi: "Wi-Fi",
      galleryTitle: "Комнаты и интерьеры",
      gallerySubtitle: "Фотогалерея интерната",
    },
    ach: {
      eyebrow: "Достижения",
      titlePre: "Отличная форма выпускников на",
      titleAccent: "Матуре 2025",
      lead: "Выпускники этого года показали отличную форму — результаты значительно выше среднего по стране, места в престижных вузах, стипендии Премьер-министра.",
      badge: "Сертификат «Активные в безопасности» 2025",
    },
    rec: {
      eyebrow: "Набор 2026/2027",
      title: "Документы для скачивания",
      lead: "Полный комплект официальных документов для поступления — правила приёма, формы для лицея и интерната.",
      zasady: "Школьные документы", zasadySub: "2026/2027",
      lo: "Скачать — Лицей", loSub: "Документы лицея",
      internat: "Скачать — Интернат", internatSub: "Документы интерната",
      download: "Скачать",
      ctaTitle: "Начните поступление уже сегодня",
      ctaLead: "Свяжитесь с секретариатом — мы поможем на каждом шагу на польском, украинском или русском языке.",
    },
    contact: {
      eyebrow: "Контакты",
      title: "Приезжайте к нам в Варшаву",
      lead: "Секретариат работает с понедельника по пятницу, 8:00–16:00. По средам секретариат не принимает посетителей.",
      addressLabel: "Адрес",
      address: "ул. Bobrowiecka 9 (корпус A), 00-728 Варшава",
      phoneLabel: "Телефон", emailLabel: "E-mail",
    },
    archive: {
      eyebrow: "Из школьного календаря",
      title: "Из школьного календаря",
      lead: "Из жизни школы, СМИ о нас и избранные события прошлых лет — всё в одном месте.",
      all: "Все",
      readMore: "Читать далее",
      back: "На главную",
    },
    footer: { rights: "Частный лицей Коллегиум св. Станислава Костки — Варшава", followUs: "Подписывайтесь" },
  },

  uk: {
    nav: { about: "Про школу", offer: "Програма", dorm: "Інтернат", recruitment: "Вступ", contact: "Контакти", archive: "Зі шкільного календаря", apply: "Подати заявку", langAria: "Обрати мову" },
    hero: {
      eyebrow: "Польський ліцей · Варшава · з 1991",
      titlePre: "Колегіум св.",
      titleAccent: "Станіслава Костки",
      lead: "Польський ліцей з інтернатом у самому серці Варшави — для молоді польського походження зі Сходу. Серйозна матура, турбота, спільнота.",
      cta1: "Набір 2026/2027",
      cta2: "Подивитися інтернат",
      scrollAria: "Прокрутити нижче",
    },
    about: {
      eyebrow: "Про школу",
      title: "Дім для молоді далеко від дому",
      p1: "Liceum Ogólnokształcące Niepubliczne Kolegium św. Stanisława Kostki — приватний ліцей у Варшаві, де навчається молодь польського походження з України, Білорусі, Казахстану та інших країн Сходу.",
      p2: "Ми поєднуємо сильну академічну програму підготовки до матури та польських вишів із теплою атмосферою спільноти, заснованою на польських традиціях, християнських цінностях і взаємній повазі.",
      p3: "Цілодобовий інтернат, опіка вихователів і допомога з адаптацією у Варшаві роблять навчання в новому місті пригодою, а не випробуванням самотністю.",
      p4: "Ми приймаємо як молодь польського походження, так і іноземців без польського коріння — школа активно робить акцент на інтеграції та створенні єдиної відкритої спільноти.",
      badgeNumber: "34",
      badgeText: "роки навчання польської молоді",
      statYearsValue: "34+", statYearsLabel: "років традицій",
      statCountriesValue: "6+", statCountriesLabel: "країн учнів",
    },
    offer: {
      eyebrow: "Що ми пропонуємо",
      title: "Усе, що потрібно для розвитку",
      items: [
        { title: "Сильна матура", desc: "Програма, орієнтована на результат — підготовка до матури та польських державних університетів." },
        { title: "Польська мова", desc: "Інтенсивний курс польської для учнів зі Сходу — від нуля до академічного рівня." },
        { title: "Інтернат на місці", desc: "Комфортні кімнати, харчування і цілодобова опіка поруч зі школою." },
        { title: "Спільнота і турбота", desc: "Сімейна атмосфера — невеликі класи, індивідуальний підхід, християнська духовність." },
        { title: "Безпека", desc: "Сертифікат «Активні в безпеці» — школа без насильства та кібербулінгу." },
        { title: "Стипендії та успіхи", desc: "Наші учні отримують стипендії Прем'єр-міністра і відмінні результати на матурі." },
      ],
    },
    dorm: {
      eyebrow: "Інтернат",
      title: "Другий дім — у самому серці Варшави",
      lead: "Наш інтернат — це теплі, затишні приміщення, де учні почуваються як удома. Жити поруч зі школою — це більше часу на навчання, дружбу й відкриття Варшави.",
      bullets: [
        "Комфортні світлі кімнати на 2–4 особи",
        "Триразове харчування — домашня кухня",
        "Цілодобова опіка вихователів",
        "Кімнати для навчання і вітальня",
        "Wi-Fi, пральня, місце для зустрічей",
      ],
      badgeRooms: "Кімнати", badgeFood: "Харчування", badgeWifi: "Wi-Fi",
      galleryTitle: "Кімнати та інтер'єри",
      gallerySubtitle: "Фотогалерея інтернату",
    },
    ach: {
      eyebrow: "Досягнення",
      titlePre: "Чудова форма випускників на",
      titleAccent: "Матурі 2025",
      lead: "Цьогорічні випускники показали відмінну форму — результати значно вище середнього по країні, місця у престижних вишах, стипендії Прем'єр-міністра.",
      badge: "Сертифікат «Активні в безпеці» 2025",
    },
    rec: {
      eyebrow: "Набір 2026/2027",
      title: "Документи для завантаження",
      lead: "Повний комплект офіційних документів для вступу — правила прийому, форми для ліцею та інтернату.",
      zasady: "Шкільні документи", zasadySub: "2026/2027",
      lo: "Завантажити — Ліцей", loSub: "Документи ліцею",
      internat: "Завантажити — Інтернат", internatSub: "Документи інтернату",
      download: "Завантажити",
      ctaTitle: "Розпочніть вступ уже сьогодні",
      ctaLead: "Зв'яжіться з секретаріатом — допоможемо на кожному кроці польською, українською чи російською.",
    },
    contact: {
      eyebrow: "Контакти",
      title: "Завітайте до нас у Варшаву",
      lead: "Секретаріат працює з понеділка по п'ятницю, 8:00–16:00. У середу секретаріат не приймає відвідувачів.",
      addressLabel: "Адреса",
      address: "вул. Bobrowiecka 9 (корпус A), 00-728 Варшава",
      phoneLabel: "Телефон", emailLabel: "E-mail",
    },
    archive: {
      eyebrow: "Зі шкільного календаря",
      title: "Зі шкільного календаря",
      lead: "Із життя школи, ЗМІ про нас і обрані події минулих років — усе в одному місці.",
      all: "Усі",
      readMore: "Читати далі",
      back: "На головну",
    },
    footer: { rights: "Приватний ліцей Колегіум св. Станіслава Костки — Варшава", followUs: "Слідкуйте за нами" },
  },

  be: {
    nav: { about: "Пра школу", offer: "Праграма", dorm: "Інтэрнат", recruitment: "Залічэнне", contact: "Кантакты", archive: "Са школьнага календара", apply: "Запісацца", langAria: "Выбраць мову" },
    hero: {
      eyebrow: "Польскі ліцэй · Варшава · з 1991",
      titlePre: "Калегіум св.",
      titleAccent: "Станіслава Косткі",
      lead: "Польскі ліцэй з інтэрнатам у самым сэрцы Варшавы — для моладзі польскага паходжання з Усходу. Сур'ёзная матура, апека, супольнасць.",
      cta1: "Набор 2026/2027",
      cta2: "Паглядзець інтэрнат",
      scrollAria: "Пракруціць ніжэй",
    },
    about: {
      eyebrow: "Пра школу",
      title: "Дом для моладзі далёка ад дому",
      p1: "Liceum Ogólnokształcące Niepubliczne Kolegium św. Stanisława Kostki — недзяржаўны ліцэй у Варшаве, дзе вучыцца моладзь польскага паходжання з Украіны, Беларусі, Казахстана і іншых краін Усходу.",
      p2: "Мы спалучаем моцную акадэмічную праграму падрыхтоўкі да матуры і польскіх ВНУ з цёплай атмасферай супольнасці, заснаванай на польскіх традыцыях, хрысціянскіх каштоўнасцях і ўзаемнай павазе.",
      p3: "Кругласутачны інтэрнат, апека выхавальнікаў і дапамога ў адаптацыі ў Варшаве робяць вучобу ў новым горадзе прыгодай, а не выпрабаваннем самотай.",
      p4: "Мы прымаем як моладзь польскага паходжання, так і замежнікаў без польскіх каранёў — школа актыўна робіць акцэнт на інтэграцыі і стварэнні адзінай адкрытай супольнасці.",
      badgeNumber: "34",
      badgeText: "гады навучання польскай моладзі",
      statYearsValue: "34+", statYearsLabel: "гадоў традыцый",
      statCountriesValue: "6+", statCountriesLabel: "краін навучэнцаў",
    },
    offer: {
      eyebrow: "Што мы прапаноўваем",
      title: "Усё, што патрэбна для развіцця",
      items: [
        { title: "Моцная матура", desc: "Праграма, арыентаваная на вынік — падрыхтоўка да матуры і польскіх дзяржаўных ВНУ." },
        { title: "Польская мова", desc: "Інтэнсіўны курс польскай для вучняў з Усходу — ад нуля да акадэмічнага ўзроўню." },
        { title: "Інтэрнат на месцы", desc: "Камфортныя пакоі, харчаванне і кругласутачная апека побач са школай." },
        { title: "Супольнасць і апека", desc: "Сямейная атмасфера — невялікія класы, індывідуальны падыход, хрысціянская духоўнасць." },
        { title: "Бяспека", desc: "Сертыфікат «Актыўныя ў бяспецы» — школа без гвалту і кіберцкавання." },
        { title: "Стыпендыі і поспехі", desc: "Нашы вучні атрымліваюць стыпендыі Прэм'ер-міністра і выдатныя вынікі на матуры." },
      ],
    },
    dorm: {
      eyebrow: "Інтэрнат",
      title: "Другі дом — у самым сэрцы Варшавы",
      lead: "Наш інтэрнат — гэта цёплыя, утульныя памяшканні, дзе вучні адчуваюць сябе як дома. Жыць побач са школай — больш часу для вучобы, сяброўства і знаёмства з Варшавай.",
      bullets: [
        "Камфортныя светлыя пакоі на 2–4 асобы",
        "Трохразовае харчаванне — хатняя кухня",
        "Кругласутачная апека выхавальнікаў",
        "Пакоі для вучобы і вольная зала",
        "Wi-Fi, пральня, месца для сустрэч",
      ],
      badgeRooms: "Пакоі", badgeFood: "Харчаванне", badgeWifi: "Wi-Fi",
      galleryTitle: "Пакоі і інтэр'еры",
      gallerySubtitle: "Фотагалерэя інтэрната",
    },
    ach: {
      eyebrow: "Дасягненні",
      titlePre: "Выдатная форма выпускнікоў на",
      titleAccent: "Матуры 2025",
      lead: "Сёлетнія выпускнікі паказалі выдатную форму — вынікі значна вышэй за сярэдні па краіне, месцы ў прэстыжных ВНУ, стыпендыі Прэм'ер-міністра.",
      badge: "Сертыфікат «Актыўныя ў бяспецы» 2025",
    },
    rec: {
      eyebrow: "Набор 2026/2027",
      title: "Дакументы для спампоўкі",
      lead: "Поўны камплект афіцыйных дакументаў для паступлення — правілы прыёму, формы для ліцэя і інтэрната.",
      zasady: "Школьныя дакументы", zasadySub: "2026/2027",
      lo: "Спампаваць — Ліцэй", loSub: "Дакументы ліцэя",
      internat: "Спампаваць — Інтэрнат", internatSub: "Дакументы інтэрната",
      download: "Спампаваць",
      ctaTitle: "Пачніце паступленне ўжо сёння",
      ctaLead: "Звяжыцеся з сакратарыятам — мы дапаможам на кожным кроку па-польску, па-ўкраінску ці па-руску.",
    },
    contact: {
      eyebrow: "Кантакты",
      title: "Завітайце да нас у Варшаву",
      lead: "Сакратарыят працуе з панядзелка па пятніцу, 8:00–16:00. У сераду сакратарыят не прымае наведвальнікаў.",
      addressLabel: "Адрас",
      address: "вул. Bobrowiecka 9 (корпус A), 00-728 Варшава",
      phoneLabel: "Тэлефон", emailLabel: "E-mail",
    },
    archive: {
      eyebrow: "Са школьнага календара",
      title: "Са школьнага календара",
      lead: "З жыцця школы, СМІ пра нас і выбраныя падзеі мінулых гадоў — усё ў адным месцы.",
      all: "Усе",
      readMore: "Чытаць далей",
      back: "На галоўную",
    },
    footer: { rights: "Недзяржаўны ліцэй Калегіум св. Станіслава Косткі — Варшава", followUs: "Сачыце за намі" },
  },

  kk: {
    nav: { about: "Мектеп туралы", offer: "Бағдарлама", dorm: "Интернат", recruitment: "Қабылдау", contact: "Байланыс", archive: "Мектеп күнтізбесінен", apply: "Тіркелу", langAria: "Тілді таңдау" },
    hero: {
      eyebrow: "Поляк лицейі · Варшава · 1991 жылдан",
      titlePre: "Әулие",
      titleAccent: "Станислав Костка коллегиумы",
      lead: "Варшаваның жүрегіндегі интернаты бар поляк лицейі — Шығыстан келген поляк тектес жастарға арналған. Берік матура, қамқорлық, шынайы қауымдастық.",
      cta1: "2026/2027 қабылдау",
      cta2: "Интернатты қарау",
      scrollAria: "Төмен жылжу",
    },
    about: {
      eyebrow: "Мектеп туралы",
      title: "Үйден алыс жастарға арналған үй",
      p1: "Liceum Ogólnokształcące Niepubliczne Kolegium św. Stanisława Kostki — Варшавадағы жеке лицей. Бұнда Украина, Беларусь, Қазақстан және басқа да Шығыс елдерінен келген поляк тектес жастар білім алады.",
      p2: "Біз матураға және Польша университеттеріне дайындайтын күшті академиялық бағдарламаны поляк дәстүрлеріне, христиандық құндылықтарға және өзара құрметке негізделген жылы қауымдастық атмосферасымен ұштастырамыз.",
      p3: "Тәулік бойғы интернат, тәрбиешілердің қамқорлығы және Варшавада бейімделуге көмек — жаңа қаладағы оқуды жалғыздық сынағы емес, шынайы саяхатқа айналдырады.",
      p4: "Біз поляк тектес жастарды да, поляк тамыры жоқ шетелдіктерді де қабылдаймыз — мектеп барлық оқушыларды біріктіруге және ашық біртұтас қауымдастық құруға ерекше мән береді.",
      badgeNumber: "34",
      badgeText: "жыл бойы поляк жастарын оқытамыз",
      statYearsValue: "34+", statYearsLabel: "жыл дәстүр",
      statCountriesValue: "6+", statCountriesLabel: "ел оқушылары",
    },
    offer: {
      eyebrow: "Біз ұсынатын мүмкіндіктер",
      title: "Дамуға қажеттінің бәрі осында",
      items: [
        { title: "Берік матура", desc: "Нәтижеге бағдарланған бағдарлама — матураға және Польшаның мемлекеттік университеттеріне дайындық." },
        { title: "Поляк тілі", desc: "Шығыс оқушыларына арналған поляк тілінің интенсивті курсы — нөлден академиялық деңгейге дейін." },
        { title: "Орнында интернат", desc: "Жайлы бөлмелер, тамақтану және мектептің іргесіндегі тәулік бойғы қамқорлық." },
        { title: "Қауымдастық пен қамқорлық", desc: "Отбасылық орта — шағын сыныптар, жеке көзқарас, христиандық рухани тәрбие." },
        { title: "Қауіпсіздік", desc: "«Қауіпсіздікте белсенді» сертификаты — зорлық-зомбылық пен кибербуллингтен ада мектеп." },
        { title: "Стипендиялар мен жетістіктер", desc: "Оқушыларымыз Премьер-Министр стипендияларын алып, матурада керемет нәтижелер көрсетеді." },
      ],
    },
    dorm: {
      eyebrow: "Интернат",
      title: "Екінші үй — Варшаваның жүрегінде",
      lead: "Интернатымыз — оқушылар өздерін үйдегідей сезінетін жылы, жайлы орын. Мектептің іргесінде тұру — оқуға, достыққа және Варшаваны тануға көп уақыт деген сөз.",
      bullets: [
        "2–4 адамдық жарық әрі жайлы бөлмелер",
        "Күніне үш мезгіл — үй тағамы",
        "Тәулік бойғы тәрбиеші қамқорлығы",
        "Оқу бөлмелері және ортақ зал",
        "Wi-Fi, кір жуатын бөлме, кездесу орны",
      ],
      badgeRooms: "Бөлмелер", badgeFood: "Тамақтану", badgeWifi: "Wi-Fi",
      galleryTitle: "Бөлмелер мен интерьерлер",
      gallerySubtitle: "Интернаттың фотогалереясы",
    },
    ach: {
      eyebrow: "Жетістіктер",
      titlePre: "Түлектеріміздің керемет деңгейі —",
      titleAccent: "Матура 2025",
      lead: "Биылғы түлектер тамаша форма көрсетті — нәтижелер еліміздің орташасынан әлдеқайда жоғары, беделді университеттерден орындар, Премьер-Министр стипендиялары.",
      badge: "«Қауіпсіздікте белсенді» сертификаты 2025",
    },
    rec: {
      eyebrow: "2026/2027 қабылдау",
      title: "Жүктеуге арналған құжаттар",
      lead: "Лицейге түсудің ресми құжаттарының толық жиынтығы — қабылдау ережелері, лицей мен интернатқа арналған формалар.",
      zasady: "Мектеп құжаттары", zasadySub: "2026/2027",
      lo: "Жүктеу — Лицей", loSub: "Лицей құжаттары",
      internat: "Жүктеу — Интернат", internatSub: "Интернат құжаттары",
      download: "Жүктеу",
      ctaTitle: "Бүгін-ақ қабылдауды бастаңыз",
      ctaLead: "Хатшылықпен байланысыңыз — поляк, украин немесе орыс тілдерінде әр қадамда көмектесеміз.",
    },
    contact: {
      eyebrow: "Байланыс",
      title: "Варшавада бізге келіңіз",
      lead: "Хатшылық дүйсенбі–жұма аралығында 8:00–16:00 жұмыс істейді. Сәрсенбі күні хатшылық қонақ қабылдамайды.",
      addressLabel: "Мекенжай",
      address: "Bobrowiecka к-сі 9 (А ғимараты), 00-728 Варшава",
      phoneLabel: "Телефон", emailLabel: "Электрондық пошта",
    },
    archive: {
      eyebrow: "Мектеп күнтізбесінен",
      title: "Мектеп күнтізбесінен",
      lead: "Мектеп өмірі, БАҚ біз туралы және өткен жылдардағы таңдамалы оқиғалар — барлығы бір жерде.",
      all: "Барлығы",
      readMore: "Толығырақ",
      back: "Басты бетке",
    },
    footer: { rights: "Әулие Станислав Костка коллегиумы — Варшава", followUs: "Бізді бақылаңыз" },
  },
};
