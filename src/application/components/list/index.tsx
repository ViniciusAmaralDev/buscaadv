import { FlatList } from "./styles";
import React, { forwardRef } from "react";
import { FlatListProps } from "react-native";

export const List = forwardRef<any, FlatListProps<any>>(({ ...rest }, ref) => (
  <FlatList ref={ref} {...rest} />
));
