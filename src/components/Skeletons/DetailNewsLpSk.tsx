import { Skeleton } from "../ui/skeleton";

const NewsLpSkeleton = () => {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mx-auto max-w-4xl animate-pulse">
        <Skeleton className="h-8 w-60 rounded bg-gray-200" />

        <Skeleton className="mt-4 h-5 w-40 rounded bg-gray-200" />

        <Skeleton className="mt-8 h-105 rounded-2xl bg-gray-200" />

        <Skeleton className="mt-8 space-y-4">
          <Skeleton className="h-5 rounded bg-gray-200" />
          <Skeleton className="h-5 rounded bg-gray-200" />
          <Skeleton className="h-5 rounded bg-gray-200" />
          <Skeleton className="h-5 w-4/5 rounded bg-gray-200" />
        </Skeleton>
      </div>
    </section>
  );
};

export default NewsLpSkeleton;
