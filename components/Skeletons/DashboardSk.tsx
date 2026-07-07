import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const DashboardSkeleton = () => {
  return (
    <div className="p-8 animate-pulse">
      <Skeleton className="h-9 w-64 rounded-md mb-6" />

      <Skeleton className="h-7 w-56 rounded-md mb-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <Card
            key={index}
            className="h-30 bg-[url('/image.png')] bg-cover p-6"
          >
            <div className="flex justify-between items-start">
              <Skeleton className="h-6 w-32 rounded-md" />

              <Skeleton className="h-10 w-10 rounded-lg" />
            </div>

            <Skeleton className="h-8 w-20 rounded-md mt-8" />
          </Card>
        ))}
      </div>

      <Card className="bg-[url('/image.png')] bg-cover p-4">
        <Skeleton className="h-6 w-72 rounded-md mb-4" />

        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index} className="mx-2 my-3 p-4">
            <div className="flex items-center gap-4">
              <Skeleton className="h-12 w-12 rounded-lg" />

              <div className="space-y-2">
                <Skeleton className="h-5 w-36 rounded-md" />
                <Skeleton className="h-4 w-24 rounded-md" />
              </div>
            </div>
          </Card>
        ))}
      </Card>
    </div>
  );
};

export default DashboardSkeleton;