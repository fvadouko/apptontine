import * as React from "react";
import { useMemo } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Margin, Color, FontFamily } from "../GlobalStyles";

type MoneyContainerType = {
  /** Style props */
  propMarginTop?: number | string;
  propDisplay?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const MoneyContainer = ({ propMarginTop, propDisplay }: MoneyContainerType) => {
  const cardStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  const iconStyle = useMemo(() => {
    return {
      ...getStyleValue("display", propDisplay),
    };
  }, [propDisplay]);

  const navigation = useNavigation();

  return (
    <View style={[styles.card, cardStyle]}>
      <ImageBackground
        style={styles.cardChild}
        resizeMode="cover"
        source={require("../assets/rectangle34624630.png")}
      />
      <View style={[styles.left, styles.ml16]}>
        <Text style={[styles.putNameHere, styles.putFlexBox]}>Alpha1</Text>
        <Text style={[styles.putNameHere1, styles.mt4, styles.putFlexBox]}>
          200.000 Fcfa
        </Text>
      </View>
      <Pressable
        style={[styles.icon, styles.ml16, iconStyle]}
        onPress={() => navigation.navigate("Souscriptionmodal")}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/icon4.png")}
        />
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
  putFlexBox: {
    textAlign: "left",
    color: Color.gray_100,
    alignSelf: "stretch",
  },
  cardChild: {
    borderRadius: 100,
    width: 38,
    height: 38,
  },
  putNameHere: {
    fontSize: 14,
    fontFamily: FontFamily.spaceGroteskRegular,
  },
  putNameHere1: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: FontFamily.spaceGroteskBold,
  },
  left: {
    flex: 1,
  },
  icon1: {
    width: "100%",
    height: "100%",
    display: "none",
    opacity: 0.6,
  },
  icon: {
    width: 35,
    height: 35,
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
    justifyContent: "center",
  },
});

export default MoneyContainer;
