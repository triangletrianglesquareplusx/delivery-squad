import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import auth from "../Firebase/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ImEnter } from "react-icons/im";

function RegistrationPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex items-start justify-center h-screen m-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container flex flex-col items-center w-4/12 gap-2 p-10 text-sm rounded-lg shadow-lg bg-scaledDownWhite"
        >
          <div className="flex items-center justify-center gap-3 text-regalBlue">
            <ImEnter />
            <p className="text-sm text-black">
              Register and become a
              <span className="text-sm text-regalBlue"> friend</span>.
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
                  message: "Min. length of 10 required!",
                },
                pattern: {
                  value: /\d+/,
                  message: "Must be only integers!",
                },
              })}
              className="p-2 bg-blue-200 rounded-lg outline-none"
            />
            <p className="text-red-600 ">{errors.passwordRequired?.message}</p>
          </div>
          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;
