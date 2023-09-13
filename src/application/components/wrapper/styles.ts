import styled from "styled-components/native";

interface ContainerProps {
  direction: "row" | "column";
}

export const Container = styled.View<ContainerProps>`
  flex-direction: ${({ direction }) => direction};
`;
