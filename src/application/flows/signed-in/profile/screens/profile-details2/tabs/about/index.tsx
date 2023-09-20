import React from "react";
import { useAuth } from "../../../../../../../hook/useAuth";
import { Divider } from "../../../../../../../components/divider";
import { Container, Content, Label } from "./styles";
import { Avaliate } from "./components/avaliate";
import { AvaliationList, IAvaliation } from "./components/avaliation-list";
import { IUser } from "../../../../../../../models/IUser";

interface AboutTabProps {
  user: IUser;
}

export const AboutTab = ({ user }: AboutTabProps) => {
  const avaliations: IAvaliation[] = [
    {
      author: "a8fa18a4-fa61-4cae-8eec-c350913df99d",
      stars: 2,
      comment:
        "Infelizmente não é um bom profissional porque ele enrola muito pra resolver os problemas!",
      createdAt: new Date().toString(),
    },
    {
      author: "f40e51dc-b8bc-4ce6-b734-97e2e989141f",
      stars: 5,
      comment: "Muito bom trabalho, recomendo!",
      createdAt: new Date().toString(),
    },
  ];

  return (
    <Container>
      <Content>
        <Label>
          "Escritório de advocacia especializado em contratos, direito civil,
          pensão alimentícia, previdenciário, criminal e imobiliário. Também
          prestamos serviços de acessoria jurídica a empresas".
        </Label>
      </Content>

      <Divider />

      <AvaliationList avaliations={avaliations} />

      <Divider />

      <Avaliate user={user} />
    </Container>
  );
};
