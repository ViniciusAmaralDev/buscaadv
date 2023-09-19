import styled from "styled-components/native";
import { Layout } from "../../../../../components/layout";
import { Text } from "../../../../../components/base/text";
import { Wrapper } from "../../../../../components/wrapper";
import { FontAwesome } from "@expo/vector-icons";
import { Button } from "../../../../../components/base/button";

interface LabelProps {
  secondary?: boolean;
}

interface SubOfficeContentProps {
  showBorder?: boolean;
}

export const Container = styled(Layout).attrs({
  scrollEnabled: true,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { gap: 16, padding: 16 },
})``;

export const VerticalContainer = styled(Wrapper)`
  gap: 4px;
`;

export const HorizontalContainer = styled(Wrapper).attrs({
  direction: "row",
})`
  gap: 8px;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled(Text)<LabelProps>`
  font-size: ${({ secondary }) => (secondary ? 12 : 14)}px;
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.gray.dark : theme.colors.black.main};
`;

export const Content = styled.View`
  gap: 16px;
  flex-grow: 1;
  min-height: 40px;
  padding: 8px 16px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray.main};
  background-color: ${({ theme }) => theme.colors.white.main};
`;

export const SubOfficeContainer = styled(Wrapper)<SubOfficeContentProps>`
  min-height: 40px;
  padding: 0px 16px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray.main};
  background-color: ${({ theme }) => theme.colors.white.main};
`;

export const SubOfficeContent = styled(Wrapper)<SubOfficeContentProps>`
  padding: 16px 0px;
  border-bottom-color: ${({ theme }) => theme.colors.gray.main};
  border-bottom-width: ${({ showBorder }) => (showBorder ? 0.3 : 0)}px;
`;

export const Divider = styled.View`
  margin: 8px 0px;
`;

export const ImageProfile = styled.Image.attrs({
  imageStyle: { borderRadius: 4 },
})`
  height: 300px;
  border-radius: 4px;
`;

export const WhatsAppButton = styled(Button)`
  padding: 8px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.green.main};
`;

export const TextButton = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white.main};
`;

export const WhatsAppIcon = styled(FontAwesome).attrs(({ theme }) => ({
  size: 20,
  name: "whatsapp",
  color: theme.colors.white.main,
}))``;
