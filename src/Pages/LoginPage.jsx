import React from "react";
import ControlButton from "../Utilities/ControlButton";
import { HiLightBulb } from "react-icons/hi";
import { useForm } from "react-hook-form";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex items-start justify-center h-screen m-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container flex flex-col items-center w-4/12 gap-2 p-10 text-sm rounded-lg shadow-lg bg-scaledDownWhite"
      >
        <div className="flex justify-center gap-3 text-regalBlue">
          <HiLightBulb />
          <p className="text-sm text-black">
            Speak <span className="text-sm text-regalBlue">'friend'</span> and
            enter.
          </p>
        </div>
        <p className="text-sm text-center">Email address</p>
        <div className="flex flex-col w-9/12">
          <input
            {...register("email", { required: true })}
            className="p-2 bg-blue-200 rounded-lg outline-none"
          />
        </div>
        <p className="text-sm text-center">Password</p>
        <div className="flex flex-col w-9/12 gap-2">
          <input
            {...register("passwordRequired", {
              required: true,
              minLength: {
                value: 10,
                message: "You need a 10 digit pass minimum!",
              },
            })}
            className="p-2 bg-blue-200 rounded-lg outline-none"
          />
          <p className="text-red-600 ">{errors.passwordRequired?.message}</p>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default LoginPage;
