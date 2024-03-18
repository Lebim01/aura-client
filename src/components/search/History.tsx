import { Serie } from "@/types/series";
import { FC } from "react";
import ItemSections from "./ItemSections";

type Props = {
  history: Serie[];
};

const History: FC<Props> = ({ history }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      {history.map((item) => {
        return (
          <ItemSections
            slug={item.slug}
            poster_path={item.poster_path}
            title={item.title}
            genres={[]}
            key={item.slug}
          />
        );
      })}
    </div>
  );
};

export default History;
