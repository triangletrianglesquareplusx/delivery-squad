import React from "react";
import ExpandedProductCard from "../utilities/ExpandedProductCard";
import ControlButton from "../utilities/ControlButton";

function TrendingSection() {
  return (
    <div className="flex flex-col items-center gap-10 p-3">
      <ControlButton
        name="Trending"
        className="w-2/12 px-2 py-2 font-bold border-b-4 md:w-1/12 border-b-primaryRed"
      />
      <section className="flex justify-around w-10/12">
        <ExpandedProductCard
          className="static w-8/12 max-w-sm overflow-hidden rounded-lg shadow-md md:relative md:mt-10 md:mb-0 md:w-4/12 lg:w-3/12"
          src={
            "https://i1.actualno.com/actualno_2013/upload/news/2022/06/01/0274624001654087691_1764664_920x708.jpg"
          }
        />
        <ExpandedProductCard
          className="hidden lg:block lg:max-w-sm lg:mb-10 lg:overflow-hidden lg:rounded-lg lg:shadow-md lg:w-3/12"
          src={
            "https://i1.actualno.com/actualno_2013/upload/news/2022/06/01/0274624001654087691_1764664_920x708.jpg"
          }
        />
        <ExpandedProductCard
          className="hidden md:block md:max-w-sm md:overflow-hidden md:rounded-lg md:shadow-md md:relative md:mt-10 md:mb-0 md:w-4/12 lg:w-3/12"
          src={
            "https://i1.actualno.com/actualno_2013/upload/news/2022/06/01/0274624001654087691_1764664_920x708.jpg"
          }
        />
      </section>
    </div>
  );
}

export default TrendingSection;
