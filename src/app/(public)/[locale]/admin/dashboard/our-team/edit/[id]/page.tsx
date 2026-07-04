import EditTeam from "@/src/features/Admin/Dashboard/Profile/OurTeam/EditTeam";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditActivityDashPage({ params }: Props) {
  const { id } = await params;

  return <EditTeam teamId={Number(id)}/>;
}