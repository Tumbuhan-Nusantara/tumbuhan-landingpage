import {
  BookOpen,
  CirclePile,
  Database,
  Dna,
  FileStack,
  House,
  Landmark,
  Leaf,
  Library,
  Mails,
  Microscope,
  Newspaper,
  NotebookText,
  Sprout,
  SquareChartGantt,
  UserRoundCog,
  Users,
} from "lucide-react";
import {
  DashMain,
  FocusArea,
  LandingMenuType,
  LogoContacs,
  SejarahType,
  SidebarType,
  VisiMisiType,
} from "../types";

export const LandingMenu: LandingMenuType[] = [
  { id: 1, title: "home", path: "/" },
  {
    id: 2,
    title: "profile",
    items: [
      { id: 1, sub: "history", path: "/profile/sejarah" },
      // { id: 2, sub: "team", path: "/profile/tim-ytan" },
      { id: 3, sub: "visi", path: "/profile/visi-misi" },
      // { id: 4, sub: "doc", path: "/profile/dokumen" },
    ],
  },
  {
    id: 3,
    title: "activity",
    path: "/kegiatan",
  },
  { id: 5, title: "news", path: "/berita" },
];

export const Contacts: LogoContacs[] = [
  { id: 1, icon: "/contacts/email.png", alt: "Email YTAN" },
  { id: 2, icon: "/contacts/facebook.png", alt: "Facebook YTAN" },
  { id: 3, icon: "/contacts/twitter.png", alt: "X YTAN" },
  { id: 4, icon: "/contacts/instagram.png", alt: "Instagram YTAN" },
  { id: 5, icon: "/contacts/linkedin.png", alt: "Linkedin YTAN" },
];


export const SejarahItem: SejarahType[] = [
  { id: 1, title: "Sejarah", src: Landmark },
  { id: 2, title: "Tim YTAN", src: Users },
  { id: 3, title: "Visi, Misi dan Tujuan", src: NotebookText },
  { id: 4, title: "Struktur Organisasi", src: CirclePile },
];

export const VisiMisiItem: VisiMisiType[] = [
  { id: 1, desc: "misi1", src: "/profile/visimisi/wheat.png" },
  { id: 2, desc: "misi2", src: "/profile/visimisi/deal.png" },
  { id: 3, desc: "misi3", src: "/profile/visimisi/replant.png" },
  { id: 4, desc: "misi4", src: "/profile/visimisi/overpopulation.png" },
];

export const SidebarItems: SidebarType[] = [
  {
    id: 1,
    title: "beranda",
    icon: House,
    isActive: true,
    items: [{ id: 1, sub: "hero", icon: House, path: "/admin/dashboard/hero" , roles: ["admin", "user"]}],
  },
  {
    id: 2,
    title: "user",
    icon: UserRoundCog,
    isActive: true,
    items: [{ id: 1, sub: "role", icon: UserRoundCog, path: "/admin/dashboard/user" , roles: ["admin"] }],
  },
  {
    id: 3,
    title: "dampak",
    icon: SquareChartGantt,
    isActive: true,
    items: [{ id: 1, sub: "dampak", icon: SquareChartGantt, path: "/admin/dashboard/dampak" , roles: ["admin", "user"] }],
  },
  {
    id: 4,
    title: "profile",
    isActive: true,
    icon: Users,
    items: [
      { id: 1, sub: "tim", icon: Users, path: "/admin/dashboard/our-team"  , roles: ["admin", "user"]},
      { id: 2, sub: "vismis", icon: FileStack, path: "/admin/dashboard/visi-misi" , roles: ["admin", "user"] },
    ],
  },
  {
    id: 5,
    title: "kegiatan",
    isActive: true,
    icon: Newspaper,
    items: [
      { id: 1, sub: "publikasi", icon: Newspaper, path: "/admin/dashboard/publikasi" , roles: ["admin", "user"] },
      { id: 2, sub: "kegiatans", icon: Library, path: "/admin/dashboard/kegiatan" , roles: ["admin", "user"] },
    ],
  },
   {
    id: 6,
    title: "berita",
    icon: Mails,
    isActive: true,
    items:  [{ id: 1, sub: "berita", icon: Mails, path: "/admin/dashboard/berita" , roles: ["admin", "user"] }]
  },
];

export const DashMainMenu: DashMain[] = [
  {id: 1, title: "user", logo: Users},
  {id: 2, title: "kegiatan", logo: Newspaper},
  {id: 3, title: "berita", logo: Mails},
]

export const SejarahFocus: FocusArea[] = [
  {
    id: 1,
    title: "biodiversity",
    logo: Leaf,
  },
  {
    id: 2,
    title: "plantDatabase",
    logo: Database,
  },
  {
    id: 3,
    title: "newSpecies",
    logo: Microscope,
  },
  {
    id: 4,
    title: "bioprospecting",
    logo: Dna,
  },
  {
    id: 5,
    title: "exSituConservation",
    logo: Sprout,
  },
  {
    id: 6,
    title: "redListAssessment",
    logo: BookOpen,
  },
];