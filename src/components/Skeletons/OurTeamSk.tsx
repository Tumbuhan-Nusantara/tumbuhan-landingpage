import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const OurTeamSkeleton = () => {
  return (
    <div className="p-6 space-y-6 animate-pulse">
      <div className="space-y-2">
        <Skeleton className="h-9 w-56" />
        <Skeleton className="h-4 w-80" />
      </div>

      <Card className="overflow-hidden border-0 shadow-lg">
        <div className="bg-[#1A4D2E] px-8 py-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <Skeleton className="h-7 w-48 bg-white/30" />
              <Skeleton className="h-4 w-72 bg-white/20" />
            </div>

            <Skeleton className="h-10 w-44 rounded-md bg-white/30" />
          </div>
        </div>

        <CardContent className="p-6 space-y-5">
          <div className="flex flex-col gap-4 md:flex-row md:justify-between">
            <Skeleton className="h-10 w-full md:w-72" />

            <div className="flex gap-3">
              <Skeleton className="h-10 w-28" />
              <Skeleton className="h-10 w-28" />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 border-b pb-4">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-5 w-20" />
          </div>

          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-4 items-center gap-4 py-4 border-b last:border-0"
            >
              <div className="flex items-center gap-3">
                <Skeleton className="h-12 w-12 rounded-full" />
                <Skeleton className="h-5 w-36" />
              </div>

              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-5 w-28" />

              <div className="flex justify-end gap-2">
                <Skeleton className="h-9 w-9 rounded-md" />
                <Skeleton className="h-9 w-9 rounded-md" />
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center pt-4">
            <Skeleton className="h-4 w-40" />

            <div className="flex gap-2">
              <Skeleton className="h-9 w-20" />
              <Skeleton className="h-9 w-20" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OurTeamSkeleton;