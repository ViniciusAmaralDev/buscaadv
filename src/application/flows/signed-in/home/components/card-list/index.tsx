import React from "react";
import { Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { IUser } from "../../../../../models/IUser";
import { Card, ImageProfile } from "./styles";
import { Text } from "../../../../../components/base/text";
import { useTheme } from "styled-components";

interface CardListProps {
  data: IUser[];
}

export const CardList = ({ data }: CardListProps) => {
  const theme = useTheme();

  return (
    <Carousel
      data={data}
      height={150}
      loop={false}
      mode="parallax"
      width={Dimensions.get("screen").width}
      scrollAnimationDuration={1000}
      style={{
        backgroundColor: theme.colors.gray.light,
      }}
      renderItem={({ item, index }) => (
        <Card key={index}>
          {/* {item?.photo && <ImageProfile source={{ uri: item?.photo }} />} */}
          <Text>{item.name}</Text>
        </Card>
      )}
    />
  );
};
