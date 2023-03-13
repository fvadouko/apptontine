import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Margin, FontFamily, Color } from "../GlobalStyles";

const LogoutContainer = () => {
  return (
    <View style={styles.menuInner}>
      <View style={styles.vectorParent}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector1.png")}
        />
        <Text style={[styles.dconnexion, styles.ml40]}>Déconnexion</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml40: {
    marginLeft: Margin.m_21xl,
  },
  vectorIcon: {
    width: 24,
    height: 24,
  },
  dconnexion: {
    fontSize: 22,
    letterSpacing: -0.3,
    lineHeight: 29,
    fontFamily: FontFamily.interRegular,
    color: Color.black,
    textAlign: "center",
    width: 177,
  },
  vectorParent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  menuInner: {
    position: "absolute",
    top: 777,
    left: 0,
    backgroundColor: Color.tomato,
    shadowColor: "rgba(255, 255, 255, 0.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
    width: 335,
    paddingHorizontal: 43,
    paddingVertical: 19,
  },
});

export default LogoutContainer;
