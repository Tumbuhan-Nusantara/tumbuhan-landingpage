import DetailNews from "@/src/features/Admin/Dashboard/Berita/DetailNews";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function DetailActivityDashPage({ params }: Props) {
  const { id } = await params;

  return <DetailNews newsId={Number(id)}/>;
}