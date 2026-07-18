import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const StructureSkeleton = () => {
  return (
    <div className="p-8 animate-pulse">
      <Skeleton className="h-9 w-56 mb-6 rounded-md" />

      <Card className="bg-[url('/image.png')] bg-cover p-4">
        <div className="flex justify-between items-center mb-6">
          <Skeleton className="h-6 w-64 rounded-md" />

          <Skeleton className="h-10 w-52 rounded-md" />
        </div>

        <div className="border rounded-lg overflow-hidden bg-white">
          <div className="grid grid-cols-5 gap-4 p-4 border-b">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-5 w-20 ml-auto" />
          </div>

          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-5 gap-4 items-center p-4 border-b last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-5 w-32" />
              </div>

              <Skeleton className="h-5 w-44" />

              <Skeleton className="h-5 w-32" />

              <Skeleton className="h-8 w-24 rounded-md" />

              <div className="flex justify-end gap-2">
                <Skeleton className="h-9 w-9 rounded-md" />
                <Skeleton className="h-9 w-9 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default StructureSkeleton;