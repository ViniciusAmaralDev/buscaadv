import styled from "styled-components/native";
import { Layout } from "@/application/components/layout";
import { Text } from "@/application/components/base/text";
import { Wrapper } from "@/application/components/wrapper";
import { TextButton } from "@/application/components/text-button";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export const Container = styled(Layout).attrs({
  paddingTopDisabled: true,
})`
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary.dark};
`;

export const VerticalContainer = styled(Wrapper)`
  flex: 1;
  justify-content: center;
`;

export const FormContainer = styled(Wrapper)`
  gap: 16px;
  width: 100%;
  padding: 24px 16px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white.main};
`;

export const Title = styled(Text)`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white.main};
`;

export const SignUpButton = styled(TextButton).attrs(({ theme }) => ({
  textStyle: { fontFamily: theme.fonts.bold, color: theme.colors.white.main },
}))`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary.dark};
`;

export const SignInButton = styled(TextButton).attrs(({ theme }) => ({
  textStyle: {
    fontSize: 12,
    color: theme.colors.primary.dark,
  },
}))`
  border-radius: 8px;
  align-self: center;
  align-items: center;
  justify-content: center;
`;

export const EmailIcon = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
  size: 20,
  name: "email-outline",
  color: theme.colors.gray.main,
}))``;

export const UserIcon = styled(Feather).attrs(({ theme }) => ({
  size: 20,
  name: "user",
  color: theme.colors.gray.main,
}))``;
