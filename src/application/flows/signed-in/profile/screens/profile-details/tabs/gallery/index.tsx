import React from "react";
import { Container, EmptyAnimation, EmptyContainer, Label } from "./styles";

interface PhotoTabProps {
  gallery: string[];
}

export const GalleryTab = ({ gallery }: PhotoTabProps) => {
  return (
    <Container>
      {gallery.length === 0 ? (
        <EmptyContainer>
          <EmptyAnimation />
          <Label>Nenhuma imagem adicionada!</Label>
        </EmptyContainer>
      ) : (
        <>
          <></>
        </>
      )}
    </Container>
  );
};
