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

export const AvaliationsTab = ({ user }: AboutTabProps) => {
  const avaliations: IAvaliation[] = [];

  return (
    <Container>
      {user.avaliations && (
        <>
          <AvaliationList avaliations={avaliations} />

          <Divider />
        </>
      )}

      <Avaliate user={user} />
    </Container>
  );
};
