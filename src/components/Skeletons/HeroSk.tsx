import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
const HeroDashSkeleton = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 animate-pulse">
  <div className="mb-6 space-y-3">
    <Skeleton className="h-9 w-52" />
    <Skeleton className="h-4 w-80" />
  </div>

  <Card className="overflow-hidden">

    <div className="bg-[#1A4D2E] px-8 py-7">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

        <div className="space-y-3">
          <Skeleton className="h-7 w-44 bg-white/30" />
          <Skeleton className="h-4 w-72 bg-white/20" />
        </div>

        <Skeleton className="h-10 w-32 rounded-md bg-white/30" />

      </div>
    </div>

    <CardContent className="space-y-8 p-8">

      <div className="space-y-2">
        <Skeleton className="h-4 w-44" />
        <Skeleton className="h-44 w-full rounded-lg" />
      </div>

      <div className="space-y-2">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-44 w-full rounded-lg" />
      </div>

    </CardContent>

  </Card>
</div>
  )
}

export default HeroDashSkeleton