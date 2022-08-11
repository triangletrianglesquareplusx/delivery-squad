import ControlButton from "../utilities/ControlButton";
import React from "react";
import { MdLocationPin } from "react-icons/md";

export default function Header() {
  return (
    <div className={`max-w-8xl p-3 mx-10 flex items-center justify-between`}>
      <div
        className={`font-inter text-regalBlue text-3xl md:text-base font-extrabold flex items-center gap-1`}
      >
        <MdLocationPin className={`text-primaryRed`} />
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
          className={`px-6 py-2 bg-primaryRed rounded-lg shadow-md text-white text-sm font-medium font-inter`}
        />
      </div>
    </div>
  );
}
