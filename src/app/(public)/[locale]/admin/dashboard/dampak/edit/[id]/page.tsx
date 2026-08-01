import EditDampakFeat from "@/src/features/Admin/Dashboard/Dampak/EditDampak";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditNewsDashPage({ params }: Props) {
  const { id } = await params;

  return <EditDampakFeat dampakId={Number(id)} />;
}