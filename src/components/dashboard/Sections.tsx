"use client";
import { useState } from "react";
import ItemSections from "./components/Sections/ItemSections";
import MostComponent from "./components/Sections/MostComponent";

const Sections = () => {
  const [showLeftPadding, setShowLeftPadding] = useState<any>(true);
  const [showRightPadding, setShowRightPadding] = useState(false);

  const handleScroll = (event: any) => {
    const scrollLeft = event.target.scrollLeft;
    const scrollWidth = event.target.scrollWidth;
    const clientWidth = event.target.clientWidth;
    setShowLeftPadding(scrollLeft === 0);
    setShowRightPadding(scrollLeft + clientWidth === scrollWidth);
  };

  return (
    <div className="flex flex-col gap-y-[12px] w-full">
      <MostComponent />
      <div
        className="flex gap-x-[16px]  overflow-x-auto hidescroll"
        style={{
          overflowX: "scroll",
          whiteSpace: "nowrap",
          paddingLeft: showLeftPadding ? "16px" : "0",
          paddingRight: showRightPadding ? "16px" : "0",
        }}
        onScroll={handleScroll}
      >
        <ItemSections />
        <ItemSections />
        <ItemSections />
        <ItemSections />
        <ItemSections />
        <ItemSections />
        <ItemSections />
        <ItemSections />
        <ItemSections />
        <ItemSections />
      </div>
    </div>
  );
};

export default Sections;
