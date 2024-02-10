const Skeleton = () => 
{
   return <div className="animate-pulse h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
};

const SkeletonShort = () => 
{
   return <div className="animate-pulse h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
};
  
  const SinopsisSkeleton = () => {
    return (
      <div className="flex flex-col gap-y-4 px-4 animate-pulse">
        <div className="flex flex-col gap-y-2">
          <SkeletonShort />
          <Skeleton />
          <Skeleton />
        </div>
  
        <div className="flex flex-col gap-y-2">
          <SkeletonShort />
          <Skeleton />
          <Skeleton />
        </div>
  
        <div className="flex flex-col gap-y-2">
          <SkeletonShort />
          <Skeleton />
          <Skeleton />
        </div>
  
        <div className="flex flex-col gap-y-4">
          <Skeleton />
          <div className="h-12 bg-gray-300 rounded w-2/3"></div>
        </div>
      </div>
    );
  };
  
  export default SinopsisSkeleton;
  