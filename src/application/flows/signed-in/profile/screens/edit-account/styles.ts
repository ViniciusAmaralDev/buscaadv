import styled from "styled-components/native";
import { Layout } from "../../../../../components/layout";

export const Container = styled(Layout).attrs({
  scrollEnabled: true,
  contentContainerStyle: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
})``;
