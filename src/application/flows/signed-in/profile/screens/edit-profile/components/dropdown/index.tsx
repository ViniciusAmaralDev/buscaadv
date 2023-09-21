import React, { PropsWithChildren, useState } from "react";
import { ArrowIcon, Container, HorizontalContainer } from "./styles";
import { Text } from "../../../../../../../components/base/text";
import { Button } from "../../../../../../../components/base/button";
import {
  InputForm,
  InputFormProps,
} from "../../../../../../../components/input-form";
import { Wrapper } from "../../../../../../../components/wrapper";

interface DropdownProps extends PropsWithChildren {
  label: string;
  open?: boolean;
}

export const Dropdown = ({ label, open, children }: DropdownProps) => {
  const [isOpened, setIsOpened] = useState(open ?? false);

  return (
    <Container>
      <HorizontalContainer isOpened={isOpened}>
        <Text>{label}</Text>

        <Button onPress={() => setIsOpened((value) => !value)}>
          <ArrowIcon isOpened={isOpened} />
        </Button>
      </HorizontalContainer>

      {isOpened && <Wrapper style={{ gap: 16 }}>{children}</Wrapper>}
    </Container>
  );
};