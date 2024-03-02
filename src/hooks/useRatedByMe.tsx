import { getRatedByMe } from "@/services/series";
import { useEffect, useState } from "react";

const useRatedByMe = (id: string) => {
  const [rate, setRate] = useState(0);

  useEffect(() => {
    getRatedByMe(id)
      .then((rating) => {
        setRate(Number(rating || 0));
      })
      .catch(() => {
        setRate(0);
      });
  }, [id]);

  return rate;
};

export default useRatedByMe;
