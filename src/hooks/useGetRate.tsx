import { useState } from "react";
import { getRate } from "@/services/series";

const useGetRate = () => {
  const [rate, setRate] = useState(0);

  const rateSerie = async (slug: string) => {
    try {
      const rate_result: any = await getRate(slug);
      setRate(rate_result.serie.rating);
      return rate_result.serie.rating;
    } catch (e) {
      console.log(e);
    } finally {
    }
  };

  return {
    rate,
    rateSerie,
  };
};

export default useGetRate;
