import { useTranslations } from 'next-intl'

const KegiatanKonservasi = () => {
  const k = useTranslations('kegiatan')
  return (
     <div>
      <div className="container mx-auto">
         <div className="text-black flex flex-col gap-2  py-2 mx-8">
          <h1 className="text-2xl font-bold  text-[#1A4D2E]">{k('konserv')}</h1>
          <p>{k('descK')}</p>
        </div>
      </div>
    </div>
  )
}

export default KegiatanKonservasi