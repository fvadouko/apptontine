import * as React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import ViewSergeKassi from "./ViewSergeKassi";
import { Margin, FontFamily, Color } from "../GlobalStyles";

const HierView = () => {
  const [lineActivityIndicatorAnimating, setLineActivityIndicatorAnimating] =
    useState(true);

  return (
    <View style={styles.frameParent}>
      <View style={styles.hierParent}>
        <Text style={styles.hier}>Hier</Text>
        <ActivityIndicator
          style={[styles.frameChild, styles.mt3]}
          size="small"
          color="#bebebe"
          animating={lineActivityIndicatorAnimating}
        />
      </View>
      <ViewSergeKassi
        instantText={require("../assets/rectangle346246301.png")}
        instantText2="16h00"
        propMarginTop={7}
        propHeight={67}
        propColor="#6f6f6f"
        propColor1="#6f6f6f"
      />
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
  mt7: {
    marginTop: Margin.m_6xs,
  },
  hier: {
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
  hierParent: {
    alignItems: "center",
  },
  frameParent: {
    position: "absolute",
    top: 473,
    left: 16,
    alignItems: "center",
  },
});

export default HierView;
