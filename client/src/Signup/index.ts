type ICredentials = {
  email: string;
  password: string;
};

type IErrors = {
  emailError: { isEmailError: boolean; error: string };
  passwordError: { isPasswordError: boolean; error: string };
};

export interface IForm {
  data: ICredentials;
  errors: IErrors;
}
