import SignupHeader from "./ui/SignupHeader";
import SignupForm from "./ui/SignupForm";
import Header from "../components/Header";

const Signup = (): JSX.Element => {
  return (
    <div className="h-full w-full">
      <Header />
      <div className=" mx-10 my-9 h-full md:m-auto md:w-[500px] ">
        <SignupHeader />
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
