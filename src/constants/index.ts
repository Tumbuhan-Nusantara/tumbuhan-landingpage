import { CirclePile, Landmark, NotebookText, Users } from "lucide-react";
import {
  ArticleGroup,
  LandingMenuType,
  LogoContacs,
  SejarahType,
  VisiMisiType,
} from "../types";

export const LandingMenu: LandingMenuType[] = [
  { id: 1, title: "home", path: "/" },
  {
    id: 2,
    title: "profile",
    items: [
      { id: 1, sub: "history", path:"/profile/sejarah" },
      { id: 2, sub: "team" },
      { id: 3, sub: "visi", path: "/profile/visi-misi" },
      { id: 4, sub: "structure" },
    ],
  },
  {
    id: 3,
    title: "activity",
    path: "/kegiatan"
  },
  { id: 5, title: "news" },
  { id: 6, title: "contact" },
];

export const Contacts: LogoContacs[] = [
  { id: 1, icon: "/contacts/email.png", alt: "Email YTAN" },
  { id: 2, icon: "/contacts/facebook.png", alt: "Facebook YTAN" },
  { id: 3, icon: "/contacts/twitter.png", alt: "X YTAN" },
  { id: 4, icon: "/contacts/instagram.png", alt: "Instagram YTAN" },
  { id: 5, icon: "/contacts/linkedin.png", alt: "Linkedin YTAN" },
];

