import * as React from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Image,
  Text,
  ImageBackground,
} from "react-native";
import { Margin, Color, FontFamily } from "../GlobalStyles";

const MoneyChoicesSection = () => {
  return (
    <View style={styles.modalPopParent}>
      <View style={styles.modalPosition}>
        <View style={[styles.modalPopChild, styles.modalPosition]} />
        <Image
          style={styles.materialSymbolscloseRoundedIcon}
          resizeMode="cover"
          source={require("../assets/materialsymbolscloserounded2.png")}
        />
      </View>
      <View style={styles.choixDuPorteMoneyParent}>
        <Text style={[styles.choixDuPorte, styles.choixDuPorteTypo]}>
          Choix du porte money
        </Text>
        <ImageBackground
          style={[styles.image1Icon, styles.mt50]}
          resizeMode="cover"
          source={require("../assets/image11.png")}
        />
        <Pressable style={[styles.annul, styles.mt50]}>
          <Text style={[styles.largeLabelMedium16px, styles.choixDuPorteTypo]}>
            Autres
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt50: {
    marginTop: Margin.m_31xl,
  },
  modalPosition: {
    left: 0,
    top: 0,
    height: 348,
    width: 356,
    position: "absolute",
  },
  choixDuPorteTypo: {
    fontWeight: "700",
    fontSize: 16,
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
  },
  materialSymbolscloseRoundedIcon: {
    top: 9,
    left: 318,
    width: 30,
    height: 30,
    overflow: "hidden",
    position: "absolute",
  },
  choixDuPorte: {
    letterSpacing: 1,
    fontFamily: FontFamily.interBold,
    color: Color.black,
    textAlign: "center",
  },
  image1Icon: {
    borderRadius: 7,
    height: 33,
    width: 116,
  },
  largeLabelMedium16px: {
    fontFamily: FontFamily.spaceGroteskBold,
    color: Color.gray_100,
    textAlign: "left",
  },
  annul: {
    borderRadius: 12,
    backgroundColor: Color.khaki,
    borderStyle: "solid",
    borderColor: "#171717",
    borderWidth: 0.5,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 8,
    justifyContent: "center",
    width: 116,
    alignItems: "center",
    overflow: "hidden",
  },
  choixDuPorteMoneyParent: {
    top: 74,
    left: 78,
    alignItems: "center",
    position: "absolute",
  },
  modalPopParent: {
    top: 185,
    left: 17,
    height: 348,
    width: 356,
    position: "absolute",
  },
});

export default MoneyChoicesSection;
