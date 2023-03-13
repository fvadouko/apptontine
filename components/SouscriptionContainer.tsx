import * as React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import Alpha1View from "./Alpha1View";
import { Margin, FontFamily, Color } from "../GlobalStyles";

const SouscriptionContainer = () => {
  return (
    <View style={styles.souscription}>
      <View style={[styles.list, styles.listFlexBox]}>
        <ImageBackground
          style={styles.listChild}
          resizeMode="cover"
          source={require("../assets/rectangle-34624630.png")}
        />
        <View style={[styles.left, styles.ml12]}>
          <Text style={[styles.alpha1, styles.alpha1Typo]}>Alpha1</Text>
          <Text
            style={[styles.ouvertLe12122012, styles.mt10, styles.alpha1Typo]}
          >
            Ouvert le 12/12/2012
          </Text>
        </View>
        <View style={[styles.listFlexBox, styles.ml12]}>
          <Text style={styles.membres}>4 membres</Text>
        </View>
      </View>
      <Alpha1View />
      <Alpha1View />
      <Alpha1View />
    </View>
  );
};

const styles = StyleSheet.create({
  mt10: {
    marginTop: Margin.m_3xs,
  },
  ml12: {
    marginLeft: Margin.m_xs,
  },
  mt2: {
    marginTop: Margin.m_11xs,
  },
  listFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  alpha1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  listChild: {
    borderRadius: 100,
    width: 38,
    height: 38,
  },
  alpha1: {
    fontSize: 16,
    width: 52,
    color: Color.gray_100,
  },
  ouvertLe12122012: {
    fontSize: 8,
    color: Color.gray_600,
    width: 80,
  },
  left: {
    flex: 1,
  },
  membres: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "right",
    color: Color.gray_100,
  },
  list: {
    borderStyle: "solid",
    borderColor: "rgba(23, 23, 23, 0.12)",
    borderBottomWidth: 0.5,
    width: 359,
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  souscription: {
    position: "absolute",
    top: 426,
    left: 16,
  },
});

export default SouscriptionContainer;
