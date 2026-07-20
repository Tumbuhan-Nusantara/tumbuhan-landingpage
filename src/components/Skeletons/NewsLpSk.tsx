import { Card, CardContent } from "@/src/components/ui/card";
import { Skeleton } from "@/src/components/ui/skeleton";

interface NewsSkeletonProps {
  count?: number;
}

const NewsSkeleton = ({ count = 3 }: NewsSkeletonProps) => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <Card key={index} className="overflow-hidden rounded-2xl border-0 shadow-md">
          <Skeleton className="h-60 w-full rounded-none" />

          <CardContent className="space-y-4 p-6">
            <Skeleton className="h-3 w-24" />

            <Skeleton className="h-6 w-5/6" />

            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />

            <Skeleton className="mt-6 h-8 w-32" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default NewsSkeleton;