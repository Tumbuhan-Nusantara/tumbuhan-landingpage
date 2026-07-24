import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const StructureSkeleton = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-3">
        <Skeleton className="h-9 w-80" />
        <Skeleton className="h-4 w-125" />
      </div>

      <Card className="overflow-hidden border-0 shadow-lg">
        <div className="bg-[#1A4D2E] px-8 py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <Skeleton className="h-8 w-64 bg-white/20" />
              <Skeleton className="h-4 w-96 bg-white/20" />
            </div>

            <Skeleton className="h-10 w-52 bg-white/20" />
          </div>
        </div>

        <CardContent className="p-8">
          <Card>
            <CardContent>
              <div className="grid grid-cols-4 gap-4">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
              </div>

              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 gap-4 items-center"
                >
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-12 w-full" />
                </div>
              ))}
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default StructureSkeleton;
