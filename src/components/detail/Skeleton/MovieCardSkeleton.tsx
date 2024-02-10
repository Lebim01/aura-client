const MovieCardSkeleton = () => {
    return (
      <div className="flex flex-col w-full relative px-[16px] pt-[16px] animate-pulse">
        <div className="w-full rounded-lg bg-gray-300 relative overflow-hidden min-h-[423px]">
          <div className="animate-pulse w-full h-full rounded-lg bg-gray-300 relative overflow-hidden">
            <div className="absolute inset-0 flex flex-col justify-between">
              <div className="flex-grow">
                <div className="animate-pulse h-56 w-full"></div>
                <div className="animate-pulse h-12 w-40"></div>
                <div className="animate-pulse h-12 w-full"></div>
                <div className="animate-pulse h-12 w-full"></div>
                <div className="w-full h-px bg-gray-300 bg-opacity-40"></div>
              </div>
              <div className="p-[16px]">
                <div className="flex flex-col gap-y-[16px]">
                  <div className="flex flex-col gap-y-[8px]">
                    <div className="w-full flex gap-x-[8px] items-center">
                      <div className="animate-pulse rounded-full h-14 w-14"></div>
                      <div className="flex flex-col">
                        <div className="animate-pulse h-14 w-32"></div>
                        <div className="animate-pulse h-12 w-20"></div>
                      </div>
                    </div>
                    <div className="animate-pulse h-12 w-full"></div>
                    <div className="w-full h-px bg-gray-300 bg-opacity-40"></div>
                  </div>
                  <div className="flex gap-x-[8px] w-full items-center justify-end">
                    <div className="animate-pulse h-12 w-24"></div>
                    <div className="rounded-full w-[32px] h-[32px] flex items-center justify-center bg-yellow-aura-accent shadow-[0px_0px_0px_3px_rgba(251,188,5,0.20)]">
                      <div className="animate-pulse h-6 w-6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MovieCardSkeleton;
  