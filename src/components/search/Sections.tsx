import { useState, useEffect } from "react";
import MostComponent from "../dashboard/components/Sections/MostComponent";
import classNames from "classnames";
import useFilters from "@/store/useFilters";
import { classNamesCustom } from "@/utils/classes";
import ItemSections from "./ItemSections";
import axiosInstance from "@/services";
import { objectToURL } from "@/utils/objectToURL";
import History from "./History";
import { Serie } from "@/types/series";
interface Props {
  text: string;
  endpoint: string;
}
const Sections = ({ text, endpoint }: Props) => {
  const [series, setSeries] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { filters, init } = useFilters();

  const [history, setHistory] = useState<Serie[]>([]);

  useEffect(() => {
    axiosInstance
      .get("/series/searched")
      .then((r) => {
        setHistory(r.data);
      })
      .catch((err) => {
        setHistory([]);
      });
  }, []);

  const getSeries = async () => {
    try {
      if (!filters.q) {
        setSeries([]);
        return;
      }

      setLoading(true);
      const series_result = await axiosInstance.get(
        `${endpoint}?${objectToURL(filters)}`
      );
      setSeries(series_result.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    if (!init) getSeries();
  }, [init, filters]);

  return (
    <>
      {!filters.q && <History history={history} />}

      {series.length === 0 && !loading && history.length == 0 ? (
        <div className="flex flex-col justify-start items-start w-full">
          <MostComponent
            text={text}
            hide_ver={series.length > 0 ? false : true}
          />
          <span className="p-[16px]"> No hay series para mostrar.</span>
        </div>
      ) : series.length > 0 ? (
        <div className="grid auto-flow-dense grid-layout w-auto md:max-w-[1056px] md:max-h-screen hidescroll overflow-y-auto md:pb-[99px] gap-y-[16px]">
          {!loading && (
            <MostComponent
              text={text}
              hide_ver={series.length > 0 ? false : true}
            />
          )}
          <div
            className={classNamesCustom(
              `align-start grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(166px,1fr))] gap-[16px]`
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

            {!loading &&
              series.map((item: any, index: number) => {
                return <ItemSections key={index} {...item} />;
              })}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Sections;
