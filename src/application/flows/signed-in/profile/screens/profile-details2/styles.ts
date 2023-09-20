import styled from "styled-components/native";
import { Layout } from "../../../../../components/layout";
import { Wrapper } from "../../../../../components/wrapper";
import { Text } from "../../../../../components/base/text";
import { Image } from "../../../../../components/base/image";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Button } from "../../../../../components/base/button";

interface LabelProps {
  secondary?: boolean;
}

export const Container = styled(Layout).attrs({
  scrollEnabled: true,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { gap: 16 },
})``;

export const StarsContainer = styled(Wrapper).attrs({
  direction: "row",
})`
  gap: 4px;
`;

export const HorizontalContainer = styled(Wrapper).attrs({
  direction: "row",
})`
  gap: 16px;
  padding: 0px 16px;
  justify-content: space-between;
`;

export const WrapperHorizontal = styled(Wrapper).attrs({
  direction: "row",
})`
  flex: 1;
  gap: 8px;
  align-items: center;
`;

export const VerticalContainer = styled(Wrapper)`
  flex: 1;
  gap: 2px;
`;

export const Label = styled(Text)<LabelProps>`
  font-size: ${({ secondary }) => (secondary ? 10 : 14)}px;
  font-family: ${({ theme, secondary }) =>
    secondary ? theme.fonts.regular : theme.fonts.medium};
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.gray.dark : theme.colors.black.main};
`;

export const ImageProfile = styled(Image).attrs({
  imageStyle: { borderRadius: 20 },
})`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const BadgeListContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { gap: 8, paddingHorizontal: 16 },
  showsHorizontalScrollIndicator: false,
})``;

export const Badge = styled(Button)`
  gap: 8px;
  padding: 4px 8px;
  border-width: 1px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  border-color: ${({ theme }) => theme.colors.primary.main};
`;

export const BadgeText = styled(Text)<LabelProps>`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary.main};
`;

export const Content = styled(Wrapper)`
  padding: 0px 16px;
`;

export const Divider = styled.View`
  border-bottom-width: 0.3px;
  border-bottom-color: ${({ theme }) => theme.colors.gray.main};
`;

export const Title = styled(Text)<LabelProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.black.main};
`;

export const Description = styled(Text)<LabelProps>`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray.dark};
`;

export const StartIcon = styled(FontAwesome).attrs(({ theme, contained }) => ({
  size: 15,
  name: contained ? "star" : "star-o",
  color: contained ? theme.colors.yellow.main : theme.colors.gray.main,
}))``;

export const StartIcon2 = styled(FontAwesome).attrs(({ theme, contained }) => ({
  size: 15,
  name: "star",
  color: theme.colors.primary.main,
}))``;

export const PhoneIcon = styled(FontAwesome).attrs(({ theme, contained }) => ({
  size: 15,
  name: "phone",
  color: theme.colors.primary.main,
}))``;

export const RouteIcon = styled(FontAwesome5).attrs(({ theme, contained }) => ({
  size: 15,
  name: "route",
  color: theme.colors.primary.main,
}))``;

export const ChatIcon = styled(Ionicons).attrs(({ theme, contained }) => ({
  size: 15,
  name: "chatbox-ellipses",
  color: theme.colors.primary.main,
}))``;
