import { Skeleton } from "@/components/ui/skeleton";

const HeaderPerfilSkeleton = () => {
  return (
    <div className=" flex flex-col space-y-3 rounded-xl relative">
      <Skeleton className="h-[250px] w-full " />
      <div className="img">
        <Skeleton className="w-20 h-20 rounded-full absolute top-[45%] left-[35%] md:left-4" />
      </div>
      <div className="space-y-1 p-4">
        <Skeleton className="h-4 w-[80%]" />
        <Skeleton className="h-4 w-[65%]" />
        <Skeleton className="h-4 w-[65%]" />
      </div>
      <div className="flex w-full gap-4 p-4">
        <Skeleton className="w-36 h-12"/>
        <Skeleton className="w-36 h-12"/>
      </div>
    </div>
  );
};

export default HeaderPerfilSkeleton;
