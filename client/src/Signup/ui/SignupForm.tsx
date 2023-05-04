import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
  Input,
  InputLabel,
  Container,
} from "@mui/material";

interface IForm {
  email: string;
  password: string;
}

const SignupForm = () => {
  const [form, useForm] = useState<IForm>({
    email: "",
    password: "",
  });

  return (
    <div>
      <FormControl>
        <Container>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </Container>
      </FormControl>
      <FormControl>
        <Container>
          <InputLabel htmlFor="passowrd">Password</InputLabel>
          <Input id="passowrd" aria-describedby="passowrd" />
        </Container>
      </FormControl>
    </div>
  );
};

export default SignupForm;
