import * as React from "react";
import { useMemo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Margin, Color, FontFamily } from "../GlobalStyles";

type SectionFormType = {
  /** Style props */
  labelOpacity?: number;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const SectionForm = ({ labelOpacity }: SectionFormType) => {
  const frameView3Style = useMemo(() => {
    return {
      ...getStyleValue("opacity", labelOpacity),
    };
  }, [labelOpacity]);

  return (
    <View style={[styles.frameParent, frameView3Style]}>
      <View style={styles.mesFormulesWrapper}>
        <Text style={styles.mesFormules}>Mes formules</Text>
      </View>
      <View style={[styles.card, styles.mt30, styles.cardFlexBox]}>
        <View style={[styles.card1, styles.cardFlexBox]}>
          <Image
            style={styles.cardChild}
            resizeMode="cover"
            source={require("../assets/rectangle34624630.png")}
          />
          <View style={[styles.left, styles.ml16]}>
            <Text style={[styles.putNameHere, styles.putClr, styles.retirTypo]}>
              Alpha1
            </Text>
            <Text style={[styles.putNameHere1, styles.mt4, styles.putClr]}>
              200.000 Fcfa
            </Text>
          </View>
          <View style={[styles.label, styles.ml16, styles.cardFlexBox]}>
            <Text style={[styles.retir, styles.putClr, styles.retirTypo]}>
              Retiré
            </Text>
          </View>
        </View>
        <View style={[styles.card1, styles.mt10, styles.cardFlexBox]}>
          <Image
            style={styles.cardChild}
            resizeMode="cover"
            source={require("../assets/rectangle34624630.png")}
          />
          <View style={[styles.left, styles.ml16]}>
            <Text style={[styles.putNameHere, styles.putClr, styles.retirTypo]}>
              Alpha1
            </Text>
            <Text style={[styles.putNameHere1, styles.mt4, styles.putClr]}>
              200.000 Fcfa
            </Text>
          </View>
          <View style={[styles.label, styles.ml16, styles.cardFlexBox]}>
            <Text style={[styles.retir, styles.putClr, styles.retirTypo]}>
              Retiré
            </Text>
          </View>
        </View>
        <View style={[styles.card1, styles.mt10, styles.cardFlexBox]}>
          <Image
            style={styles.cardChild}
            resizeMode="cover"
            source={require("../assets/rectangle34624630.png")}
          />
          <View style={[styles.left, styles.ml16]}>
            <Text style={[styles.putNameHere, styles.putClr, styles.retirTypo]}>
              Alpha1
            </Text>
            <Text style={[styles.putNameHere1, styles.mt4, styles.putClr]}>
              200.000 Fcfa
            </Text>
          </View>
          <View style={[styles.label, styles.ml16, styles.cardFlexBox]}>
            <Text style={[styles.retir, styles.putClr, styles.retirTypo]}>
              Retiré
            </Text>
          </View>
        </View>
        <View style={[styles.card1, styles.mt10, styles.cardFlexBox]}>
          <Image
            style={styles.cardChild}
            resizeMode="cover"
            source={require("../assets/rectangle34624630.png")}
          />
          <View style={[styles.left, styles.ml16]}>
            <Text style={[styles.putNameHere, styles.putClr, styles.retirTypo]}>
              Alpha1
            </Text>
            <Text style={[styles.putNameHere1, styles.mt4, styles.putClr]}>
              200.000 Fcfa
            </Text>
          </View>
          <View style={[styles.label, styles.ml16, styles.cardFlexBox]}>
            <Text style={[styles.retir, styles.putClr, styles.retirTypo]}>
              Retiré
            </Text>
          </View>
        </View>
        <View style={[styles.card1, styles.mt10, styles.cardFlexBox]}>
          <Image
            style={styles.cardChild}
            resizeMode="cover"
            source={require("../assets/rectangle34624630.png")}
          />
          <View style={[styles.left, styles.ml16]}>
            <Text style={[styles.putNameHere, styles.putClr, styles.retirTypo]}>
              Alpha1
            </Text>
            <Text style={[styles.putNameHere1, styles.mt4, styles.putClr]}>
              200.000 Fcfa
            </Text>
          </View>
          <View style={[styles.label, styles.ml16, styles.cardFlexBox]}>
            <Text style={[styles.retir, styles.putClr, styles.retirTypo]}>
              Retiré
            </Text>
          </View>
        </View>
        <View style={[styles.card1, styles.mt10, styles.cardFlexBox]}>
          <Image
            style={styles.cardChild}
            resizeMode="cover"
            source={require("../assets/rectangle34624630.png")}
          />
          <View style={[styles.left, styles.ml16]}>
            <Text style={[styles.putNameHere, styles.putClr, styles.retirTypo]}>
              Alpha1
            </Text>
            <Text style={[styles.putNameHere1, styles.mt4, styles.putClr]}>
              200.000 Fcfa
            </Text>
          </View>
          <View style={[styles.label, styles.ml16, styles.cardFlexBox]}>
            <Text style={[styles.retir, styles.putClr, styles.retirTypo]}>
              Retiré
            </Text>
          </View>
        </View>
      </View>
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
  mt10: {
    marginTop: Margin.m_3xs,
  },
  mt30: {
    marginTop: Margin.m_11xl,
  },
  cardFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  putClr: {
    color: Color.gray_100,
    textAlign: "left",
  },
  retirTypo: {
    fontFamily: FontFamily.spaceGroteskRegular,
    color: Color.gray_100,
  },
  mesFormules: {
    fontSize: 30,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.black,
    textAlign: "left",
  },
  mesFormulesWrapper: {
    flexDirection: "row",
  },
  cardChild: {
    borderRadius: 100,
    width: 38,
    height: 38,
  },
  putNameHere: {
    fontSize: 14,
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
    flexDirection: "row",
  },
  card1: {
    borderRadius: 12,
    backgroundColor: Color.khaki,
    overflow: "hidden",
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  card: {
    paddingHorizontal: 0,
    paddingVertical: 8,
    width: 359,
  },
  frameParent: {
    position: "absolute",
    top: 112,
    left: 16,
    display: "none",
    opacity: 0.3,
    width: 359,
  },
});

export default SectionForm;
