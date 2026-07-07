import { Card, CardContent, CardFooter } from "../ui/card";
import { Skeleton } from "../ui/skeleton";


const FormSkeleton = () => {
  return (
    <div className="p-8 animate-pulse">
      <Skeleton className="h-9 w-72 mb-6 rounded-md" />

      <Card className="bg-[url('/image.png')] bg-cover">
        <div className="mx-6 mt-6 mb-4">
          <Skeleton className="h-6 w-64 rounded-md" />
        </div>

        <Card className="max-w-4xl mx-4">
          <CardContent className="flex flex-col gap-6">

            <div className="space-y-2">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-32 w-full rounded-md" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-36" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-52" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
          </CardContent>

          <CardFooter className="justify-end">
            <Skeleton className="h-10 w-40 rounded-md" />
          </CardFooter>
        </Card>

        <div className="max-w-4xl my-6">
          <div className="mx-6 mb-4">
            <Skeleton className="h-6 w-72 rounded-md" />
          </div>

          <Card className="mx-4">
            <div className="grid grid-cols-5 gap-4 p-4 border-b">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-5 w-28" />
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-20 ml-auto" />
            </div>

            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="grid grid-cols-5 gap-4 items-center p-4 border-b last:border-b-0"
              >
                <Skeleton className="h-16 w-20 rounded-md" />
                <Skeleton className="h-5 w-44" />
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-5 w-28" />

                <div className="flex justify-end gap-2">
                  <Skeleton className="h-9 w-9 rounded-md" />
                  <Skeleton className="h-9 w-9 rounded-md" />
                </div>
              </div>
            ))}
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default FormSkeleton;