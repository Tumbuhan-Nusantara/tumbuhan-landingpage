import EditActivity from "@/src/features/Admin/Dashboard/Kegiatan/RisetKonservasiEdukasi/EditActivity";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditActivityDashPage({ params }: Props) {
  const { id } = await params;

  return <EditActivity activityId={Number(id)}/>;
}