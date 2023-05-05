import { useState } from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@mui/material";

type ICredentials = {
  email: string;
  password: string;
};

type IErrors = {
  emailError: { isEmailError: boolean; error: string };
  passwordError: { isPasswordError: boolean; error: string };
};

interface IForm {
  data: ICredentials;
  errors: IErrors;
}

const SignupForm = (): JSX.Element => {
  const [form, setForm] = useState<IForm>({
    data: {
      email: "",
      password: "",
    },
    errors: {
      emailError: { isEmailError: false, error: "" },
      passwordError: { isPasswordError: false, error: "" },
    },
  });

  const validateInput = (name: string, value: string): void => {
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setForm((prev: IForm) => {
      return {
        ...prev,
        data: { ...prev.data, [event.target.name]: event.target.value },
      };
    });
  };

  const handleSubmit = (event: React.SyntheticEvent): void => {
    const incorrectEmail = form.errors.emailError.isEmailError;
    const incorrectPassword = form.errors.passwordError.isPasswordError;

    event.preventDefault();
    validateInput("email", form.data.email);
    validateInput("password", form.data.password);
    //todo (submit information to database)
    if (!incorrectEmail && !incorrectPassword) {
      // If both incorrectEmail and incorrectPassword are false, then submit the data
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center pt-5"
    >
      <FormControl color="primary" fullWidth>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          onChange={handleChange}
          value={form.data.email}
          type="text"
          name="email"
          required
        />
        {form.errors.emailError.isEmailError && (
          <FormHelperText className="!text-red-500">
            {form.errors.emailError.error}
          </FormHelperText>
        )}
      </FormControl>

      <FormControl color="primary" margin="dense" fullWidth className="!my-10">
        <InputLabel htmlFor="passowrd">Password</InputLabel>
        <Input
          id="passowrd"
          aria-describedby="passowrd"
          onChange={handleChange}
          value={form.data.password}
          type="password"
          name="password"
          required
        />
        {form.errors.passwordError.isPasswordError && (
          <FormHelperText className="!text-red-500">
            {form.errors.passwordError.error}
          </FormHelperText>
        )}
      </FormControl>

      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default SignupForm;
