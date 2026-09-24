// Timeline events, ordered chronologically. Add, remove, or reorder entries
// freely — index.html generates one slide per entry automatically, and
// alternates the text/icon side automatically based on position.
//
// - `id` must be unique and stable (don't reuse an old id for a new event) —
//   it's what lets each dot/branch animate consistently across slides.
// - `date` / `title` are plain text, shown as-is. `description` is
//   usually a plain string (one paragraph), but can instead be an array
//   of strings for a bulleted list — one line per entry — e.g.
//   description: ["Datadeling", "Infrastruktur"].
// - `icon` is a Lucide icon name (https://lucide.dev/icons) shown in the
//   colored badge, e.g. "lightbulb", "rocket", "globe". Optional — falls
//   back to a plain circle if omitted. Ignored if `image`, `images`, or
//   `badgeText` is set.
// - `image` is an optional path (relative to index.html) to a photo or logo,
//   shown at its own natural aspect ratio — capped by `badgeSize` (max
//   width, default 220px; height always follows naturally) — with a
//   border + rounded corners (`badgeRadius`, default 20px) drawn directly
//   around it. Nothing is ever cropped or stretched. Combine with
//   `badgePadding` (px, default 0) to inset the image from its own border,
//   like a picture mat — useful for a mark that needs breathing room, as
//   opposed to a photo/graphic that should sit edge-to-edge.
// - `images` is an optional array — an alternative to `image` for when you
//   want the badge to cycle through several photos as a small slideshow
//   (looping, crossfading) instead of one static photo. Use `image` for a
//   single photo and `images` for two or more; don't set both.
//   `badgeSize`/`badgeRadius` apply to every image in the set, but each
//   one still keeps its OWN natural size within that — a square logo and
//   a wide chart can sit in the same slideshow with neither squashed.
//   `imageCycleSeconds` (default 3) sets how long each image shows before
//   crossfading to the next.
//   Entries are a plain path string (no padding), or `{ src, padding }`
//   when that one slide needs its own inset.
// - `badgeRadius` (only with `image`/`images`) is the corner radius in px
//   (default 20). Use a large value like 999 for a fully round badge on a
//   roughly-square image — a true circle only if the image itself is
//   square, otherwise an oval, since the image is never cropped to fit.
// - `badgeSize` is an optional number (px). For `image`/`images`, this is
//   the max width. For `badgeText` or a plain icon, it overrides the
//   badge's default diameter.
// - `badgePadding` is an optional number (px) of inset between the badge
//   border and its content — only applies to `badgeText` or a plain icon
//   (an `image`/`images` badge has no padding; the border sits directly
//   against the photo, like a picture frame).
// - `badgeText` is an optional short string (an emoji, or a number/amount)
//   shown in the badge instead of an icon. Short content (like an emoji) is
//   rendered large; longer content (like "415 000 kr") is shown smaller so
//   it can wrap. Ignored if `image` is set.
// - `color` is an optional hex color for this event's dot/line/badge. If
//   omitted, the default accent color is used.
// - `milestones` is an optional array of strings — milestones reached in
//   this event, shown as a small, subtle flag-icon callout below the
//   description, visually distinct from regular body text.
// - `people` is an optional array of `{ name, image }` shown as a row of
//   small circled headshots under the description, for events where it's
//   worth showing who was actually involved. `image` paths are relative to
//   index.html, e.g. "images/people/faces/tor-erik-stakset.png" — tight,
//   pre-cropped square face shots for the full Kraftlauget team roster
//   live in images/people/faces/ (originals, for reference, in images/people/).
//
// This is a plain .js file (not .json) on purpose: opening index.html
// directly via file:// blocks fetch()/XHR of local files, but a classic
// <script src="data.js"> tag loads fine with no server needed.

