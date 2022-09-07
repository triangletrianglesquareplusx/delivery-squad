import React from "react";
import { HiLightBulb } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function LoginPage() {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    passwordRequired: yup.number().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const auth = getAuth();
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.passwordRequired
      );
      if (userCredentials.user) {
        navigate("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-start justify-center h-screen m-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container flex flex-col items-center w-4/12 gap-2 p-10 text-sm rounded-lg shadow-lg bg-scaledDownWhite"
      >
        <div className="flex justify-center gap-3 text-regalBlue">
          <HiLightBulb />
          <p className="text-sm text-black">
            Welcome back <span className="text-sm text-regalBlue">friend</span>{" "}
            - enter.
          </p>
        </div>
        <p className="text-sm text-center">Email address</p>
        <div className="flex flex-col w-9/12">
          <input
            {...register("email", {
              required: {
                message: "This field is mandatory!",
              },
            })}
            className="p-2 bg-blue-200 rounded-lg outline-none"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <p className="text-sm text-center">Password</p>
        <div className="flex flex-col w-9/12 gap-2">
          <input
            {...register("passwordRequired", { required: true })}
            className="p-2 bg-blue-200 rounded-lg outline-none"
          />
          <p className="text-red-600 ">{errors.passwordRequired?.message}</p>
        </div>
        <Link to="/register">
          <p className="text-xs text-regalBlue">Not a friend yet? Register!</p>
        </Link>

        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default LoginPage;
