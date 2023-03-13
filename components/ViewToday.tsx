import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import ViewSergeKassi from "./ViewSergeKassi";
import { Margin, FontFamily, Color } from "../GlobalStyles";

const ViewToday = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.aujourdhuiParent}>
        <Text style={styles.aujourdhui}>Aujourdhui</Text>
        <View style={[styles.frameChild, styles.mt3]} />
      </View>
      <View style={styles.mt7}>
        <ViewSergeKassi
          instantText={require("../assets/rectangle346246301.png")}
          instantText2="A l’instant "
        />
        <ViewSergeKassi
          instantText={require("../assets/rectangle346246302.png")}
          instantText2="A l’instant "
          propMarginTop={7}
          propHeight={67}
          propColor="#171717"
          propColor1="#171717"
        />
        <ViewSergeKassi
          instantText={require("../assets/rectangle346246303.png")}
          instantText2="A l’instant "
          propMarginTop={7}
          propHeight={67}
          propColor="#6f6f6f"
          propColor1="#6f6f6f"
        />
        <ViewSergeKassi
          instantText={require("../assets/rectangle346246304.png")}
          instantText2="A l’instant "
          propMarginTop={7}
          propHeight={67}
          propColor="#6f6f6f"
          propColor1="#6f6f6f"
        />
        <ViewSergeKassi
          instantText={require("../assets/rectangle346246305.png")}
          instantText2="A l’instant "
          propMarginTop={7}
          propHeight={57}
          propColor="#6f6f6f"
          propColor1="#6f6f6f"
        />
      </View>
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
  aujourdhui: {
    fontSize: 16,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.black,
    textAlign: "left",
  },
  frameChild: {
    borderStyle: "solid",
    borderColor: "#bebebe",
    borderTopWidth: 0.5,
    width: 101,
    height: 1,
  },
  aujourdhuiParent: {
    width: 387,
    alignItems: "center",
  },
  frameParent: {
    position: "absolute",
    top: 77,
    left: 20,
    width: 351,
    paddingHorizontal: 0,
    paddingVertical: 10,
    alignItems: "center",
  },
});

export default ViewToday;
