import ControlButton from "../Utilities/ControlButton";
import React from "react";
import { MdLocationPin } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const auth = getAuth();
  const navigate = useNavigate();

  const [userName, setUsername] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUsername(user.displayName);
      } else {
        console.log("no user here!");
        setUsername(null);
      }
    });
  }, [auth]);

  const logOut = () => {
    auth.signOut();
    navigate("/");
  };

  const logIn = () => {
    navigate("/home");
  };
  return (
    <div className={`flex justify-between items center p-3 w-10/12 mx-auto`}>
      <Link to="/home">
        <div
          className={`font-inter text-regalBlue text-3xl md:text-xl font-extrabold flex items-center gap-1`}
        >
          <MdLocationPin className={`text-primaryRed`} />
          <p>Atlas</p>
        </div>
      </Link>
      <div className={`flex`}>
        <Link to="/">
          <ControlButton
            name={"Trending"}
            className={`hidden md:inline md:px-6 md:py-3 md:font-medium hover:text-regalBlue`}
          />
        </Link>
        <Link to="/articles">
          <ControlButton
            name={"Resources"}
            className={`hidden md:inline md:px-6 md:py-3 md:font-medium hover:text-regalBlue`}
          />
        </Link>
        <Link to="/restaurants">
          <ControlButton
            name={"Nearby"}
            className={`hidden md:inline md:px-6 md:py-3 md:font-medium hover:text-regalBlue`}
          />
        </Link>
        <ControlButton
          name={"Hackatons"}
          className={`hidden md:inline md:px-6 md:py-3 md:font-medium hover:text-regalBlue`}
        />
        <Link to="/faq">
          <ControlButton
            name={"FAQ"}
            className={`hidden md:inline md:px-6 md:py-3 md:font-medium hover:text-regalBlue`}
          />
        </Link>

        <ControlButton
          name={userName ? "Logout" : "Log in"}
          className={`hidden md:inline md:px-6 md:py-3 md:font-medium hover:text-regalBlue`}
          onClick={userName ? logOut : () => navigate("/login")}
        />

        <ControlButton
          name={"Download App"}
          className={`px-6 py-2 whitespace-no-wrap bg-primaryRed rounded-lg shadow-md text-white text-sm font-medium font-inter`}
        />
      </div>
    </div>
  );
}
