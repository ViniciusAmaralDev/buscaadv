import React from "react";
import { ScrollView, ScrollViewProps } from "react-native";
import { Badge, BadgeProps } from "../badge";

interface BadgeListProps extends ScrollViewProps {
  badges: BadgeProps[];
}

export const BadgeList = ({ badges, ...rest }: BadgeListProps) => (
  <ScrollView {...rest}>
    {badges.map((rest, index) => (
      <Badge key={index} {...rest} />
    ))}
  </ScrollView>
);
