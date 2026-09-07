const StickyNavigation = () => {
  return (
    <section className="sticky top-20 z-40 border-y bg-white/95 backdrop-blur">
  <div className="container mx-auto max-w-7xl px-6">
    <nav className="flex justify-center gap-3 overflow-x-auto py-4 scrollbar-hide">
      <a
        href="#publikasi"
        className="rounded-full border px-5 py-2 text-sm font-medium transition hover:bg-[#1A4D2E] hover:text-white"
      >
        Publikasi
      </a>

      <a
        href="#riset"  
        className="rounded-full border px-5 py-2 text-sm font-medium transition hover:bg-[#1A4D2E] hover:text-white"
      >
        Riset
      </a>

      <a
        href="#edukasi"
        className="rounded-full border px-5 py-2 text-sm font-medium transition hover:bg-[#1A4D2E] hover:text-white"
      >
        Edukasi
      </a>

      <a
        href="#konservasi"
        className="rounded-full border px-5 py-2 text-sm font-medium transition hover:bg-[#1A4D2E] hover:text-white"
      >
        Konservasi
      </a>
    </nav>
  </div>
</section>
  )
}

export default StickyNavigation