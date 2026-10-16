import DetailBotani from "@/src/features/Admin/Dashboard/Botani/DetailBotani";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function DetailActivityDashPage({ params }: Props) {
  const { id } = await params;

  return <DetailBotani botaniId={Number(id)}/>;
}