export const Articles: ArticleGroup[] = [
  {
    year: 2026,
    items: [
      {
        id: 1,
        title:
          "Homalomena bungamerah (Araceae), a new species from Northern Sumatra, Indonesia.",
        desc: "Mustaqim WA, Irsyam ASD, Pratama MA, Surbakti I, Hariri MR. 2026. Homalomena bungamerah (Araceae), a new species from Northern Sumatra, Indonesia.Taiwania 71(2): 209‒212.",
        src: "https://taiwania.ntu.edu.tw/abstract/2160",
      },
      {
        id: 2,
        title:
          "Population Assessment, Updated Description, and Prediction of Habitat Distribution for the Sumatran Endemic Tree Magnolia calophylloides (Magnoliaceae).",
        desc: "Rinandio DS, Iryadi R, Arico Z, Primananda E, Mustaqim WA, Linsky J, Robiansyah I. 2026. Population Assessment, Updated Description, and Prediction of Habitat Distribution for the Sumatran Endemic Tree Magnolia calophylloides (Magnoliaceae).Tropical Conservation Science. 2026: art. 19.",
        src: "https://journals.sagepub.com/doi/10.1177/19400829261426303",
      },
      {
        id: 3,
        title:
          "Complete chloroplast genome of the underutilized legume jack bean (Canavalia ensiformis, Fabaceae) reveals genetic makeup, mutational hotspots, and phylogenetic relationships.",
        desc: "Nikmah IA, Mustaqim WA, Ardi WH, Rugayah, Akbar MR, Satrio RD. 2026. Complete chloroplast genome of the underutilized legume jack bean (Canavalia ensiformis, Fabaceae) reveals genetic makeup, mutational hotspots, and phylogenetic relationships. Genetic Resources Crop Evol 73: art. 114.",
        src: "https://link.springer.com/article/10.1007/s10722-026-02739-2",
      },
      {
        id: 4,
        title:
          "Checklist of the flora of Kabaena Island, Sulawesi.",
        desc: "Arman, Mustaqim WA. 2026. Checklist of the flora of Kabaena Island, Sulawesi.",
        src: "-",
      },
      {
        id: 5,
        title:
          "A new species Cyrtandra sect. Whitia (Gesneriaceae) from Sulawesi, Indonesia.",
        desc: "Ahmad RPP, Atria M, Kartonegoro A. 2026. A new species Cyrtandra sect. Whitia (Gesneriaceae) from Sulawesi, Indonesia. Phytotaxa 747 (2): 215–221.",
        src: "https://phytotaxa.mapress.com/pt/article/view/phytotaxa.747.2.7",
      },
      {
        id: 6,
        title:
          "Hoya bukitrayaensis (Apocynaceae), a new species from Kalimantan, Indonesia.",
        desc: "Ahmad RPP, Yudistira YR, Suriansyah B, Marsaidi D, Randi A, Mustaqim WA. 2026. Hoya bukitrayaensis (Apocynaceae), a new species from Kalimantan, Indonesia. Telopea 30: 81–85.",
        src: "-",
      },
      {
        id: 7,
        title:
          "Rhododendron yombuwurii (Ericaceae), a new orange-flowered species of subgenus Vireya from Central Sulawesi, Indonesia.",
        desc: "Hutabarat PWK, Zulfadli, Bandjolu KP, Basrul, Hariri MR, Sentama A, Larekeng SH. 2026. Rhododendron yombuwurii (Ericaceae), a new orange-flowered species of subgenus Vireya from Central Sulawesi, Indonesia. Taiwania 71(2): 277‒283. ",
        src: "https://taiwania.ntu.edu.tw/abstract/2170",
      },
      {
        id: 8,
        title:
          "Two new huge-leaved Begonia (Begoniaceae) from Betung Kerihun National Park, West Kalimantan, Indonesia.",
        desc: "Randi A, Sitepu BS, Junaidi, Hughes M. 2026. Two new huge-leaved Begonia (Begoniaceae) from Betung Kerihun National Park, West Kalimantan, Indonesia. Taiwania 71(2): 297‒302.",
        src: "https://taiwania.ntu.edu.tw/abstract/2172",
      },
      {
        id: 9,
        title:
          "Taxonomic notes on the Chamaecladon clade of Homalomena (Araceae) in Tapanuli, Sumatera, with the description of a new species.",
        desc: "Yudistira YR, Hase K, Weesssies N. 2026. Taxonomic notes on the Chamaecladon clade of Homalomena (Araceae) in Tapanuli, Sumatera, with the description of a new species. Phytotaxa 751(1): 043–049.",
        src: "https://phytotaxa.mapress.com/pt/article/view/phytotaxa.751.1.5",
      },
    ],
  },
  {
    year: 2025,
    items: [
      {
        id: 1,
        title:
          "Taxonomic and conservation implications of the rediscovery of Racemobambos ceramica (Poaceae, Bambusoideae), an endemic bamboo of Seram Island, Indonesia, after a century.",
        desc: "Damayanto IPGP, Asmarayani R, Ahmad RPP, Nuru LA, Yanuarsyah I, Ritonga MA. 2025. Taxonomic and conservation implications of the rediscovery of Racemobambos ceramica (Poaceae, Bambusoideae), an endemic bamboo of Seram Island, Indonesia, after a century. Journal for Nature Conservation Vol. 87.",
        src: "https://www.sciencedirect.com/science/article/abs/pii/S1617138125001773?via%3Dihub",
      },
      {
        id: 2,
        title:
          "Two new species of Begonia (Begoniaceae) from Bukit Baka Bukit Raya National Park, Kalimantan, Indonesia.",
        desc: "Randi A, Mustaqim WA, Kadhafi AM, Nursub’I F, Ardi WH. 2025.Two new species of Begonia (Begoniaceae) from Bukit Baka Bukit Raya National Park, Kalimantan, Indonesia. Phytotaxa 704 (2): 099–105.",
        src: "https://phytotaxa.mapress.com/pt/article/view/phytotaxa.704.2.1",
      },
      {
        id: 3,
        title:
          "Begonia elegantifolia (Begoniaceae), a new species from northern Sumatra, Indonesia.",
        desc: "Ritonga YE, Girmansyah D, Mustaqim WA. 2025. Begonia elegantifolia (Begoniaceae), a new species from northern Sumatra, Indonesia. Phytotaxa 720 (1): 087–092.",
        src: "https://phytotaxa.mapress.com/pt/article/view/phytotaxa.720.1.9",
      },
      {
        id: 4,
        title:
          "Contributions to the orchid flora of Kalimantan II: A new Bulbophyllum sect. Macrocaulia from Mount Bukit Raya, Indonesia.",
        desc: "Yudistira YR, Randi A, Joharudin D, Mustaqim WA. 2025. Contributions to the orchid flora of Kalimantan II: A new Bulbophyllum sect. Macrocaulia from Mount Bukit Raya, Indonesia. Phytotaxa 700 (3): 251–256.",
        src: "https://phytotaxa.mapress.com/pt/article/view/phytotaxa.700.3.1",
      },
      {
        id: 5,
        title:
          "The revision of the genus Pterisanthes (Vitaceae) in Sumatra.",
        desc: "Trias-Blasi A, Damit A, Wambrauw HL, Ahmad RPP, Warseno T, Hussin Z. 2025.The revision of the genus Pterisanthes (Vitaceae) in Sumatra. Reinwardtia Vol. 24. No. 2. pp: 161‒184.",
        src: "https://biologyjournal.brin.go.id/index.php/reinwardtia/article/view/622",
      },
      {
        id: 6,
        title:
          "Bulbophyllum sandfordiorum (Orchidaceae), a new species of Bulbophyllum section Papulipetalum from West Papua Province, Indonesia.",
        desc: "Saputra R, Schuiteman A, Wanma JF, Jennings L, Cahyo YID, Haryanto T, Putri BF, Heatubun CD. 2025. Bulbophyllum sandfordiorum (Orchidaceae), a new species of Bulbophyllum section Papulipetalum from West Papua Province, Indonesia. Kew Bull 80, 397–402.",
        src: "https://link.springer.com/article/10.1007/s12225-025-10259-y",
      },
      {
        id: 7,
        title:
          "Bulbophyllum halmaherae (Orchidaceae), an unusual species of section Polymeres from Halmahera, Maluku, Indonesia.",
        desc: "Mustaqim WA, Yudistira YR, Jacop S, Schuiteman A. 2025. Bulbophyllum halmaherae (Orchidaceae), an unusual species of section Polymeres from Halmahera, Maluku, Indonesia. Kew Bulletin 80:197–201.",
        src: "https://link.springer.com/article/10.1007/s12225-024-10242-z",
      },
      {
        id: 8,
        title:
          "A new species of Gastrodia (Orchidaceae: Epidendroideae) from East Java, Indonesia.",
        desc: "Dwitara GAC, Al Fatih M, Yudistira YR, Mustaqim WA. 2025. A new species of Gastrodia (Orchidaceae: Epidendroideae) from East Java, Indonesia. Telopea 29: 285–291.",
        src: "-",
      },
      {
        id: 9,
        title:
          "Flora of Gayo Plateau II: Corybas gayoensis (Orchidaceae), a new narrow endemic orchid from Sumatra.",
        desc: "Mustaqim WA, Arico Z, Silviana A, Afriyani L, Yudistira YR, Victoriano M. 2025. Flora of Gayo Plateau II: Corybas gayoensis (Orchidaceae), a new narrow endemic orchid from Sumatra. Phytotaxa 726(1):53-58.",
        src: "https://phytotaxa.mapress.com/pt/article/view/phytotaxa.726.1.5",
      },
    ],
  },
  {
    year: 2024,
    items: [
      {
        id: 1,
        title:
          "Rescuing the rare monotypic Aetoxylon sympetalum from remnant forests in Kapuas Hulu, West Kalimantan.",
        desc: "Kusumadewi Y, Widodo RMW, Rahmawati K, Pratama BA, Gustamansyah, Suriyanto I, Randi A, Petruss S, Rachmat HH. 2024. Rescuing the rare monotypic Aetoxylon sympetalum from remnant forests in Kapuas Hulu, West Kalimantan.Oryx 58(1), 9–14.",
        src: "https://www.cambridge.org/core/journals/oryx/article/endemic-crabs-from-ancient-sulawesi-lakes-under-double-threat/E14DEA8B98C1FB10CE4767513F1C35CE",
      },
      {
        id: 2,
        title:
          "Benefits of tropical peatland rewetting for subsidence reduction and forest regrowth: results from a large-scale restoration trial.",
        desc: "Hooijer A, Vernimmen R, Mulyadi D, Triantomo V, Hamdani , Lampela M, Randi A, Page SE, Doloksaribu J, Setiawan I, Suratmanto B, Swarup S. 2024. Benefits of tropical peatland rewetting for subsidence reduction and forest regrowth: results from a large-scale restoration trial.Scientific Reports 14(1).",
        src: "https://www.nature.com/articles/s41598-024-60462-3",
      },
      {
        id: 3,
        title:
          "Sistematika Tumbuhan.",
        desc: "Mustaqim WA, Nikmah IA. 2024. Sistematika Tumbuhan. UI Publishing.",
        src: "-",
      },
      {
        id: 4,
        title:
          "Taxonomic placement and updated description of the recently recollected Vatica cauliflora (Dipterocarpaceae).",
        desc: "Primananda E, Rinandio DS, Mustaqim WA, Robiansyah I, Randi A. 2024. Taxonomic placement and updated description of the recently recollected Vatica cauliflora (Dipterocarpaceae). Flora Volume 316.",
        src: "https://www.sciencedirect.com/science/article/abs/pii/S0367253024000926?via%3Dihub",
      },
      {
        id: 5,
        title:
          "The first record of Bulbophyllum sect. Monomeria (Orchidaceae) from Indonesia.",
        desc: "Mustaqim WA, Yudistira YR, Arico Z, Andini WR, Pratiwi P, Schuiteman A. 2024. The first record of Bulbophyllum sect. Monomeria (Orchidaceae) from Indonesia. Telopea 27: 47–51.",
        src: "https://openjournals.library.sydney.edu.au/TEL/article/view/17950",
      },
      {
        id: 6,
        title:
          "A New Species of Coelogyne (Orchidaceae) from Seram Island, Maluku, Indonesia.",
        desc: "Yudistira YR, Schuiteman A, Champion JK. 2024. A New Species of Coelogyne (Orchidaceae) from Seram Island, Maluku, Indonesia. Malesian Orchid Journal Vol. 27 (2024): 11–16.",
        src: "-",
      },
      {
        id: 7,
        title:
          "A New Species of Coelogyne (Orchidaceae) from Aceh, Sumatra, Indonesia.",
        desc: "Yudistira YR, Schuiteman A, Champion JK. 2024. A New Species of Coelogyne (Orchidaceae) from Aceh, Sumatra, Indonesia. Malesian Orchid Journal Vol. 27 (2024): 5–10.",
        src: "-",
      },
      {
        id: 8,
        title:
          "A new species of Bulbophyllum (Orchidaceae: Bulbophyllinae) section Macrocaulia from Sumatra, Indonesia.",
        desc: "Yudistira YR, Candra R, Mustaqim WA. 2024. A new species of Bulbophyllum (Orchidaceae: Bulbophyllinae) section Macrocaulia from Sumatra, Indonesia. Gardens’ Bulletin Singapore 76(2): 251–258.",
        src: "https://www.nparks.gov.sg/sbg/research/publications/gardens'-bulletin-singapore/-/media/sbg/gardens-bulletin/gbs_76_02_y2024/76_02_07_y2024_v76p2_gbs_pg251.pdf",
      },
      {
        id: 9,
        title:
          "Taxonomic placement and updated description of the recently recollected Vatica cauliflora (Dipterocarpaceae).",
        desc: "Primananda E, Rinandio DS, Mustaqim WA, Robiansyah I, Randi A. 2024. Taxonomic placement and updated description of the recently recollected Vatica cauliflora (Dipterocarpaceae). Flora 316: art. 152539, pp. 1-6.",
        src: "https://www.sciencedirect.com/science/article/abs/pii/S0367253024000926",
      },
      {
        id: 10,
        title:
          "The first record of Bulbophyllum sect. Monomeria (Orchidaceae) from Indonesia.",
        desc: "Mustaqim WA, Yudistira YR, Arico Z, Andini WR, Pratiwi D, Schuiteman A. 2024. The first record of Bulbophyllum sect. Monomeria (Orchidaceae) from Indonesia. Telopea 27: 47-51.",
        src: "https://openjournals.library.sydney.edu.au/TEL/article/view/17950",
      },
      {
        id: 11,
        title:
          "Contributions to the orchid flora of Kalimantan I: A new species and a new country record of Bulbophyllum (Orchidaceae).",
        desc: "Yudistira YR, Ahmad RPP, Adirahmanta SN, Mustaqim WA, Randi A. 2024. Contributions to the orchid flora of Kalimantan I: A new species and a new country record of Bulbophyllum (Orchidaceae). Taiwania 69(3): 386-392.",
        src: "https://taiwania.ntu.edu.tw/abstract/2015",
      },
      {
        id: 12,
        title:
          "Corybas geminigibbus, a new addition to the orchid flora of Sumatra.",
        desc: "Mustaqim WA, Arico ZA, Ginting RB, Rahayu T, Yudistira YR. 2024. Corybas geminigibbus, a new addition to the orchid flora of Sumatra. Lankesteriana 24(3): 239–244.",
        src: "https://www.lankesteriana.org/LankesterianaJournal/24(3)/03.%20Mustaqim%20et%20al%202024.pdf",
      },
      {
        id: 13,
        title:
          "New distribution records and range extensions for three Sumatran orchid species in Kalimantan, Borneo, Indonesia.",
        desc: "Zainudin, Idris AR, Yudistira YR. 2024. New distribution records and range extensions for three Sumatran orchid species in Kalimantan, Borneo, Indonesia. Lankesteriana 24(3): 267–276.",
        src: "https://lankesteriana.org/LankesterianaJournal/24(3)/06.%20Zainudin%20et%20al%202024.pdf",
      },
    ],
  },
  {
    year: 2023,
    items: [
      {
        id: 1,
        title:
          "A new species of Trichoglottis (Orchidaceae) from eastern Kalimantan, Indonesia.",
        desc: "Yudistira YR, Idris AR, Mustaqim WA. 2023. A new species of Trichoglottis (Orchidaceae) from eastern Kalimantan, Indonesia. Telopea 26: 127-131.",
        src: "https://openjournals.library.sydney.edu.au/TEL/article/view/17325",
      },
      {
        id: 2,
        title:
          "Hanguana sitinurbayai (Hanguanaceae), a new species from mossy montane forest of Gunung Nyiut Penrissen, West Kalimantan, Indonesia",
        desc: "Randi A, Widodo RMW, Adirahmanta SN. 2023. Hanguana sitinurbayai (Hanguanaceae), a new species from mossy montane forest of Gunung Nyiut Penrissen, West Kalimantan, Indonesia. Phytotaxa 606 (3): 231–236.",
        src: "https://phytotaxa.mapress.com/pt/article/view/phytotaxa.606.3.7",
      },
      {
        id: 3,
        title:
          "Notes on Syzygium setosum (Myrtaceae), a rare and endangered peat swamp tree in Southeast Asia: lectotypification, conservation status and a new record in Sumatra.",
        desc: "Mustaqim WA, Randi A, Wijedasa LS, Widodo P, Rivers M, Lucas E, Low YW. 2023. Notes on Syzygium setosum (Myrtaceae), a rare and endangered peat swamp tree in Southeast Asia: lectotypification, conservation status and a new record in Sumatra. Candollea 78(2): 153-159.",
        src: "https://polite-rock-04df9d810.2.azurestaticapps.net/Bioone/index.html",
      },
    ],
  }
];

export const SejarahItem: SejarahType[] = [
  {id: 1, title: "Sejarah", src: Landmark },
  {id: 2, title: "Tim YTAN", src: Users },
  {id: 3, title: "Visi, Misi dan Tujuan", src: NotebookText },
  {id: 4, title: "Struktur Organisasi", src: CirclePile},
]

export const VisiMisiItem: VisiMisiType[] = [
  { id: 1, desc: "misi1", src: "/profile/visimisi/wheat.png" },
  { id: 2, desc: "misi2", src: "/profile/visimisi/deal.png" },
  { id: 3, desc: "misi3", src: "/profile/visimisi/replant.png" },
  { id: 4, desc: "misi4", src: "/profile/visimisi/overpopulation.png" },
  
];