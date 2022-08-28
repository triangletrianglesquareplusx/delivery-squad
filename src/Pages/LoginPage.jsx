import React from "react";
import ControlButton from "../Utilities/ControlButton";
import { HiLightBulb } from "react-icons/hi";
import { useForm } from "react-hook-form";
function LoginPage() {
  return (
    <div className="flex items-start justify-center h-screen m-10">
      <div className="container flex flex-col w-4/12 gap-2 p-10 text-sm rounded-lg shadow-lg bg-scaledDownWhite">
        <div className="flex justify-center gap-3 text-regalBlue">
          <HiLightBulb />
          <p className="text-sm text-black">
            Speak <span className="text-sm text-regalBlue">'friend'</span> and
            enter.
          </p>
        </div>
        <p className="text-sm text-center">Email address</p>
        <div className="flex justify-center">
          <input className="p-2 bg-blue-200 rounded-lg outline-none" />
        </div>
        <p className="text-sm text-center">Password</p>
        <div className="flex justify-center">
          <input className="p-2 bg-blue-200 rounded-lg outline-none" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
