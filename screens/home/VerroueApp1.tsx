import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProfileContainer from "../components/ProfileContainer";
import Section7 from "../components/Section7";
import DashboardSection from "../components/DashboardSection";
import Alpha1Section from "../components/Alpha1Section";
import LogoutContainer from "../components/LogoutContainer";
import AboutContainer from "../components/AboutContainer";
import SergeKassiContainer from "../components/SergeKassiContainer";
import PaymentModeContainer from "../components/PaymentModeContainer";
import { Margin, Color, FontFamily } from "../GlobalStyles";

const VerroueApp1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.verroueApp}>
      <ProfileContainer
        onIconPromoPress={() => navigation.navigate("MesFormules1")}
        onVectorPress={() => navigation.navigate("Recherche")}
        onProfilePress={() => navigation.navigate("PROFILE")}
      />
      <View style={[styles.statusBar, styles.parentFlexBox]}>
        <View style={styles.barsstatusTime}>
          <Text style={[styles.time, styles.timeFlexBox, styles.timeTypo]}>
            19:27
          </Text>
        </View>
        <Image
          style={[styles.symbolsIcon, styles.ml251]}
          resizeMode="cover"
          source={require("../assets/symbols.png")}
        />
      </View>
      <Section7 icon={require("../assets/icon.png")} />
      <DashboardSection propDisplay="none" />
      <View style={[styles.parent, styles.parentFlexBox]}>
        <Text style={[styles.text, styles.timeFlexBox]}>3</Text>
        <Text style={[styles.text, styles.timeFlexBox]}>Scr/jour</Text>
      </View>
      <View style={styles.titre}>
        <Text
          style={[
            styles.rcenteSouscription,
            styles.rsumDesDerniresClr,
            styles.timeTypo,
          ]}
        >
          Récente souscription
        </Text>
        <Text
          style={[
            styles.rsumDesDernires,
            styles.mt4,
            styles.rsumDesDerniresClr,
          ]}
        >
          Résumé des dernières souscription.
        </Text>
      </View>
      <Alpha1Section propDisplay="none" />
      <View style={styles.verroueAppChild} />
      <View style={[styles.menu, styles.menuPosition]}>
        <View style={[styles.rectangleParent, styles.frameChildLayout]}>
          <View
            style={[styles.frameChild, styles.frameChildLayout, styles.childBg]}
          />
          <Image
            style={styles.icsharpCloseIcon}
            resizeMode="cover"
            source={require("../assets/icsharpclose.png")}
          />
        </View>
        <LogoutContainer />
        <View style={[styles.menuChild, styles.childBg]} />
        <AboutContainer productId={require("../assets/group-10261.png")} />
        <SergeKassiContainer />
      </View>
      <View style={[styles.verroueAppItem, styles.menuPosition]} />
      <PaymentModeContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  ml251: {
    marginLeft: Margin.m_232xl,
  },
  mt4: {
    marginTop: Margin.m_9xs,
  },
  parentFlexBox: {
    alignItems: "center",
    display: "none",
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  timeTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  rsumDesDerniresClr: {
    color: Color.gray_100,
    width: 306,
    textAlign: "left",
  },
  menuPosition: {
    width: 391,
    left: 0,
    top: 0,
    position: "absolute",
    height: 844,
  },
  frameChildLayout: {
    height: 45,
    position: "absolute",
  },
  childBg: {
    backgroundColor: Color.ivory,
    left: 0,
  },
  time: {
    fontSize: 15,
    letterSpacing: 0,
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
    display: "none",
    flexDirection: "row",
    left: 16,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  parent: {
    top: 301,
    left: 162,
    display: "none",
  },
  rcenteSouscription: {
    fontSize: 20,
  },
  rsumDesDernires: {
    fontSize: 14,
    fontFamily: FontFamily.interRegular,
    opacity: 0.7,
  },
  titre: {
    top: 359,
    width: 306,
    display: "none",
    left: 16,
    position: "absolute",
  },
  verroueAppChild: {
    backgroundColor: Color.gainsboro_100,
    width: 390,
    height: 848,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameChild: {
    top: 1,
    width: 45,
    left: 0,
  },
  icsharpCloseIcon: {
    top: 9,
    left: 7,
    width: 30,
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    left: 345,
    borderRadius: 4,
    width: 46,
    top: 0,
  },
  menuChild: {
    width: 335,
    height: 777,
    left: 0,
    top: 0,
    position: "absolute",
  },
  menu: {
    display: "none",
  },
  verroueAppItem: {
    backgroundColor: Color.dimgray_300,
  },
  verroueApp: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 844,
    backgroundColor: Color.ivory,
  },
});

export default VerroueApp1;
