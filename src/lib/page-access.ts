export const PAGE_ACCESS: Record<string, ("admin" | "user")[]> = {
  "/admin/dashboard": ["admin", "user"],

  "/admin/dashboard/berita": ["admin", "user"],
  "/admin/dashboard/berita/detail": ["admin", "user"],
  "/admin/dashboard/berita/edit": ["admin", "user"],

  "/admin/dashboard/hero": ["admin", "user"],
  "/admin/dashboard/user": [ "admin"],

  "/admin/dashboard/kegiatan": ["admin", "user"],
  "/admin/dashboard/kegiatan/detail": ["admin", "user"],
  "/admin/dashboard/kegiatan/edit": ["admin", "user"],

  "/admin/dashboard/our-team/create": ["admin", "user"],
  "/admin/dashboard/our-team/edit": ["admin", "user"],

  "/admin/dashboard/publikasi": ["admin", "user"],
  "/admin/dashboard/struktur-org": ["admin", "user"],
  "/admin/dashboard/visi-misi": ["admin", "user"],
};