import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";


const DashUserSkeleton = () => {
  return (
    <div className="p-8 animate-pulse">
      <Skeleton className="h-9 w-80 rounded-md mb-6" />

      <Skeleton className="h-6 w-80 rounded-md mb-4 ml-6" />

      <Card className="mx-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-4 py-4 border-b last:border-b-0"
          >
            {/* Avatar + Nama */}
            <div className="flex items-center gap-4">
              <Skeleton className="h-12 w-12 rounded-full" />

              <div className="space-y-2">
                <Skeleton className="h-5 w-40 rounded-md" />
                <Skeleton className="h-4 w-56 rounded-md" />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Skeleton className="h-10 w-36 rounded-md" />
              <Skeleton className="h-10 w-10 rounded-md" />
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default DashUserSkeleton;