const Skeleton = () => {
    return <div className="animate-pulse h-[32px] w-[82px] bg-gray-300"></div>
};
  
  const TabsSkeleton = () => {
    const options = [
      { value: "option1", label: "Opción 1" },
      { value: "option2", label: "Opción 2" },
      { value: "option3", label: "Opción 3" },
    ];
  
    return (
      <div className="flex gap-x-[16px] items-center px-[16px] animate-pulse">
        {options.map((item, index) => (
          <div
            className="animate-pulse flex justify-center items-center h-[32px] bg-gray-300 rounded-md px-[8px] text-[12px] w-full"
            key={index}
          >
            <Skeleton />
          </div>
        ))}
      </div>
    );
  };
  
  export default TabsSkeleton;
  