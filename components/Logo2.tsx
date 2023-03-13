import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  ImageBackground,
  StyleSheet,
} from "react-native";

type Logo2IconType = {
  style?: StyleProp<ViewStyle>;
};

const Logo2Icon = ({ style }: Logo2IconType) => {
  return (
    <ImageBackground
      style={[styles.logo2Icon, style]}
      resizeMode="cover"
      source={require("../assets/logo2.png")}
    />
  );
};

const styles = StyleSheet.create({
  logo2Icon: {
    width: 130,
    height: 166,
  },
});

export default Logo2Icon;
