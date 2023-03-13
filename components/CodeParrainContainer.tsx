import * as React from "react";
import { useMemo } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
  Text,
} from "react-native";
import { Margin, FontFamily, Color } from "../GlobalStyles";

type CodeParrainContainerType = {
  referralCode?: string;

  /** Style props */
  propColor?: string;

  /** Action props */
  onAnnulPress?: () => void;
  onModifierPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const CodeParrainContainer = ({
  referralCode,
  propColor,
  onAnnulPress,
  onModifierPress,
}: CodeParrainContainerType) => {
  const frameView2Style = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  return (
    <View style={[styles.modalPop, styles.modalLayout]}>
      <View
        style={[
          styles.modalPopChild,
          styles.groupParentPosition,
          styles.modalLayout,
        ]}
      />
      <Image
        style={styles.materialSymbolscloseRoundedIcon}
        resizeMode="cover"
        source={require("../assets/materialsymbolscloserounded.png")}
      />
      <View style={[styles.instanceParent, styles.parentLayout]}>
        <View
          style={[
            styles.groupParent,
            styles.parentLayout,
            styles.groupParentPosition,
          ]}
        >
          <TextInput
            style={[styles.instanceChild, styles.codeParrainPosition]}
            placeholder="Code parrain"
            keyboardType="default"
            autoCapitalize="none"
            placeholderTextColor="rgba(21, 22, 36, 0.7)"
          />
          <Text
            style={[
              styles.codeParrain,
              styles.codeParrainTypo,
              styles.detailsTypo,
              styles.codeParrainPosition,
            ]}
          >
            Code parrain
          </Text>
        </View>
        <View style={styles.detailsParent}>
          <Text style={[styles.details, styles.detailsTypo]}>Details</Text>
          <View style={[styles.frameParent, styles.mt17]}>
            <View style={styles.formuleChoisiParent}>
              <Text
                style={[styles.formuleChoisi, styles.alpha1Typo]}
              >{`Formule choisi : `}</Text>
              <Text style={[styles.alpha1, styles.ml30, styles.alpha1Typo]}>
                Alpha1
              </Text>
            </View>
            <View style={[styles.montantPayParent, styles.mt20]}>
              <Text
                style={[styles.formuleChoisi, styles.alpha1Typo]}
              >{`Montant à payé : `}</Text>
              <Text style={[styles.alpha1, styles.ml10, styles.alpha1Typo]}>
                + 20.000 Fcfa
              </Text>
            </View>
            <View style={[styles.fraisParent, styles.mt20]}>
              <Text
                style={[styles.formuleChoisi, styles.alpha1Typo]}
              >{`Frais : `}</Text>
              <Text style={[styles.alpha1, styles.ml14, styles.alpha1Typo]}>
                + 500 Fcfa
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.buttons}>
          <Pressable
            style={[styles.annul, styles.annulBorder]}
            onPress={onAnnulPress}
          >
            <Image
              style={styles.materialSymbolsnavigateNextIcon}
              resizeMode="cover"
              source={require("../assets/materialsymbolsnavigatenext2.png")}
            />
            <Text
              style={[
                styles.largeLabelMedium16px,
                styles.ml8,
                styles.codeParrainTypo,
              ]}
            >
              Annulé
            </Text>
          </Pressable>
          <Pressable
            style={[styles.annulBorder, styles.ml80]}
            onPress={onModifierPress}
          >
            <Text style={[styles.largeLabelMedium16px, styles.codeParrainTypo]}>
              Suivant
            </Text>
            <Image
              style={[styles.materialSymbolsnavigateNextIcon, styles.ml8]}
              resizeMode="cover"
              source={require("../assets/materialsymbolsnavigatenext.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml30: {
    marginLeft: Margin.m_11xl,
  },
  ml10: {
    marginLeft: Margin.m_3xs,
  },
  ml14: {
    marginLeft: Margin.m_sm,
  },
  mt20: {
    marginTop: Margin.m_xl,
  },
  mt17: {
    marginTop: 17,
  },
  ml8: {
    marginLeft: Margin.m_5xs,
  },
  ml80: {
    marginLeft: 80,
  },
  modalLayout: {
    height: 488,
    width: 356,
    position: "absolute",
  },
  groupParentPosition: {
    top: 0,
    left: 0,
  },
  parentLayout: {
    width: 315,
    position: "absolute",
  },
  codeParrainPosition: {
    left: "0%",
    position: "absolute",
  },
  codeParrainTypo: {
    textAlign: "left",
    fontSize: 16,
  },
  detailsTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.black,
  },
  alpha1Typo: {
    lineHeight: 22,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: 16,
  },
  annulBorder: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#171717",
    borderStyle: "solid",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  modalPopChild: {
    borderRadius: 24,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    left: 0,
  },
  materialSymbolscloseRoundedIcon: {
    top: 13,
    left: 305,
    width: 30,
    height: 30,
    overflow: "hidden",
    position: "absolute",
  },
  instanceChild: {
    height: "61.73%",
    width: "100%",
    top: "38.27%",
    right: "0%",
    bottom: "0%",
  },
  codeParrain: {
    top: "0%",
    color: Color.black,
  },
  groupParent: {
    height: 81,
    left: 0,
  },
  details: {
    letterSpacing: 1,
    textAlign: "center",
    color: Color.black,
    fontSize: 16,
    fontWeight: "500",
  },
  formuleChoisi: {
    color: Color.gray_400,
  },
  alpha1: {
    color: Color.black,
  },
  formuleChoisiParent: {
    flexDirection: "row",
    width: 245,
  },
  montantPayParent: {
    flexDirection: "row",
  },
  fraisParent: {
    width: 186,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    alignItems: "flex-end",
    width: 245,
  },
  detailsParent: {
    top: 105,
    left: 0,
    position: "absolute",
  },
  materialSymbolsnavigateNextIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  largeLabelMedium16px: {
    fontWeight: "700",
    fontFamily: FontFamily.spaceGroteskBold,
    color: Color.gray_100,
  },
  annul: {
    width: 116,
  },
  buttons: {
    top: 303,
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  instanceParent: {
    top: 77,
    left: 20,
    height: 345,
  },
  modalPop: {
    top: 142,
    left: 17,
  },
});

export default CodeParrainContainer;
