import * as React from "react";
import { useMemo } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  ImageSourcePropType,
} from "react-native";
import { Margin, Color, FontFamily } from "../GlobalStyles";

type ViewSergeKassiType = {
  instantText?: ImageSourcePropType;
  instantText2?: string;

  /** Style props */
  propMarginTop?: number | string;
  propHeight?: number | string;
  propColor?: string;
  propColor1?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const ViewSergeKassi = ({
  instantText,
  instantText2,
  propMarginTop,
  propHeight,
  propColor,
  propColor1,
}: ViewSergeKassiType) => {
  const listStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
      ...getStyleValue("height", propHeight),
    };
  }, [propMarginTop, propHeight]);

  const sergeKassiStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  const marqueBientDeStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor1),
    };
  }, [propColor1]);

  return (
    <View style={[styles.list, listStyle]}>
      <ImageBackground
        style={styles.listChild}
        resizeMode="cover"
        source={instantText}
      />
      <View style={[styles.left, styles.ml12]}>
        <Text
          style={[styles.sergeKassi, styles.sergeKassiLayout, sergeKassiStyle]}
        >
          Serge kassi
        </Text>
        <Text
          style={[
            styles.marqueBientDe,
            styles.mt5,
            styles.aLinstantTypo,
            styles.sergeKassiLayout,
            marqueBientDeStyle,
          ]}
        >{`Marque bient de retirer 50.000f `}</Text>
        <Text style={[styles.aLinstant, styles.mt5, styles.aLinstantTypo]}>
          {instantText2}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt5: {
    marginTop: Margin.m_8xs,
  },
  ml12: {
    marginLeft: Margin.m_xs,
  },
  sergeKassiLayout: {
    width: 249,
    color: Color.gray_100,
  },
  aLinstantTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
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
    width: 249,
    color: Color.gray_100,
  },
  marqueBientDe: {
    fontSize: 11,
    width: 249,
    color: Color.gray_100,
    fontFamily: FontFamily.interRegular,
  },
  aLinstant: {
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
});

export default ViewSergeKassi;
