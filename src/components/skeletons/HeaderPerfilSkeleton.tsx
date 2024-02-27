import { Skeleton } from "@/components/ui/skeleton";

const HeaderPerfilSkeleton = () => {
  return (
    <div className="bg-white flex flex-col space-y-3 rounded-xl">
      <Skeleton className=" h-[350px] w-full " />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

export default HeaderPerfilSkeleton;
