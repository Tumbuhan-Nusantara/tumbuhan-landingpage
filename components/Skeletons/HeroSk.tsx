import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
const HeroDashSkeleton = () => {
  return (
     <div className="p-8 animate-pulse">
      {/* Judul */}
      <Skeleton className="h-9 w-52 mb-6 rounded-md" />

      <Card className="bg-[url('/image.png')] bg-cover">
        <div className="mx-6 mt-6 space-y-2">
          <Skeleton className="h-6 w-64 rounded-md" />
          <Skeleton className="h-4 w-72 rounded-md" />
        </div>

        <Card className="max-w-4xl m-4">
          <CardHeader>
            <Skeleton className="h-4 w-56 rounded-md" />
          </CardHeader>

          <CardContent>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Skeleton className="h-4 w-24 rounded-md" />

                <Skeleton className="h-40 w-full rounded-lg" />
              </div>
            </div>
          </CardContent>

          <CardFooter className="justify-end">
            <Skeleton className="h-10 w-44 rounded-md" />
          </CardFooter>
        </Card>
      </Card>
    </div>
  )
}

export default HeroDashSkeleton