import React from "react";
import SignupHeader from "./ui/SignupHeader";
import SignupForm from "./ui/SignupForm";
import registrationImage from "../assets/images/registration-image.jpg";

const Signup = () => {
  return (
    <div className="flex h-full w-full">
      <div className="flex-1">
        <img
          src={registrationImage}
          alt="Registration Image"
          className="hidden h-full w-full md:block"
        />
      </div>
      <div className="flex-2 mx-10">
        <SignupHeader />
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
