import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const CreateEditSkeleton = () => {
  return (
    <div className="p-6 space-y-6 animate-pulse">
      <div className="space-y-2">
        <Skeleton className="h-9 w-64" />
        <Skeleton className="h-5 w-96 max-w-full" />
      </div>

      <Card className="overflow-hidden border-0 shadow-lg">

        <div className="bg-[#1A4D2E] px-8 py-6 space-y-3">
          <Skeleton className="h-7 w-52 bg-white/30" />
          <Skeleton className="h-4 w-80 bg-white/20 max-w-full" />
        </div>

        <CardContent className="p-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            ))}

            <div className="space-y-2 md:col-span-2">
              <Skeleton className="h-4 w-36" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>

          </div>

          <div className="flex justify-end gap-3 mt-10">
            <Skeleton className="h-10 w-24 rounded-md" />
            <Skeleton className="h-10 w-40 rounded-md" />
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default CreateEditSkeleton;