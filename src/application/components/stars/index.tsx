import React from "react";
import { Container, StarIcon } from "./styles";
import { Button } from "../base/button";

interface StarProps {
  size?: number;
  amount: number;
  onChange?: (value: number) => void;
}

export const Stars = ({ amount, size, onChange }: StarProps) => (
  <Container>
    {Array(5)
      .fill("")
      .map((_, index) => (
        <Button
          key={index}
          onPress={() => {
            if (onChange) onChange(index + 1);
          }}
        >
          <StarIcon size={size} contained={index < amount} />
        </Button>
      ))}
  </Container>
);
