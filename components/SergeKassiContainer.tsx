import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Margin, FontFamily, Color } from "../GlobalStyles";

const SergeKassiContainer = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.imageParent}>
        <Image
          style={styles.imageIcon}
          resizeMode="cover"
          source={require("../assets/image1.png")}
        />
        <Text style={[styles.sergeKassi, styles.ml13]}>Serge Kassi</Text>
      </View>
      <View style={[styles.frameChild, styles.mt10]} />
    </View>
  );
};

const styles = StyleSheet.create({
  ml13: {
    marginLeft: Margin.m_smi,
  },
  mt10: {
    marginTop: Margin.m_3xs,
  },
  imageIcon: {
    width: 43,
    height: 46,
  },
  sergeKassi: {
    fontSize: 22,
    letterSpacing: -0.3,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.black,
    textAlign: "center",
    width: 157,
    height: 28,
  },
  imageParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameChild: {
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 1,
    width: 328,
    height: 1,
  },
  frameParent: {
    position: "absolute",
    top: 13,
    left: 0,
    width: 335,
  },
});

export default SergeKassiContainer;
