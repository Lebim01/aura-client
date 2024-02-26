import { useState, useEffect } from "react";
import MostComponent from "../dashboard/components/Sections/MostComponent";
import classNames from "classnames";
import useFilters from "@/store/useFilters";
import useIsMobile from "@/hooks/useIsMobile";
import { classNamesCustom } from "@/utils/classes";
import ItemSections from "./ItemSections";
import axiosInstance from "@/services";
interface Props {
  text: string;
  endpoint: string;
}
const Sections = ({ text, endpoint }: Props) => {
  const [series, setSeries] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { filters } = useFilters();
  const isMobile = useIsMobile();

  const getSeries = async () => {
    try {
      setLoading(true);
      const series_result = await axiosInstance.get(`${endpoint}?q=${filters}`);
      setSeries(series_result.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    getSeries();
  }, [filters]);

  return (
    <>
      {series.length === 0 && !loading ? (
        <div className="flex flex-col justify-start items-start w-full">
          <MostComponent
            text={text}
            hide_ver={series.length > 0 ? false : true}
          />
          <span className="p-[16px]"> No hay series para mostrar.</span>
        </div>
      ) : (
        <div className="grid auto-flow-dense grid-layout w-auto md:max-w-[1056px] md:max-h-screen hidescroll overflow-y-auto md:pb-[99px]">
          {!loading && (
            <MostComponent
              text={text}
              hide_ver={series.length > 0 ? false : true}
            />
          )}
          <div
            className={classNamesCustom(
              `align-start`,
              {
                "grid grid-cols-2 gap-x-[32px] gap-y-[16px] px-[16px] py-[12px] hidescroll w-fit mx-auto":
                  isMobile,
              },
              {
                "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-[32px] gap-y-[16px] hidescroll w-fit mx-auto py-[16px]  overflow-x-hidden ":
                  !isMobile,
              }
            )}
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
      )}
    </>
  );
};

export default Sections;
