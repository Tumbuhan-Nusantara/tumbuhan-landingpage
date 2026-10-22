import DetailActivity from "@/src/features/Admin/Dashboard/Kegiatan/RisetKonservasiEdukasi/DetailActivity";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function DetailActivityDashPage({ params }: Props) {
  const { id } = await params;

  return <DetailActivity actId={Number(id)}/>;
}