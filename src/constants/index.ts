import { LandingMenuType } from "../types";

export const LandingMenu: LandingMenuType[] =[
  {id: 1, title: "Beranda"},
  {id: 2, title: "Profil", items: [
    {id: 1, sub: "Sejarah"},
    {id: 2, sub: "Visi Misi dan Tujuan"},
    {id: 3, sub: "Struktur Organisasi"},
  ]},
  {id: 3, title: "Publikasi", items: [
    {id: 1, sub: "Artikel Ilmiah"},
    {id: 2, sub: "Digital Flora of Indonesia"},
  ]},
  {id: 4, title: "Kegiatan", items: [
    {id: 1, sub: "Riset dan Eksplorasi"},
    {id: 2, sub: "Edukasi"},
    {id: 3, sub: "Restorasi dan Monitoring"},
  ]},
  {id: 5, title: "Berita"},
  {id: 6, title: "Kontak Kami"},
]