import { IForm } from "./index";
const validateInput = (
  name: string,
  value: string,
  setForm: (value: React.SetStateAction<IForm>) => void
): void => {
  const emailRegExp = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const passwordRegExp =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

  switch (name) {
    case "email":
      if (!emailRegExp.test(value)) {
        setForm((prev: IForm) => {
          return {
            ...prev,
            errors: {
              ...prev.errors,
              emailError: {
                isEmailError: true,
                error: "Please Enter A Valid Email!",
              },
            },
          };
        });
      } else {
        setForm((prev: IForm) => {
          return {
            ...prev,
            errors: {
              ...prev.errors,
              emailError: {
                isEmailError: false,
                error: "",
              },
            },
          };
        });
      }
      break;

    case "password":
      if (!passwordRegExp.test(value)) {
        setForm((prev: IForm) => {
          return {
            ...prev,
            errors: {
              ...prev.errors,
              passwordError: {
                isPasswordError: true,
                error:
                  "Password Must Have At Least 8 Characters And Include At Least One Number And Captial Letter",
              },
            },
          };
        });
      } else {
        setForm((prev: IForm) => {
          return {
            ...prev,
            errors: {
              ...prev.errors,
              passwordError: { isPasswordError: false, error: "" },
            },
          };
        });
      }
      break;
    default:
      break;
  }
};

export { validateInput };
