import { ArrowIcon, HorizontalContainer } from "./styles";
import React, { PropsWithChildren, useState } from "react";
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
    <Wrapper>
      <HorizontalContainer
        isOpened={isOpened}
        onPress={() => setIsOpened((value) => !value)}
      >
        <Text>{label}</Text>
        <ArrowIcon isOpened={isOpened} />
      </HorizontalContainer>

      {isOpened && <Wrapper style={{ gap: 16 }}>{children}</Wrapper>}
    </Wrapper>
  );
};
