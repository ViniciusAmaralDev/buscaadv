import React from "react";
import { List } from "@/application/components/list";
import { Stars } from "@/application/components/stars";
import { useStorage } from "@/application/hook/useStorage";
import { IAvaliation } from "@/application/models/IAvaliation";
import {
  Card,
  Label,
  Container,
  ImageProfile,
  VerticalContainer,
  HorizontalContainer,
} from "./styles";

interface AvaliationListProps {
  avaliations: IAvaliation[];
}

export const AvaliationList = ({ avaliations }: AvaliationListProps) => {
  const { users } = useStorage();

  return (
    <Container>
      {avaliations.length > 0 && (
        <List
          horizontal
          data={avaliations}
          contentContainerStyle={{
            gap: 16,
            paddingVertical: 8,
            paddingHorizontal: 16,
          }}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => {
            const user = users.find((user) => user.id === item.author);

            return (
              <Card>
                <HorizontalContainer>
                  <ImageProfile uri={user.photo} />

                  <VerticalContainer>
                    <Label secondary>{user.name}</Label>
                    <Stars amount={item.stars} />
                  </VerticalContainer>
                </HorizontalContainer>

                <Label>{item.comment}</Label>
              </Card>
            );
          }}
        />
      )}
    </Container>
  );
};
