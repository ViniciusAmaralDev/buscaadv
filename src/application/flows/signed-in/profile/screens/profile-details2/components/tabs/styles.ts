import styled from "styled-components/native";
import { Wrapper } from "../../../../../../../components/wrapper";
import { TextButton } from "../../../../../../../components/text-button";

interface TabProps {
  isActive: boolean;
}

export const Container = styled(Wrapper)`
  flex: 1;
`;

export const HorizontalContainer = styled(Wrapper).attrs({
  direction: "row",
})`
  align-items: center;
  justify-content: space-around;
`;

export const Tab = styled(TextButton).attrs(({ theme, isActive }) => ({
  textStyle: {
    fontFamily: isActive ? theme.fonts.bold : theme.fonts.regular,
    color: isActive ? theme.colors.white.main : theme.colors.gray.dark,
  },
}))<TabProps>`
  flex: 1;
  padding: 8px 0px;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.white.main : `${theme.colors.gray.main}60`};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary.main : theme.colors.white.main};
`;
