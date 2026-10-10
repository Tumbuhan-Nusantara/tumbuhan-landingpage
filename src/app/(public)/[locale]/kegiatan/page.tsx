import KegiatanFeat from '@/src/features/Kegiatan'
import { useLocale } from 'next-intl';

const KegiatanPage = () => {
  const locale = useLocale();

  console.log("KegiatanPage locale:", locale);
  return (
    <KegiatanFeat/>
  )
}

export default KegiatanPage