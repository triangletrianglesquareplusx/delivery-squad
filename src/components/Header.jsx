import ControlButton from "../utilities/ControlButton";
import React from "react";

export default function Header() {
  return (
    <div className={`max-w-7xl p-3 mx-auto flex items-center justify-between`}>
      <div className={`font-inter text-regalBlue font-extrabold`}>
        <p>Atlas</p>
      </div>
      <div>
        <ControlButton
          name={"Trending"}
          className={`px-6 py-3 font-semibold`}
        />
        <ControlButton
          name={"Resources"}
          className={`px-6 py-3 font-semibold`}
        />
        <ControlButton name={"Nearby"} className={`px-6 py-3 font-semibold`} />
        <ControlButton
          name={"Hackatons"}
          className={`px-6 py-3 font-semibold`}
        />
        <ControlButton name={"FAQ"} className={`px-6 py-3 font-semibold`} />
        <ControlButton
          name={"Download App"}
          className={`px-6 py-3 bg-red-400 rounded-lg shadow-md text-white text-sm font-medium font-inter`}
        />
      </div>
    </div>
  );
}
