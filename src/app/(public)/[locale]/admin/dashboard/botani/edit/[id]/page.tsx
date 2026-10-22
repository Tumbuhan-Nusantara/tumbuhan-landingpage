import EditBotani from "@/src/features/Admin/Dashboard/Botani/EditBotani";

interface Props {
  params: Promise<{
    id: string
  }>;
}

export default async function EditNewsDashPage({ params }: Props) {
  const { id } = await params;

  return <EditBotani botaniId={Number(id)} />;
}