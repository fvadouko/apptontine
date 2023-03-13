import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Section7 from "../components/Section7";
import SectionForm from "../components/SectionForm";
import Group239702Container from "../components/Group239702Container";
import { Margin, FontFamily, Color } from "../GlobalStyles";

const MesFormules = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.mesFormules, styles.iconLayout]}>
      <View style={[styles.statusBar, styles.statusBarFlexBox]}>
        <View style={styles.barsstatusTime}>
          <Text style={styles.time}>19:27</Text>
        </View>
        <Image
          style={[styles.symbolsIcon, styles.ml251]}
          resizeMode="cover"
          source={require("../assets/symbols.png")}
        />
      </View>
      <Section7 icon={require("../assets/icon2.png")} />
      <SectionForm labelOpacity={0.2} />
      <View style={styles.modalPopParent}>
        <View style={styles.modalPosition}>
          <View style={[styles.modalPopChild, styles.modalPosition]} />
          <Pressable
            style={styles.materialSymbolscloseRounded}
            onPress={() => navigation.navigate("MesFormules1")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/materialsymbolscloserounded2.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.paiementEnCoursParent, styles.statusBarFlexBox]}>
          <Text style={styles.paiementEnCours}>Paiement en cours</Text>
          <Image
            style={[styles.icon1, styles.mt30]}
            resizeMode="cover"
            source={require("../assets/icon5.png")}
          />
        </View>
      </View>
      <Group239702Container
        productIds={require("../assets/home2.png")}
        productIds24x24={require("../assets/vector.png")}
        productIds24x24x={require("../assets/profile.png")}
        propTop={747}
        propColor="rgba(255, 255, 255, 0.7)"
        propColor1="#f25650"
        propColor2="rgba(255, 255, 255, 0.7)"
        propBackgroundColor="#f25650"
        propLeft={97}
        propTop1={-1}
        onIconPromoPress={() => navigation.navigate("MesFormules1")}
        onVectorPress={() => navigation.navigate("Recherche")}
        onProfilePress={() => navigation.navigate("PROFILE")}
        onAddPress={() => navigation.navigate("Souscription")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ml251: {
    marginLeft: Margin.m_232xl,
  },
  mt30: {
    marginTop: Margin.m_11xl,
  },
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  statusBarFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  modalPosition: {
    left: 0,
    top: 0,
    height: 348,
    width: 356,
    position: "absolute",
  },
  time: {
    fontSize: 15,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
    color: Color.black,
  },
  barsstatusTime: {
    paddingHorizontal: 0,
    paddingVertical: 2,
    flexDirection: "row",
  },
  symbolsIcon: {
    width: 68,
    height: 13,
    overflow: "hidden",
  },
  statusBar: {
    top: 7,
    right: 16,
    left: 16,
    display: "none",
    flexDirection: "row",
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
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  materialSymbolscloseRounded: {
    left: 318,
    top: 9,
    width: 30,
    height: 30,
    position: "absolute",
  },
  paiementEnCours: {
    fontSize: 16,
    letterSpacing: 1,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textAlign: "center",
    color: Color.black,
  },
  icon1: {
    width: 101,
    height: 100,
  },
  paiementEnCoursParent: {
    top: 102,
    left: 98,
    justifyContent: "center",
  },
  modalPopParent: {
    top: 248,
    left: 17,
    height: 348,
    width: 356,
    position: "absolute",
  },
  mesFormules: {
    backgroundColor: Color.ivory,
    flex: 1,
    height: 844,
    overflow: "hidden",
  },
});

export default MesFormules;
