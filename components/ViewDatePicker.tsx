import * as React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Image } from "react-native";
import ViewSergeKassi from "./ViewSergeKassi";
import { Margin, Color, FontFamily } from "../GlobalStyles";

const ViewDatePicker = () => {
  const [lineActivityIndicator1Animating, setLineActivityIndicator1Animating] =
    useState(true);

  return (
    <View style={styles.frameParent}>
      <View style={styles.parent}>
        <Text style={styles.text}>13/12/2022</Text>
        <ActivityIndicator
          style={[styles.frameChild, styles.mt3]}
          size="small"
          color="#bebebe"
          animating={lineActivityIndicator1Animating}
        />
      </View>
      <View style={[styles.list, styles.mt7]}>
        <Image
          style={styles.listChild}
          resizeMode="cover"
          source={require("../assets/rectangle346246301.png")}
        />
        <View style={[styles.left, styles.ml12]}>
          <Text style={[styles.sergeKassi, styles.sergeKassiLayout]}>
            Serge kassi
          </Text>
          <Text
            style={[
              styles.marqueBientDe,
              styles.mt5,
              styles.h00Typo,
              styles.sergeKassiLayout,
            ]}
          >{`Marque bient de retirer 50.000f `}</Text>
          <Text style={[styles.h00, styles.mt5, styles.h00Typo]}>16h00</Text>
        </View>
      </View>
      <ViewSergeKassi
        instantText={require("../assets/rectangle346246302.png")}
        instantText2="16h00"
        propMarginTop={7}
        propHeight={67}
        propColor="#6f6f6f"
        propColor1="#6f6f6f"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt3: {
    marginTop: Margin.m_10xs,
  },
  mt5: {
    marginTop: Margin.m_8xs,
  },
  ml12: {
    marginLeft: Margin.m_xs,
  },
  mt7: {
    marginTop: Margin.m_6xs,
  },
  sergeKassiLayout: {
    width: 249,
    color: Color.dimgray_100,
  },
  h00Typo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  text: {
    fontSize: 16,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.black,
    textAlign: "left",
  },
  frameChild: {
    width: 101,
    height: 1,
  },
  parent: {
    alignItems: "center",
  },
  listChild: {
    borderRadius: 100,
    width: 40,
    height: 40,
  },
  sergeKassi: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    textAlign: "left",
  },
  marqueBientDe: {
    fontSize: 11,
  },
  h00: {
    fontSize: 8,
    color: Color.gray_600,
    width: 80,
  },
  left: {
    flex: 1,
  },
  list: {
    borderStyle: "solid",
    borderColor: "rgba(23, 23, 23, 0.12)",
    borderBottomWidth: 0.5,
    width: 359,
    height: 67,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 16,
    alignItems: "center",
  },
  frameParent: {
    position: "absolute",
    top: 662,
    left: 16,
    alignItems: "center",
  },
});

export default ViewDatePicker;
