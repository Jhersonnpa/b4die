import { Skeleton } from "@/components/ui/skeleton";

const AchievementsProfileSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3 rounded-xl">
      <Skeleton className="w-full h-[300px]"/>
    </div>
  )
}

export default AchievementsProfileSkeleton