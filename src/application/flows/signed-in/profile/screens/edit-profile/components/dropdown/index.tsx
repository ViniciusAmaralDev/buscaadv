import { ArrowIcon, HorizontalContainer } from "./styles";
import React, { PropsWithChildren, useState } from "react";

// COMPONENTS
import { Text } from "@/application/components/base/text";
import { Wrapper } from "@/application/components/wrapper";

interface DropdownProps extends PropsWithChildren {
  label: string;
  open?: boolean;
  required?: boolean;
}

export const Dropdown = ({
  label,
  open,
  children,
  required = false,
}: DropdownProps) => {
  const [isOpened, setIsOpened] = useState(open ?? false);

  return (
    <Wrapper>
      <HorizontalContainer
        isOpened={isOpened}
        onPress={() => setIsOpened((value) => !value)}
      >
        <Text>
          {label}
          {required && "*"}
        </Text>
        <ArrowIcon isOpened={isOpened} />
      </HorizontalContainer>

      {isOpened && <Wrapper style={{ gap: 16 }}>{children}</Wrapper>}
    </Wrapper>
  );
};
