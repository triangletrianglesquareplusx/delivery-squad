import React from "react";
import ControlButton from "../Utilities/ControlButton";
import { HiLightBulb } from "react-icons/hi";
import { useForm } from "react-hook-form";
function LoginPage() {
  return (
    <div className="flex items-start justify-center h-screen p-10 m-10">
      <div className="w-3/12 rounded-lg shadow-lg bg-mutedGray">
        <div className="p-10 text-sm">
          <div className="flex">
            <div className="flex items-center gap-2">
              <HiLightBulb className="text-3xl" />
              <p className="text-regalBlue">Speak friend and enter.</p>
            </div>
            <div className="text-xs font-light">
              <p>Don't have an account?</p>
              <p>Sign up</p>
            </div>
          </div>

          <p>Hey this will be a login page</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
