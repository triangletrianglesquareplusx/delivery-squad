import React from "react";
import { useNavigate } from "react-router-dom";
import auth from "../Firebase/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

function RegistrationPage() {
  const register = () => {};
  return (
    <div>
      <div className="container bg-scaledDownWhite">
        <p>Register and be part of our app!</p>
      </div>
    </div>
  );
}

export default RegistrationPage;
