import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const DashVisiMisiSkeleton = () => {
  return (
    <Card className="mx-2 my-4 md:mx-4 max-w-4xl">
      <CardContent className="space-y-8 py-6">
        <div className="space-y-2">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-28 w-full" />
          <Skeleton className="h-9 w-44" />
        </div>

        <div className="space-y-4">
          <Skeleton className="h-5 w-16" />

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex flex-col md:flex-row gap-3"
            >
              <Skeleton className="h-24 flex-1" />

              <div className="flex gap-2">
                <Skeleton className="h-10 w-10" />
                <Skeleton className="h-10 w-10" />
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-32 w-full" />
        </div>
      </CardContent>
    </Card>
  );
};

export default DashVisiMisiSkeleton;