window.TIMELINE_EVENTS = [
  {
    id: "event-0",
    date: "",
    title: "Hva er Helos?",
    description: "En digital helserådgiver som hjelper innbyggere med å forstå egne symptomer og få riktig hjelp raskere.",
    icon: "lightbulb"
  },
  {
    id: "event-14",
    date: "27. sep 2022",
    title: "NORCE tar kontakt",
    description: "NORCE tar kontakt og spør om Kraftlauget vil være med på en søknad til Forskningsrådet – tema: nyoppstått sykdom eller plager.",
    descriptions: [
      "Ingrid fra NORCE var initiativtaker, og fant både Kristiansand kommune og Kraftlauget",
      "Mål: skal svare bedre enn Google"
    ],
    image: "images/Ingrid.png"
  },
  // {
  //   id: "event-1",
  //   date: "Bakgrunn",
  //   title: "Hvorfor Helos?",
  //   description: "Press på helsevesenet.",
  //   icon: "flask-conical"
  // },
  {
    id: "event-2",
    date: "H1 2023",
    title: "Forprosjekt",
    description: "Finansiert av Forskningsrådets Pilot Helse-program, med NORCE, Kristiansand kommune, Kraftlauget og Tellu AS som partnere.",
    images: ["images/forprosjekt-mal.png"], //, "images/survey.png"],
    badgeSize: 320,
    imageCycleSeconds: 10,
    people: [
      { name: "Tor-Erik Stakset", image: "images/people/faces/tor-erik-stakset.png" },
      { name: "Oddmar Sandvik", image: "images/people/faces/oddmar-sandvik.png" },
      { name: "Kaisa K. Soleng", image: "images/people/faces/kaisa-k-soleng.png" }
    ]
  },
  {
    id: "event-300",
    date: "Mai 2023",
    title: "Gjennomfører spørreundersøkelse",
    description: "Får bekrefte på at prosjektet skal gjennomføres.",
    images: ["images/survey.png"], //, "images/survey.png"],
    badgeSize: 320,
    imageCycleSeconds: 10,
    people: [
      { name: "Tor-Erik Stakset", image: "images/people/faces/tor-erik-stakset.png" },
      { name: "Oddmar Sandvik", image: "images/people/faces/oddmar-sandvik.png" },
      { name: "Kaisa K. Soleng", image: "images/people/faces/kaisa-k-soleng.png" }
    ]
  },
  {
    id: "event-350",
    date: "H2 2023",
    title: "Signerer intensjonsavtale for konsortium",
    description: "Kvikna, Egde, Kristiansand kommune, Norsk Helsenett og NORCE går sammen som konsortium.",
    icon: "handshake",
    people: [
      { name: "Lars-harald Green", image: "images/people/faces/lars-harald-green.png" },
    ]
  },
  {
    id: "event-13",
    date: "2024",
    title: "Hovedprosjektet godkjent",
    description: "Søknaden om hovedprosjekt innvilges av Forskningsrådet, og legger grunnlaget for det toårige prosjektet. Av 40 søknader, blir prosjektet valgt ut som 1 av 4.",
    badgeText: "20 MNOK"
  },
  {
    id: "event-3",
    date: "15. aug 2024",
    title: "Prosjektet starter",
    description: "Hovedprosjektet starter som et toårig forsknings- og utviklingsprosjekt, med NORCE, Norsk helsenett, Kristiansand kommune og Kraftlauget som partnere. I tillegg til 2 underleverandører, Kvikna og Egde.",
    image: "images/kickoff.png",
    badgeSize: 320,
    people: [
      { name: "Helge Andre Sletten", image: "images/people/faces/helge-andre-sletten.png" },
      { name: "Tor-Erik Stakset", image: "images/people/faces/tor-erik-stakset.png" },
      { name: "Mari", image: "images/people/faces/mari.png" },
      { name: "Magne", image: "images/people/faces/magne-skjeret.png" },
      { name: "Ahl Nilsen", image: "images/people/faces/ahl-nilsen.png" },
      { name: "Kaisa K. Soleng", image: "images/people/faces/kaisa-k-soleng.png" },
      { name: "Oddmar Sandvik", image: "images/people/faces/oddmar-sandvik.png" },
    ]
  },
  {
    id: "event-400",
    date: "H2 2024",
    title: "Triage-økosystem",
    descriptions: ["Utviklingsmiljø", "Helse norge-innlogging", "Regelmotor", "Brukerreise", "MVP-krav"],
    image: "images/triage-økosystem.png",
    badgeSize: 420
  },
  // {
  //   id: "event-4",
  //   date: "Sep 2024",
  //   title: "Datadeling",
  //   description: "Prosjektet velger å ikke prioritere strukturert datadeling til journalsystemene i første versjon, for å holde farten oppe.",
  //   icon: "route"
  // },
  {
    id: "event-599",
    date: "Okt 2024",
    title: "Egde trekker seg",
    description: "Egde trekker seg fra prosjektet, noe som påvirker samarbeidsstrukturen og videre utvikling.",
    image: "images/egde-logo.svg",
    badgeSize: 280,
    badgePadding: 20
  },
   {
    id: "event-700",
    date: "Nov 2024",
    title: "Brukertest #1",
    description: "Her brukte vi AppFarm.",
    descriptions: [
      "Utfordring med datadeling – skaper for store forventninger hos brukerne",
      "Tidlig tilbakemelding er selve formålet"
    ],
    image: "images/første-prototype.png",
    people: [
      { name: "Mari", image: "images/people/faces/mari.png" }
    ],
    badgeSize: 260
  },
  {
    id: "event-5",
    date: "Des 2024",
    title: "Godkjent som leverandør Norsk Helsenett",
    description: "Norsk Helsenett godkjenner risikoanalysen – porten som åpner for videre utvikling i NHNs infrastruktur.",
    milestones: ["Godkjent som leverandør Norsk Helsenett"],
    image: "images/godkjent-leverandør.png",
    badgeSize: 280,
    people: [
      { name: "Magne Skjeret", image: "images/people/faces/magne-skjeret.png" },
      { name: "Ahl Nilsen", image: "images/people/faces/ahl-nilsen.png" },
      { name: "Roger Solsvik", image: "images/people/faces/roger-solsvik.png" }
    ]
  },
  {
    id: "event-500",
    date: "Des 2024",
    title: "Omforent med MVP-krav",
    description: "Prosjektet og interessenter blir enige om MVP-kravene for videre utvikling.",
    milestones: ["Omforent med MVP-krav"],
    image: "images/projektplan.png",
    badgeSize: 280,

  },
  {
    id: "event-666",
    date: "H1 2025",
    title: "Bygging av MVP",
    descriptions: ["Rådgivermodul", "Innbyggerløsning", "Regelmotor", "Brukertesting"],
    images: ["images/bygging-av-mvp.png", "images/helos-innbygger.png"],
    badgeSize: 400
  },
  {
    id: "event-800",
    date: "23. jan 2025",
    title: "Kvikna trekker seg",
    description: "Skulle være med på arbeidspakke om datadeling med EPJ.",
    images: ["images/kvikna-logo.png", "images/people/faces/lars-harald-green.png"],
    badgeSize: 260,
    badgeRadius: 999
  },
  {
    id: "event-801",
    date: "Mar 2025",
    title: "Teamet endres",
    description: "Ahl går ut i pappaperm, Amar slutter. Får inn 2 svensker fra Generate.",
    image: "images/generate-group-logo.png"
  },
  {
    id: "event-7777",
    date: "Apr 2025",
    title: "Brukertest #2",
    description: "Bruker fortsatt Appfarm-prototypen. Brukere rekruttert fra Norstat.",
    descriptions: [
      "Feedback på både innhold og datadeling, og at brukerne forstår hva som skjer ved deling"
    ],
    image: "images/brukertest-2-datadeling.png",
    badgeSize: 260
  },
  {
    id: "event-7778",
    date: "Mai 2025",
    title: "Brukertest #3",
    description: "Fokus på innganger. Bruker KI-verktøy for prototyping – KI-sprint.",
    images: [
      "images/brukertest-3-option1.png",
      "images/brukertest-3-option-2.png",
      "images/brukertest-3-option-3.png"
    ],
    badgeSize: 400
  },
  {
    id: "event-7",
    date: "Jun 2025",
    title: "Første ende-til-ende-integrasjon",
    description: "Medisinske eksperter kan starte for fullt å produsere innhold, og bruker også selve løsningen i testing. Erstatter Appfarm-prototypen.",
    image: "images/helos-and-heloshub.png",
    badgeSize: 400
  },
  {
    id: "event-8",
    date: "Sep 2025",
    title: "Logo + Branding + Navn",
    description: "Etablerer Helos som merkevare. Kjører brand-sprint, Julia hjelper til med illustrasjoner, og egen prosess for navn.",
    images: [
      { src: "images/helos-logo.png", padding: 24 },
      "images/helos-icons.png"
    ],
    badgeSize: 350,
    people: [
      { name: "Mari", image: "images/people/faces/mari.png" },
      { name: "Julia Rahlff", image: "images/people/faces/julia-rahlff.png" }
    ]
  },
  {
    id: "event-802",
    date: "Sep 2025",
    title: "Brukertest #4",
    description: "Her tester vi Helos for første gang med ny profil, med fokus på innganger. Brukere fra 16-58 år – 13 personer.",
    image: "images/brukertest-4-option-2.png",
    badgeSize: 240
  },
  {
    id: "event-804",
    date: "Okt 2025",
    title: "Datadeling",
    description: "Gjennomførte test av melding til Helsenorge.",
    descriptions: [
      "Teknisk sett – enkelt",
      "Juridisk sett – svært vanskelig",
      "Dataansvarlig?",
      "Behandleransvarlig?",
      "Kategoriseres det som helsehjelp?"
    ],
    icon: "share-2"
  },
  {
    id: "event-803",
    date: "Nov 2025",
    title: "Brukertest #5",
    description: "Her tester vi hele flyten, inkludert innlogging via Helsenorge. Starter med plakat fra Kristiansand kommune.",
    descriptions: [
      "Flere symptomer samtidig er en stor utfordring UX-messig"
    ],
    image: "images/brukertest-5-option1.png",
    badgeSize: 240
  },
  {
    id: "event-9",
    date: "Des 2025",
    title: "Medisinsk utstyr og CE-godkjenning",
    description: "Hvis vi skal kunne levere Helos i Norge må det CE-godkjennes. Startet regulatorisk sprint.",
    image: "images/ce-mark.png",
    badgeSize: 180,
    badgeRadius: 999
  },
  {
    id: "event-805",
    date: "H1 2026",
    title: "Helos som selskap",
    description: "Alle milepæler fullført.",
    descriptions: [
      "Prod-oppsett KI",
      "Støtte flere språk",
      "Kommersialiseringsstrategi",
      "Oppstart CE-prosess"
    ],
    image: "images/helos-hub.png",
    badgeSize: 400,
    people: [
      { name: "Øystein Malt", image: "images/people/faces/ystein-malt.png" }
    ]
  },
  {
    id: "event-11",
    date: "Feb 2026",
    title: "Brukertest #6",
    description: "Her tester vi spesifikt mot risiko for at bruker gjør feil som kan føre til helseskade.",
    image: "images/brukertest-4-option-1.png"
  },
  {
    id: "event-806",
    date: "Mar 2026",
    title: "Kommersialisering",
    descriptions: [
      "Etablere helos.no",
      "Møter med potensielle partnere",
      "Møter med Helsedirektoratet, kommuner",
      "Businesscase"
    ],
    image: "images/helos-no.png",
    people: [
      { name: "Geir-Magne Kvalsren", image: "images/people/faces/geir-magne-kvalsren.png" }
    ]
  },
  {
    id: "event-807",
    date: "Mai 2026",
    title: "Teamet nedskaleres",
    badgeSize: 400,
    image: "images/team-photo.png"
  },
  {
    id: "event-12",
    date: "Nå",
    title: "Der vi står nå",
    description: "Teamet jobber mot å gjøre Helos klar for CE-merking gjennom et notified body (teknisk kontrollorgan).",
    image: "images/qr.png",
    badgeSize: 400,
    people: [
      { name: "Helge Andre Sletten", image: "images/people/faces/helge-andre-sletten.png" },
      { name: "Tor-Erik Stakset", image: "images/people/faces/tor-erik-stakset.png" }
    ]
  }
];
