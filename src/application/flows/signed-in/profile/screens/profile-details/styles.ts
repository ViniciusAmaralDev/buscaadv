import styled from "styled-components/native";
import { Layout } from "../../../../../components/layout";
import { Wrapper } from "../../../../../components/wrapper";
import { Text } from "../../../../../components/base/text";
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { BadgeList as CustomBadgeList } from "../../../../../components/badge-list";

interface LabelProps {
  secondary?: boolean;
}

export const Container = styled(Layout)`
  flex: 1;
  gap: 16px;
`;

export const BadgeList = styled(CustomBadgeList).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { gap: 8, paddingHorizontal: 16 },
})`
  flex: none;
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

export const StartIcon2 = styled(FontAwesome).attrs(({ theme }) => ({
  size: 15,
  name: "star",
  color: theme.colors.primary.main,
}))``;

export const PhoneIcon = styled(FontAwesome).attrs(({ theme }) => ({
  size: 15,
  name: "phone",
  color: theme.colors.primary.main,
}))``;

export const RouteIcon = styled(FontAwesome5).attrs(({ theme }) => ({
  size: 15,
  name: "route",
  color: theme.colors.primary.main,
}))``;

export const ChatIcon = styled(Ionicons).attrs(({ theme }) => ({
  size: 15,
  name: "chatbox-ellipses",
  color: theme.colors.primary.main,
}))``;

export const PinIcon = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
  size: 15,
  name: "map-marker-radius",
  color: theme.colors.primary.main,
}))``;
