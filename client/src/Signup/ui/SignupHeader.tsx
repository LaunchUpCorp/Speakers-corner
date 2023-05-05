import Typography from "@mui/material/Typography";
import icon from "../../assets/images/lock-icon-registration.jpg";

const SignupHeader = (): JSX.Element => {
  return (
    <div className="my-5 flex flex-col items-center justify-center">
      <img src={icon} alt="lock icon" className="h-10 w-10 object-contain" />
      <Typography variant="h2" className="text-lg md:text-2xl">
        Sign Up
      </Typography>
    </div>
  );
};

export default SignupHeader;
