import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";
import { Margin, Color, FontFamily } from "../GlobalStyles";

type Section7Type = {
  icon?: ImageSourcePropType;
};

const Section7 = ({ icon }: Section7Type) => {
  return (
    <View style={[styles.groupParent, styles.groupFlexBox]}>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group.png")}
      />
      <View style={[styles.groupContainer, styles.ml257, styles.groupFlexBox]}>
        <View style={styles.iconParent}>
          <Image style={styles.icon} resizeMode="cover" source={icon} />
          <View style={styles.rectangleParent}>
            <View style={styles.instanceChild} />
            <Text style={styles.text}>7</Text>
          </View>
        </View>
        <Image
          style={[styles.imageIcon, styles.ml12]}
          resizeMode="cover"
          source={require("../assets/image.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml12: {
    marginLeft: Margin.m_xs,
  },
  ml257: {
    marginLeft: Margin.m_238xl,
  },
  groupFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  groupIcon: {
    width: 20,
    height: 15,
  },
  icon: {
    top: 11,
    left: 0,
    width: 19,
    height: 22,
    position: "absolute",
  },
  instanceChild: {
    height: "78.95%",
    width: "100%",
    top: "21.05%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 12,
    backgroundColor: Color.red_100,
    position: "absolute",
  },
  text: {
    height: "84.21%",
    width: "40%",
    top: "0%",
    left: "33.33%",
    fontSize: 10,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    top: 0,
    left: 6,
    width: 15,
    height: 19,
    position: "absolute",
  },
  iconParent: {
    width: 21,
    height: 33,
  },
  imageIcon: {
    width: 48,
    height: 48,
  },
  groupContainer: {
    justifyContent: "center",
  },
  groupParent: {
    top: 42,
    left: 16,
    width: 354,
    display: "none",
    position: "absolute",
  },
});

export default Section7;
