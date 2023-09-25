import styled from "styled-components/native";
import { Text } from "@/application/components/base/text";
import { Wrapper } from "@/application/components/wrapper";
import { Image } from "@/application/components/base/image";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

interface LabelProps {
  secondary?: boolean;
}

interface HorizontalContainerProps {
  justify: string;
}

export const Container = styled(Wrapper)`
  gap: 16px;
  padding: 0px 16px 16px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary.dark};
`;

export const VerticalContainer = styled(Wrapper)`
  gap: -4px;
  justify-content: center;
`;

export const HorizontalContainer = styled(Wrapper).attrs({
  direction: "row",
})<HorizontalContainerProps>`
  gap: 8px;
  flex-grow: 1;
  align-items: center;
  justify-content: ${({ justify }) => justify ?? "flex-start"};
`;

export const IconContainer = styled(Wrapper).attrs({
  direction: "row",
})`
  gap: 16px;
`;

export const Label = styled(Text)<LabelProps>`
  font-size: ${({ secondary }) => (secondary ? 10 : 14)}px;
  font-family: ${({ theme, secondary }) =>
    secondary ? theme.fonts.regular : theme.fonts.medium};
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.gray.main : theme.colors.white.main};
`;

export const ImageProfile = styled(Image).attrs({
  imageStyle: { borderRadius: 20 },
})`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const NotificationIcon = styled(Ionicons).attrs(({ theme }) => ({
  size: 20,
  name: "notifications",
  color: theme.colors.white.main,
}))``;

export const MessageIcon = styled(MaterialCommunityIcons).attrs(
  ({ theme }) => ({
    size: 20,
    name: "email",
    color: theme.colors.white.main,
  })
)``;
