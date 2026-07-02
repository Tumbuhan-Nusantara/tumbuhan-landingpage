import EditNews from "@/src/features/Admin/Dashboard/Berita/EditNews";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditNewsDashPage({ params }: Props) {
  const { id } = await params;

  return <EditNews newsId={Number(id)} />;
}