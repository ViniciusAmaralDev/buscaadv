import styled from "styled-components/native";
import { Wrapper } from "../../../../../../../components/wrapper";

export const HorizontalContainer = styled(Wrapper).attrs({
  direction: "row",
})`
  gap: 16px;
  flex-wrap: wrap;
`;
