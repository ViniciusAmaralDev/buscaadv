import React from "react";
import { Container, Label } from "./styles";
import { InputForm } from "../../../components/input-form";

import zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const SignIn = () => {
  const { control } = useForm();

  return (
    <Container>
      <Label>busca adv</Label>
      <InputForm
        name="password"
        control={control}
        variant="underline"
        placeholder="E-mail"
      />
    </Container>
  );
};
