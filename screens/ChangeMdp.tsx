import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProfileContainer from "../components/ProfileContainer";
import DashboardSection from "../components/DashboardSection";
import Alpha1Section from "../components/Alpha1Section";
import LogoutContainer from "../components/LogoutContainer";
import SergeKassiContainer from "../components/SergeKassiContainer";
import { Margin, FontFamily, Color } from "../GlobalStyles";

const ChangeMdp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.changeMdp}>
      <ProfileContainer
        onIconPromoPress={() => navigation.navigate("MesFormules1")}
        onVectorPress={() => navigation.navigate("Recherche")}
        onProfilePress={() => navigation.navigate("PROFILE")}
      />
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <View style={styles.barsstatusTime}>
          <Text style={styles.time}>19:27</Text>
        </View>
        <Image
          style={[styles.symbolsIcon, styles.ml251]}
          resizeMode="cover"
          source={require("../assets/symbols.png")}
        />
      </View>
      <View style={[styles.groupParent, styles.statusBarPosition]}>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group.png")}
        />
        <View style={[styles.groupContainer, styles.ml257]}>
          <View style={styles.iconParent}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/icon.png")}
            />
            <View style={[styles.rectangleParent, styles.arrowItemPosition]}>
              <View style={[styles.instanceChild, styles.groupItemPosition]} />
              <Text style={[styles.text, styles.textTypo]}>7</Text>
            </View>
          </View>
          <Image
            style={[styles.imageIcon, styles.ml12]}
            resizeMode="cover"
            source={require("../assets/image.png")}
          />
        </View>
      </View>
      <DashboardSection />
      <View style={styles.parent}>
        <Text style={[styles.text1, styles.textTypo]}>3</Text>
        <Text style={[styles.text1, styles.textTypo]}>Scr/jour</Text>
      </View>
      <View style={styles.titre}>
        <Text
          style={[styles.rcenteSouscription, styles.rcenteSouscriptionTypo]}
        >
          Récente souscription
        </Text>
        <Text style={[styles.rsumDesDernires, styles.mt4]}>
          Résumé des dernières souscription.
        </Text>
      </View>
      <Alpha1Section />
      <View style={styles.changeMdpChild} />
      <View style={[styles.menu, styles.menuPosition]}>
        <View style={[styles.rectangleGroup, styles.frameChildLayout]}>
          <View style={[styles.frameChild, styles.frameChildLayout]} />
          <Image
            style={[styles.icsharpCloseIcon, styles.icsharpCloseIconLayout]}
            resizeMode="cover"
            source={require("../assets/icsharpclose.png")}
          />
        </View>
        <LogoutContainer />
        <View style={[styles.menuChild, styles.lineIconLayout]} />
        <View style={[styles.groupView, styles.lineIconLayout]}>
          <View style={styles.groupParent1}>
            <View style={styles.groupChildPosition}>
              <View style={[styles.groupBg, styles.groupChildPosition]} />
              <View
                style={[
                  styles.iconSettingWrapper,
                  styles.iconLayout,
                  styles.iconLayout1,
                ]}
              >
                <View
                  style={[
                    styles.iconSetting,
                    styles.iconLayout,
                    styles.iconLayout1,
                  ]}
                >
                  <View style={styles.iconSettingChild} />
                </View>
              </View>
            </View>
            <View style={styles.changLeMotDePasse}>
              <View style={styles.groupParent2}>
                <Image
                  style={[styles.groupItem, styles.groupItemPosition]}
                  resizeMode="cover"
                  source={require("../assets/group-460.png")}
                />
                <Text style={[styles.changLeMot, styles.motTypo]}>
                  Changé le mot de passe
                </Text>
              </View>
              <View style={[styles.arrowLayout, styles.ml70]}>
                <View style={[styles.arrowChild, styles.arrowChildLayout]} />
                <Image
                  style={[styles.arrowLayout, styles.arrowItemPosition]}
                  resizeMode="cover"
                  source={require("../assets/vector-59.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.frameParent}>
            <View style={styles.frameView}>
              <View style={styles.groupInnerLayout}>
                <View
                  style={[
                    styles.groupInner,
                    styles.groupInnerLayout,
                    styles.groupBg,
                  ]}
                />
                <Image
                  style={styles.vectorIcon}
                  resizeMode="cover"
                  source={require("../assets/vector2.png")}
                />
              </View>
              <Text style={[styles.motTypo, styles.ml16]}>
                Verrouillage de l'application
              </Text>
            </View>
            <View style={[styles.arrowLayout, styles.ml41]}>
              <View style={[styles.arrowChild, styles.arrowChildLayout]} />
              <Image
                style={styles.arrowItemPosition}
                resizeMode="cover"
                source={require("../assets/vector-591.png")}
              />
            </View>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.groupContainer}>
              <View
                style={[
                  styles.vectorWrapper,
                  styles.groupInnerLayout,
                  styles.groupBg,
                ]}
              >
                <Image
                  style={styles.vectorIcon1}
                  resizeMode="cover"
                  source={require("../assets/vector3.png")}
                />
              </View>
              <View style={[styles.motDePassePaiementWrapper, styles.ml22]}>
                <Text style={[styles.motDePasse, styles.motTypo]}>
                  Mot de passe paiement
                </Text>
              </View>
            </View>
            <View style={[styles.arrowLayout, styles.ml64]}>
              <View style={[styles.arrowChild, styles.arrowChildLayout]} />
              <Image
                style={styles.arrowItemPosition}
                resizeMode="cover"
                source={require("../assets/vector-592.png")}
              />
            </View>
          </View>
          <View style={styles.frameParent1}>
            <View style={styles.frameView}>
              <Image
                style={styles.groupInnerLayout}
                resizeMode="cover"
                source={require("../assets/group-1026.png")}
              />
              <Text style={[styles.motTypo, styles.ml16]}>A propos</Text>
            </View>
            <View style={[styles.arrowLayout, styles.ml173]}>
              <View style={[styles.arrowChild, styles.arrowChildLayout]} />
              <Image
                style={styles.arrowItemPosition}
                resizeMode="cover"
                source={require("../assets/vector-591.png")}
              />
            </View>
          </View>
          <Image
            style={[styles.lineIcon, styles.iconLayout, styles.lineIconLayout]}
            resizeMode="cover"
            source={require("../assets/line.png")}
          />
        </View>
        <SergeKassiContainer />
      </View>
      <View style={[styles.changeMdpItem, styles.menuPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  ml251: {
    marginLeft: Margin.m_232xl,
  },
  ml12: {
    marginLeft: Margin.m_xs,
  },
  ml257: {
    marginLeft: Margin.m_238xl,
  },
  mt4: {
    marginTop: Margin.m_9xs,
  },
  ml70: {
    marginLeft: Margin.m_51xl,
  },
  ml16: {
    marginLeft: Margin.m_base,
  },
  ml41: {
    marginLeft: Margin.m_22xl,
  },
  ml22: {
    marginLeft: Margin.m_3xl,
  },
  ml64: {
    marginLeft: Margin.m_45xl,
  },
  ml173: {
    marginLeft: Margin.m_154xl,
  },
  mt25: {
    marginTop: Margin.m_6xl,
  },
  ml15: {
    marginLeft: Margin.m_mini,
  },
  mt40: {
    marginTop: Margin.m_21xl,
  },
  mt60: {
    marginTop: Margin.m_41xl,
  },
  statusBarPosition: {
    left: 16,
    display: "none",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  arrowItemPosition: {
    left: 6,
    top: 0,
    position: "absolute",
  },
  groupItemPosition: {
    left: "0%",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  rcenteSouscriptionTypo: {
    color: Color.gray_100,
    textAlign: "left",
    fontWeight: "700",
  },
  menuPosition: {
    width: 391,
    top: 0,
    left: 0,
    position: "absolute",
    height: 844,
  },
  frameChildLayout: {
    height: 45,
    position: "absolute",
  },
  icsharpCloseIconLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  lineIconLayout: {
    width: 335,
    left: 0,
  },
  groupChildPosition: {
    width: 41,
    height: 40,
    top: 0,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 0,
    position: "absolute",
  },
  iconLayout1: {
    width: 0,
    height: 0,
  },
  motTypo: {
    color: Color.darkslategray,
    lineHeight: 24,
    letterSpacing: 1,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: 14,
    textAlign: "left",
  },
  arrowChildLayout: {
    width: 24,
    height: 24,
  },
  groupInnerLayout: {
    width: 40,
    height: 40,
  },
  groupBg: {
    backgroundColor: Color.khaki,
    borderRadius: 12,
  },
  modalLayout: {
    height: 408,
    width: 356,
    position: "absolute",
  },
  time: {
    fontSize: 15,
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
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
    display: "none",
    alignItems: "center",
    flexDirection: "row",
  },
  groupIcon: {
    width: 20,
    height: 15,
  },
  icon: {
    width: 19,
    height: 22,
    left: 0,
    top: 11,
    position: "absolute",
  },
  instanceChild: {
    height: "78.95%",
    top: "21.05%",
    right: "0%",
    bottom: "0%",
    backgroundColor: Color.red_100,
    borderRadius: 12,
    width: "100%",
  },
  text: {
    height: "84.21%",
    width: "40%",
    top: "0%",
    left: "33.33%",
    fontSize: 10,
    lineHeight: 22,
    color: Color.white,
    position: "absolute",
  },
  rectangleParent: {
    width: 15,
    height: 19,
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
    alignItems: "center",
    flexDirection: "row",
  },
  groupParent: {
    top: 42,
    width: 354,
    display: "none",
    alignItems: "center",
    flexDirection: "row",
  },
  text1: {
    lineHeight: 18,
    fontSize: 16,
    color: Color.black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  parent: {
    top: 301,
    left: 162,
    display: "none",
    alignItems: "center",
    position: "absolute",
  },
  rcenteSouscription: {
    fontSize: 20,
    color: Color.gray_100,
    width: 306,
    fontFamily: FontFamily.interBold,
  },
  rsumDesDernires: {
    fontFamily: FontFamily.interRegular,
    opacity: 0.7,
    fontSize: 14,
    color: Color.gray_100,
    width: 306,
    textAlign: "left",
  },
  titre: {
    top: 359,
    width: 306,
    display: "none",
    left: 16,
    position: "absolute",
  },
  changeMdpChild: {
    backgroundColor: Color.gainsboro_100,
    width: 390,
    height: 848,
    top: 0,
    left: 0,
    display: "none",
    position: "absolute",
  },
  frameChild: {
    top: 1,
    width: 45,
    left: 0,
    backgroundColor: Color.ivory,
  },
  icsharpCloseIcon: {
    left: 7,
    top: 9,
    overflow: "hidden",
  },
  rectangleGroup: {
    left: 345,
    borderRadius: 4,
    width: 46,
    top: 0,
  },
  menuChild: {
    height: 777,
    top: 0,
    position: "absolute",
    backgroundColor: Color.ivory,
  },
  iconSettingChild: {
    top: -3,
    left: -5,
    backgroundColor: Color.darkslateblue,
    width: 25,
    height: 24,
    display: "none",
    position: "absolute",
  },
  iconSetting: {
    top: 0,
    left: 0,
  },
  iconSettingWrapper: {
    left: 13,
    top: 11,
  },
  groupItem: {
    height: "75%",
    width: "6.66%",
    top: "12.5%",
    right: "93.34%",
    bottom: "12.5%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  changLeMot: {
    left: 43,
    top: 0,
    position: "absolute",
  },
  groupParent2: {
    width: 216,
    height: 24,
  },
  arrowChild: {
    top: -6,
    left: -9,
    backgroundColor: Color.silver_100,
    display: "none",
    position: "absolute",
  },
  arrowLayout: {
    height: 12,
    width: 6,
  },
  changLeMotDePasse: {
    top: 8,
    left: 13,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  groupParent1: {
    width: 305,
    height: 40,
    left: 7,
    top: 0,
    position: "absolute",
  },
  groupInner: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  vectorIcon: {
    left: 12,
    width: 16,
    top: 9,
    height: 22,
    position: "absolute",
  },
  frameView: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    top: 64,
    left: 7,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  vectorIcon1: {
    width: 14,
    height: 22,
  },
  vectorWrapper: {
    paddingHorizontal: 5,
    paddingVertical: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  motDePasse: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  motDePassePaiementWrapper: {
    width: 168,
    height: 24,
  },
  frameGroup: {
    top: 128,
    left: 9,
    width: 324,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  frameParent1: {
    top: 232,
    left: 7,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  lineIcon: {
    top: 200,
  },
  groupView: {
    top: 118,
    height: 272,
    position: "absolute",
  },
  menu: {
    display: "none",
  },
  changeMdpItem: {
    backgroundColor: Color.dimgray_300,
  },
  changeMdp: {
    flex: 1,
    overflow: "hidden",
    height: 844,
    width: "100%",
    backgroundColor: Color.ivory,
  },
});

export default ChangeMdp;
