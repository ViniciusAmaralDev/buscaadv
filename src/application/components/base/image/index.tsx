import React, { ReactNode, useState } from "react";
import { ActivityIndicator, ImageBackgroundProps } from "react-native";
import { ImageBackground, UserIcon } from "./styles";
import { useTheme } from "styled-components";

export interface ImageProps extends Omit<ImageBackgroundProps, "source"> {
  uri?: string;
  size: number;
  icon?: ReactNode;
}

export const Image = ({ uri, icon, size, ...rest }: ImageProps) => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ImageBackground
      size={size}
      source={{ uri }}
      onLoadEnd={() => setIsLoading(false)}
      onLoadStart={() => setIsLoading(true)}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={theme.colors.primary.main} />
      ) : (
        !uri && <>{icon ? <>{icon}</> : <UserIcon size={size / 2} />}</>
      )}
    </ImageBackground>
  );
};
