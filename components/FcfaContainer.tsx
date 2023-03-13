import * as React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import { Margin, Color, FontFamily } from "../GlobalStyles";

const FcfaContainer = () => {
  return (
    <View style={[styles.card, styles.mt10, styles.cardFlexBox]}>
      <ImageBackground
        style={styles.cardChild}
        resizeMode="cover"
        source={require("../assets/rectangle34624630.png")}
      />
      <View style={[styles.left, styles.ml16]}>
        <Text style={[styles.putNameHere, styles.putFlexBox, styles.retirTypo]}>
          Alpha1
        </Text>
        <Text style={[styles.putNameHere1, styles.mt4, styles.putFlexBox]}>
          200.000 Fcfa
        </Text>
      </View>
      <Pressable style={[styles.label, styles.ml16, styles.cardFlexBox]}>
        <Text style={[styles.retir, styles.putFlexBox, styles.retirTypo]}>
          Retiré
        </Text>
      </Pressable>
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
  cardFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  putFlexBox: {
    textAlign: "left",
    color: Color.gray_100,
  },
  retirTypo: {
    fontFamily: FontFamily.spaceGroteskRegular,
    color: Color.gray_100,
  },
  cardChild: {
    borderRadius: 100,
    width: 38,
    height: 38,
  },
  putNameHere: {
    fontSize: 14,
    textDecoration: "underline",
    alignSelf: "stretch",
  },
  putNameHere1: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: FontFamily.spaceGroteskBold,
    alignSelf: "stretch",
  },
  left: {
    flex: 1,
  },
  retir: {
    fontSize: 12,
  },
  label: {
    borderRadius: 24,
    backgroundColor: Color.red_200,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  card: {
    borderRadius: 12,
    backgroundColor: Color.khaki,
    overflow: "hidden",
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignSelf: "stretch",
  },
});

export default FcfaContainer;
