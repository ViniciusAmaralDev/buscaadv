import React from "react";
import {
  Container,
  Content,
  HorizontalContainer,
  ImageProfile,
  SendButton,
  Subtitle,
  Title,
} from "./styles";
import { Wrapper } from "../../../../../../../../../components/wrapper";
import { Text } from "../../../../../../../../../components/base/text";
import { Stars } from "../../../../../../../../../components/stars";
import { InputForm } from "../../../../../../../../../components/input-form";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IUser } from "../../../../../../../../../models/IUser";

interface AvaliateProps {
  user: IUser;
}

export const Avaliate = ({ user }: AvaliateProps) => {
  const schema = z.object({
    stars: z.number().default(0),
    comment: z.string().nonempty({ message: "obrigatório" }),
  });

  type FormData = z.infer<typeof schema>;

  const { control, watch, setValue, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { stars, comment } = watch();

  const handleSubmitForm = async (values: FormData) => {};

  return (
    <Container>
      <Wrapper>
        <Text>Avaliar e Comentar</Text>
        <Subtitle>
          Compartilhe sua experiência para ajudar outras pessoas.
        </Subtitle>
      </Wrapper>

      <Content>
        <HorizontalContainer justify="space-between">
          <HorizontalContainer>
            <ImageProfile uri={user.photo} />
            <Wrapper>
              <Text>{user.name}</Text>
              <Stars
                size={24}
                amount={stars ?? 1}
                onChange={(value) => setValue("stars", value)}
              />
            </Wrapper>
          </HorizontalContainer>

          <SendButton
            isActive={!!comment}
            onPress={handleSubmit(handleSubmitForm)}
          >
            Enviar
          </SendButton>
        </HorizontalContainer>

        <InputForm
        contrast
          multiline
          name="comment"
          control={control}
          placeholder="Escreva aqui o seu comentário..."
        />
      </Content>
    </Container>
  );
};
