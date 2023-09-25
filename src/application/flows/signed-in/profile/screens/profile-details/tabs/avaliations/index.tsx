import React from "react";
import { Container } from "./styles";
import { Avaliate } from "./components/avaliate";
import { IUser } from "@/application/models/IUser";
import { Divider } from "@/application/components/divider";
import { AvaliationList } from "./components/avaliation-list";
import { useAvaliation } from "@/application/hook/useAvaliation";

interface AboutTabProps {
  user: IUser;
}

export const AvaliationsTab = ({ user }: AboutTabProps) => {
  const { avaliations } = useAvaliation();

  const avaliationList = avaliations.filter((item) => item.attorney === user.id);

  return (
    <Container>
      {avaliationList.length > 0 && (
        <>
          <AvaliationList avaliations={avaliationList} />

          <Divider />
        </>
      )}

      <Avaliate user={user} />
    </Container>
  );
};
