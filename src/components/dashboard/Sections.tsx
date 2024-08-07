import { useState, useEffect } from "react";
import ItemSections from "./components/Sections/ItemSections";
import MostComponent from "./components/Sections/MostComponent";
import classNames from "classnames";
import axiosInstance from "@/services";

interface Props {
  text: string;
  endpoint: string;
}
const Sections = ({ text, endpoint }: Props) => {
  const [showLeftPadding, setShowLeftPadding] = useState<any>(true);
  const [showRightPadding, setShowRightPadding] = useState(false);
  const [series, setSeries] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const handleScroll = (event: any) => {
    const scrollLeft = event.target.scrollLeft;
    const scrollWidth = event.target.scrollWidth;
    const clientWidth = event.target.clientWidth;
    setShowLeftPadding(scrollLeft === 0);
    setShowRightPadding(scrollLeft + clientWidth === scrollWidth);
  };

  const getSeries = async () => {
    try {
      const series_result = await axiosInstance.get(
        `${endpoint}?page=1&limit=10`
      );
      setSeries(series_result.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSeries();
  }, []);

  return (
    <div className="flex flex-col gap-y-[12px] w-full h-auto">
      <MostComponent text={text} />
      <div
        className="flex gap-x-[16px] overflow-x-auto hidescroll"
        style={{
          overflowX: "scroll",
          whiteSpace: "nowrap",
          paddingLeft: showLeftPadding ? "16px" : "0",
          paddingRight: showRightPadding ? "16px" : "0",
        }}
        onScroll={handleScroll}
      >
        {loading &&
          Array(15)
            .fill(null)
            .map((_: any, index: number) => (
              <div
                key={index}
                className={classNames(
                  "flex flex-col gap-y-[8px] max-w-[146px] min-w-[146px] md:max-w-[166px] md:min-w-[166px] animate-pulse",
                  {
                    "hidden md:flex": index > 3,
                  }
                )}
              >
                <div className="bg-gray-300 rounded-[8px] w-[146px] h-[223px] md:w-[166px] md:h-[250px]"></div>
                <div className="flex flex-col gap-y-[4px]">
                  <div className="bg-gray-300 rounded h-[20px] w-[100px]"></div>
                  <div className="bg-gray-300 rounded h-[16px] w-[80px]"></div>
                </div>
              </div>
            ))}

        {series.map((item: any, index: number) => {
          return <ItemSections key={index} props={item} />;
        })}
      </div>
    </div>
  );
};

export default Sections;
