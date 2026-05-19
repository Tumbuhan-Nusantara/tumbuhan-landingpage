import { LucideIcon } from "lucide-react";

export interface LandingMenuType {
  id: number;
  title: string;
  items?: SubMenuType[];
  path?: string
}

export interface SubMenuType {
  id: number;
  sub: string;
  path? : string;
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
  src: string;}
export interface ArticleGroup {
  year: number;
  items: ArticleType[];
}