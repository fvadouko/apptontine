import * as React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Margin, Color, FontFamily } from "../GlobalStyles";

const IDFormuleContainer = () => {
  return (
    <View style={[styles.card, styles.mt10]}>
      <Image
        style={styles.cardChild}
        resizeMode="cover"
        source={require("../assets/rectangle34624630.png")}
      />
      <View style={[styles.left, styles.ml16]}>
        <Text style={styles.putNameHere}>ID Formule</Text>
        <View style={[styles.groupChildLayout, styles.mt4]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={[styles.ac45pl, styles.ac45plTypo]}>AC45PL</Text>
        </View>
      </View>
      <Text style={[styles.copier, styles.ml16, styles.ac45plTypo]}>
        copier
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: Margin.m_9xs,
  },
  ml16: {
    marginLeft: Margin.m_base,
  },
  groupChildLayout: {
    height: 34,
    width: 133,
  },
  ac45plTypo: {
    color: Color.black,
    textAlign: "left",
    lineHeight: 16,
    fontSize: 16,
  },
  cardChild: {
    borderRadius: 100,
    width: 38,
    height: 38,
  },
  putNameHere: {
    fontFamily: FontFamily.interRegular,
    color: Color.gray_100,
    width: 85,
    textAlign: "left",
    lineHeight: 16,
    fontSize: 16,
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: 7,
    backgroundColor: Color.white,
    position: "absolute",
  },
  ac45pl: {
    top: 9,
    left: 37,
    fontFamily: FontFamily.spaceGroteskRegular,
    position: "absolute",
  },
  left: {
    flex: 1,
    alignItems: "center",
  },
  copier: {
    textDecoration: "underline",
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
  },
  card: {
    borderRadius: 12,
    backgroundColor: Color.khaki,
    width: 317,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignItems: "center",
  },
});

export default IDFormuleContainer;
