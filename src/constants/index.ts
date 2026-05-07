import { LandingMenuType, LogoContacs } from "../types";

export const LandingMenu: LandingMenuType[] =[
  {id: 1, title: "home"},
  {id: 2, title: "profile", items: [
    {id: 1, sub: "history"},
    {id: 2, sub: "visi"},
    {id: 3, sub: "structure"},
  ]},
  {id: 3, title: "publication", items: [
    {id: 1, sub: "article"},
    {id: 2, sub: "digitalFlora"},
  ]},
  {id: 4, title: "activity", items: [
    {id: 1, sub: "research"},
    {id: 2, sub: "education"},
    {id: 3, sub: "restoration"},
  ]},
  {id: 5, title: "news"},
  {id: 6, title: "contact"},
]

export const Contacts: LogoContacs[] = [
  {id: 1, icon: "/contacts/email.png", alt: "Email YTAN"},
  {id: 2, icon: "/contacts/facebook.png", alt: "Facebook YTAN"},
  {id: 3, icon: "/contacts/twitter.png", alt: "X YTAN"},
  {id: 4, icon: "/contacts/instagram.png", alt: "Instagram YTAN"},
  {id: 5, icon: "/contacts/linkedin.png", alt: "Linkedin YTAN"},
]