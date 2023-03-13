import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

type SEPARATEURType = {
  style?: StyleProp<ViewStyle>;
};

const SEPARATEUR = ({ style }: SEPARATEURType) => {
  return (
    <View style={[styles.separateur, style]}>
      <View style={styles.separateurChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  separateurChild: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.dimgray_200,
  },
  separateur: {
    width: 266,
    height: 1,
  },
});

export default SEPARATEUR;
