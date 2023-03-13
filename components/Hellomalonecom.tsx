import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

type HellomalonecomType = {
  style?: StyleProp<ViewStyle>;
};

const Hellomalonecom = ({ style }: HellomalonecomType) => {
  return <Text style={[styles.hellomalonecom, style]}>Serge Kassi</Text>;
};

const styles = StyleSheet.create({
  hellomalonecom: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.gray_200,
    textAlign: "left",
  },
});

export default Hellomalonecom;
