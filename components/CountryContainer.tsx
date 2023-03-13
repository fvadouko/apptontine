import * as React from "react";
import { useMemo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Margin, FontFamily, Color } from "../GlobalStyles";

type CountryContainerType = {
  country?: string;
  countryInput?: string;

  /** Style props */
  propMarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const CountryContainer = ({
  country,
  countryInput,
  propMarginLeft,
}: CountryContainerType) => {
  const vectorIconStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  return (
    <View>
      <Text style={[styles.pays, styles.paysTypo]}>{country}</Text>
      <View style={[styles.votrePaysParent, styles.mt7]}>
        <Text style={[styles.votrePays, styles.paysTypo]}>{countryInput}</Text>
        <Image
          style={[styles.vectorIcon, styles.ml200, vectorIconStyle]}
          resizeMode="cover"
          source={require("../assets/vector4.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml200: {
    marginLeft: 200,
  },
  mt7: {
    marginTop: Margin.m_6xs,
  },
  paysTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    lineHeight: 14,
    letterSpacing: 0.3,
    fontSize: 14,
  },
  pays: {
    color: Color.black,
  },
  votrePays: {
    color: Color.darkgray,
  },
  vectorIcon: {
    width: 9,
    height: 6,
  },
  votrePaysParent: {
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "#d0d0d0",
    borderWidth: 0.7,
    width: 327,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 17,
    alignItems: "center",
  },
});

export default CountryContainer;
