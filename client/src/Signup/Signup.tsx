import React from "react";
import SignupHeader from "./ui/SignupHeader";
import SignupForm from "./ui/SignupForm";
import registrationImage from "../assets/images/registrationImage.jpg";

const Signup = () => {
  return (
    <div className="flex w-full">
      <div className="flex-auto">
        <img
          src={registrationImage}
          alt="Registration Image"
          className="hidden h-full w-6/12 md:block"
        />
      </div>
      <div className="flex-1 md:w-6/12">
        <SignupHeader />
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
