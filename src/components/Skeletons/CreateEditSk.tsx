import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const CreateEditSkeleton = () => {
  return (
    <Card className="p-8 animate-pulse">
      <div className="space-y-6">
        <div className="grid gap-2">
          <Skeleton className="h-4 w-24 rounded-md" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        <div className="grid gap-2">
          <Skeleton className="h-4 w-28 rounded-md" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        <div className="grid gap-2">
          <Skeleton className="h-4 w-32 rounded-md" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        <div className="grid gap-2">
          <Skeleton className="h-4 w-16 rounded-md" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        <div className="grid gap-2">
          <Skeleton className="h-4 w-32 rounded-md" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
      </div>

      <div className="mt-6">
        <Skeleton className="h-10 w-36 rounded-md" />
      </div>
    </Card>
  );
};

export default CreateEditSkeleton;