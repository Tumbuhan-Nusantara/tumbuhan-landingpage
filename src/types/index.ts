import { LucideIcon } from "lucide-react";

export interface LandingMenuType {
  id: number;
  title: string;
  items?: SubMenuType[];
  path?: string;
}

export interface SubMenuType {
  id: number;
  sub: string;
  path?: string;
}

export interface CarouselType {
  key: string;
  image: string;
}

export interface LogoContacs {
  id: number;
  icon: string;
  alt: string;
}

export interface ArticleType {
  id: number;
  title: string;
  desc: string;
  src: string;
  link: string
}
export interface ArticleGroup {
  year: number;
  items: ArticleType[];
}

export interface SejarahType {
  id: number;
  title: string;
  src: LucideIcon;
}

export interface VisiMisiType {
  id: number;
  desc: string;
  src: string;
}

export interface SidebarType {
  id: number;
  title: string;
  isActive?: boolean;
  icon: LucideIcon;
  items?: SideMenuType[];
  path?: string;
}

export interface SideMenuType {
  id: number;
  sub: string;
  icon: LucideIcon;
  path?: string;
  roles: UserRole[];
}

export type UserRole = "admin" | "user";


export interface DashMain {
  id: number;
  title: string;
  logo: LucideIcon;
}

export interface DashMisi {
  id: number;
  misi: string;
}

//api

export interface HeroType {
  id: number;
  beranda_id: string;
  beranda_en: string;
  deskripsi_id: string;
  deskripsi_en: string;
}

export interface CreateArticleDashType {
  judul: string;
  doi: string;
  tahun: number | null;
  volume: string;
  link: string;
}
export interface ArticleDashType {
  id: number;
  judul: string;
  doi: string;
  tahun: number | null;
  volume: string;
  link: string;
}
export interface PropsType {
  idCode: number;
  onSuccess: () => void;
}

export interface NewsDashType {
  id: number;
  news_name: string;
  deskripsi: string;
  tanggal_berita: string;
  tempat: string;
  photo_url: string;
  video_link: string;
}

export interface CreateNewsDashType {
  news_name: string;
  deskripsi: string;
  tanggal_berita: string;
  tempat: string;
  photo_url: File | null;
  video_link: string;
}

export interface NewsPropsType {
  newsId: number;
}

export interface CreateActivityDashType {
  activity_name: string;
  deskripsi: string;
  tanggal_kegiatan: string;
  tempat: string;
  photo_url: File | null;
  tipe_kegiatan_id: number | null;
}
export interface ActivityDashType {
  id: number;
  activity_name: string;
  deskripsi_id: string;
  deskripsi_en: string;
  tanggal_kegiatan: string;
  tempat: string;
  photo_url: string;
  tipe_kegiatan_id: number | null;
  nama_tipe: string;
}

export interface TypesDashType {
  id: number;
  nama_tipe: string;
}

export interface ActivityPropsType {
  activityId: number;
}

export interface UserDashType {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  is_active: boolean;
  role: "admin" | "user";
}
export interface CreateUserDashType {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  role: "admin" | "user";
}

export interface LoginUserDashType {
  email: string;
  password: string;
}

export interface ChangePasswordType {
  password: string;
}
export interface TeamPropsType {
  teamId: number;
}

export interface VisiType {
  id: number;
  visi_id: string;
  visi_en: string;
}

export interface MisiType {
  id: number;
  content_id: string;
  content_en: string;
}

export interface TujuanType {
  id: number;
  goal_id: string;
  goal_en: string;
}

export interface StrukturDashType {
  id: number;
  position: string;
  name: string;
  photo: string;
}
export interface CreateStrukturDashType {
  position: string;
  name: string;
  photo: File | null;
}

export interface NewsLandingPageType {
  id: number;
  news_name: string;
  deskripsi: string;
  tanggal_berita: string;
  tempat: string;
  photo_url: string;
  video_link: string;
}

export interface VisiLandingPageType {
  id: number;
  visi_id: string;
  visi_en: string;
}
export interface MisiType {
  id: number;
  content_id: string;
  content_en: string;
}
export interface GoalType {
  id: number;
  goal_id: string;
  goal_en: string;
}

export interface DampakLandingPageType {
  id: number;
  keterangan_id: string;
  keterangan_en: string;
  sejak: string;
  total: string;
}
export interface DokumenLandingPageType {
  id: number;
  name_doc: string;
  summary: string;
  link: string;
}

export interface FocusArea {
  id: number;
  title: string;
  logo: LucideIcon;
}


export interface DampakPropsType {
  dampakId: number;
}