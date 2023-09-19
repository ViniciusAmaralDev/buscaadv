import React, { useMemo } from "react";
import {
  Container,
  Content,
  HorizontalContainer,
  ImageProfile,
  Label,
  SubOfficeContainer,
  SubOfficeContent,
  VerticalContainer,
  WhatsAppButton,
  WhatsAppIcon,
} from "./styles";
import { Header } from "../../../../../components/header";
import { useStorage } from "../../../../../hook/useStorage";
import { SignedInRootProps } from "../../../../../routes/signed-in/SignedInRootProps";
import { Text } from "../../../../../components/base/text";
import { sendMessageOnWhatsApp } from "../../../../../utils/WhatsApp";
import officesJson from "../../../../../../../offices.json";
import { Button } from "../../../../../components/base/button";
import { useAuth } from "../../../../../hook/useAuth";

export const ProfileDetails = ({
  route,
}: SignedInRootProps<"ProfileDetails">) => {
  const { id } = route.params;

  const { user } = useAuth();
  const { users } = useStorage();
  const adv = users.find((user) => user.id === id);

  const subOffices = useMemo(() => {
    return officesJson[adv.office];
  }, [adv]);

  const handleWhatsappMessage = () => {
    sendMessageOnWhatsApp(
      adv.phoneNumber,
      `Olá ${adv.name}! Me chamo ${user.name}, venho através do aplicativo Busca Adv e gostaria de saber...`
    );
  };

  return (
    <Container header={<Header label="Detalhes" />}>
      <ImageProfile source={{ uri: adv.photo }} />

      <VerticalContainer>
        <Label secondary>Nome</Label>
        <Content>
          <Label>{adv.name}</Label>
        </Content>
      </VerticalContainer>

      <VerticalContainer>
        <Label secondary>Contato</Label>
        <HorizontalContainer>
          <Content>
            <Label>{adv.phoneNumber}</Label>
          </Content>

          <WhatsAppButton onPress={handleWhatsappMessage}>
            <WhatsAppIcon />
          </WhatsAppButton>
        </HorizontalContainer>
      </VerticalContainer>

      <VerticalContainer>
        <Label secondary>Especialização</Label>
        <Content>
          <Label>{adv.office}</Label>
        </Content>
      </VerticalContainer>

      <VerticalContainer>
        <Label secondary>Sub especializações</Label>
        <SubOfficeContainer>
          {subOffices.map((item: string, index: number) => (
            <SubOfficeContent
              key={index}
              showBorder={index < subOffices.length - 1}
            >
              <Label>{item}</Label>
            </SubOfficeContent>
          ))}
        </SubOfficeContainer>
      </VerticalContainer>
    </Container>
  );
};
