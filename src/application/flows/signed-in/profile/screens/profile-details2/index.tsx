import React from "react";
import {
  Badge,
  BadgeListContainer,
  BadgeText,
  ChatIcon,
  Container,
  Content,
  Description,
  Divider,
  HorizontalContainer,
  ImageProfile,
  Label,
  PhoneIcon,
  RouteIcon,
  StarsContainer,
  StartIcon,
  StartIcon2,
  Title,
  VerticalContainer,
  WrapperHorizontal,
} from "./styles";
import { SignedInRootProps } from "../../../../../routes/signed-in/SignedInRootProps";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";
import { Header } from "../../../../../components/header";
import { useAuth } from "../../../../../hook/useAuth";
import { Wrapper } from "../../../../../components/wrapper";

export const ProfileDetails = ({
  route,
}: SignedInRootProps<"ProfileDetails">) => {
  const theme = useTheme();
  const { user } = useAuth();

  const Stars = ({ amount }: { amount: number }) => (
    <StarsContainer>
      {Array(5)
        .fill("")
        .map((_, index) => (
          <StartIcon key={index} contained={index < amount} />
        ))}
    </StarsContainer>
  );

  return (
    <Container header={<Header />}>
      <StatusBar style="dark" backgroundColor={theme.colors.gray.light} />

      <HorizontalContainer>
        <VerticalContainer>
          <Label>{user.name}</Label>
          <Label secondary>Advogado {user.office}</Label>
          <Stars amount={4} />
        </VerticalContainer>

        <ImageProfile uri={user.photo} />
      </HorizontalContainer>

      <BadgeListContainer>
        <Badge>
          <RouteIcon />
          <BadgeText>Rotas</BadgeText>
        </Badge>

        <Badge>
          <PhoneIcon />
          <BadgeText>Ligar</BadgeText>
        </Badge>

        <Badge>
          <ChatIcon />
          <BadgeText>Conversar</BadgeText>
        </Badge>

        <Badge>
          <StartIcon2 />
          <BadgeText>Favoritar</BadgeText>
        </Badge>
      </BadgeListContainer>

      <Content>
        <Title>Apresentação</Title>
        <Description>
          "Escritório de advocacia especializado em contratos, direito civil,
          pensão alimentícia, previdenciário, criminal e imobiliário. Também
          prestamos serviços de acessoria jurídica a empresas"
        </Description>
      </Content>

      <Divider />
    </Container>
  );
};
