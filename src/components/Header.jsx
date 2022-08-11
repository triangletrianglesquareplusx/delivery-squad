import ControlButton from "../utilities/ControlButton";
import React from "react";
import { MdLocationPin } from "react-icons/md";

export default function Header() {
  return (
    <div className={`w-10/12 mx-auto flex items-center justify-between p-3`}>
      <div
        className={`font-inter text-regalBlue text-3xl md:text-xl font-extrabold flex items-center gap-1`}
      >
        <MdLocationPin className={`text-primaryRed`} />
        <p>Atlas</p>
      </div>
      <div className={`flex`}>
        <ControlButton
          name={"Trending"}
          className={`hidden md:inline md:px-6 md:py-3 md:font-medium hover:text-regalBlue`}
        />
        <ControlButton
          name={"Resources"}
          className={`px-6 py-3 font-semibold hover:text-regalBlue`}
        />
        <ControlButton
          name={"Nearby"}
          className={`hidden md:inline md:px-6 md:py-3 md:font-medium hover:text-regalBlue`}
        />
        <ControlButton
          name={"Hackatons"}
          className={`hidden md:inline md:px-6 md:py-3 md:font-semibold hover:text-regalBlue`}
        />
        <ControlButton
          name={"FAQ"}
          className={`px-6 py-3 font-semibold hover:text-regalBlue`}
        />
        <ControlButton
          name={"Download App"}
          className={`px-6 py-2 w-4/12 bg-primaryRed rounded-lg shadow-md text-white text-sm font-medium font-inter`}
        />
      </div>
    </div>
  );
}
