import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import { Margin, Color, FontFamily } from "../GlobalStyles";

type BurgerType = {
  state?: any;
  navigation?: any;
};

const Burger = ({ state, navigation }: BurgerType) => {
  const [drawerItemsNormal] = useState([]);
  const [drawerItemsActive] = useState([]);
  const stateIndex = !state ? 0 : state.index - 1;
  return (
    <View style={styles.burger}>
      <View style={styles.burgerChild} />
      <View style={styles.menu}>
        <Pressable
          style={[styles.rectangleParent, styles.frameChildLayout]}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <View style={[styles.frameChild, styles.frameChildLayout]} />
          <Image
            style={[styles.icsharpCloseIcon, styles.frameParentPosition]}
            resizeMode="cover"
            source={require("../assets/icsharpclose.png")}
          />
        </Pressable>
        <View style={[styles.menuInner, styles.menuParentPosition]}>
          <View style={styles.vectorFlexBox}>
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              resizeMode="cover"
              source={require("../assets/vector1.png")}
            />
            <Text
              style={[styles.dconnexion, styles.ml40, styles.dconnexionTypo]}
            >
              Déconnexion
            </Text>
          </View>
        </View>
        <View style={[styles.menuChild, styles.menuParentPosition]} />
        <View style={[styles.groupParent, styles.menuParentPosition]}>
          <Pressable
            style={styles.groupContainer}
            onPress={() => navigation.navigate("ChangeMdp")}
          >
            <View style={styles.groupChildPosition}>
              <View style={[styles.groupBg, styles.groupChildPosition]} />
            </View>
            <View style={[styles.changLeMotDePasse, styles.frameParentFlexBox]}>
              <Image
                style={styles.changLeMotDePasseChild}
                resizeMode="cover"
                source={require("../assets/group-239688.png")}
              />
              <Pressable style={[styles.arrow, styles.ml70]}>
                <View style={[styles.arrowChild, styles.vectorIconLayout]} />
                <Image
                  style={styles.arrowItem}
                  resizeMode="cover"
                  source={require("../assets/vector-59.png")}
                />
              </Pressable>
            </View>
          </Pressable>
          <Pressable
            style={[
              styles.frameParent,
              styles.frameParentFlexBox,
              styles.frameParentPosition,
            ]}
            onPress={() => navigation.navigate("VerroueApp")}
          >
            <View style={styles.frameParentFlexBox}>
              <View style={styles.groupLayout}>
                <View
                  style={[styles.groupItem, styles.groupLayout, styles.groupBg]}
                />
                <Image
                  style={styles.vectorIcon1}
                  resizeMode="cover"
                  source={require("../assets/vector2.png")}
                />
              </View>
              <Text style={[styles.motDePasseTypo, styles.ml16]}>
                Verrouillage de l'application
              </Text>
            </View>
            <Pressable style={[styles.arrow, styles.ml41]}>
              <View style={[styles.arrowChild, styles.vectorIconLayout]} />
              <Image
                style={styles.arrowItem}
                resizeMode="cover"
                source={require("../assets/vector-591.png")}
              />
            </Pressable>
          </Pressable>
          <Pressable
            style={[styles.frameGroup, styles.frameParentFlexBox]}
            onPress={() => navigation.navigate("VerroueApp1")}
          >
            <View style={styles.vectorFlexBox}>
              <View
                style={[
                  styles.vectorWrapper,
                  styles.groupLayout,
                  styles.groupBg,
                  styles.vectorFlexBox,
                ]}
              >
                <Image
                  style={styles.vectorIcon2}
                  resizeMode="cover"
                  source={require("../assets/vector3.png")}
                />
              </View>
              <View style={[styles.motDePassePaiementWrapper, styles.ml22]}>
                <Text style={[styles.motDePasse, styles.motDePasseTypo]}>
                  Mot de passe paiement
                </Text>
              </View>
            </View>
            <Pressable style={[styles.arrow, styles.ml64]}>
              <View style={[styles.arrowChild, styles.vectorIconLayout]} />
              <Image
                style={styles.arrowItem}
                resizeMode="cover"
                source={require("../assets/vector-592.png")}
              />
            </Pressable>
          </Pressable>
          <View
            style={[
              styles.frameParent1,
              styles.frameParentFlexBox,
              styles.frameParentPosition,
            ]}
          >
            <View style={styles.frameParentFlexBox}>
              <Image
                style={styles.groupLayout}
                resizeMode="cover"
                source={require("../assets/group-1026.png")}
              />
              <Text style={[styles.motDePasseTypo, styles.ml16]}>A propos</Text>
            </View>
            <Pressable style={[styles.arrow, styles.ml173]}>
              <View style={[styles.arrowChild, styles.vectorIconLayout]} />
              <Image
                style={styles.arrowItem}
                resizeMode="cover"
                source={require("../assets/vector-591.png")}
              />
            </Pressable>
          </View>
          <Image
            style={[styles.lineIcon, styles.menuParentPosition]}
            resizeMode="cover"
            source={require("../assets/line.png")}
          />
        </View>
        <View style={[styles.frameParent2, styles.menuParentPosition]}>
          <View style={[styles.imageParent, styles.frameParentFlexBox]}>
            <Image
              style={styles.imageIcon}
              resizeMode="cover"
              source={require("../assets/image1.png")}
            />
            <Text
              style={[styles.sergeKassi, styles.ml13, styles.dconnexionTypo]}
            >
              Serge Kassi
            </Text>
          </View>
          <View style={[styles.frameInner, styles.mt10]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml40: {
    marginLeft: Margin.m_21xl,
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
  ml13: {
    marginLeft: Margin.m_smi,
  },
  mt10: {
    marginTop: Margin.m_3xs,
  },
  frameChildLayout: {
    height: 45,
    position: "absolute",
  },
  frameParentPosition: {
    left: 7,
    position: "absolute",
  },
  menuParentPosition: {
    width: 335,
    left: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    width: 24,
    height: 24,
  },
  dconnexionTypo: {
    textAlign: "center",
    color: Color.black,
    lineHeight: 29,
    letterSpacing: -0.3,
    fontSize: 22,
  },
  groupChildPosition: {
    width: 41,
    height: 40,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  groupLayout: {
    width: 40,
    height: 40,
  },
  groupBg: {
    backgroundColor: Color.khaki,
    borderRadius: 12,
  },
  vectorFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  motDePasseTypo: {
    textAlign: "left",
    color: Color.darkslategray,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    lineHeight: 24,
    letterSpacing: 1,
    fontSize: 14,
  },
  burgerChild: {
    backgroundColor: Color.gray_500,
    height: 848,
    left: 0,
    top: 0,
    position: "absolute",
    width: 390,
  },
  frameChild: {
    top: 1,
    width: 45,
    left: 0,
    backgroundColor: Color.ivory,
  },
  icsharpCloseIcon: {
    width: 30,
    height: 30,
    top: 9,
    overflow: "hidden",
  },
  rectangleParent: {
    left: 345,
    borderRadius: 4,
    width: 46,
    top: 0,
  },
  vectorIcon: {
    height: 24,
  },
  dconnexion: {
    fontFamily: FontFamily.interRegular,
    width: 177,
  },
  menuInner: {
    top: 777,
    backgroundColor: Color.tomato,
    shadowColor: "rgba(255, 255, 255, 0.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
    paddingHorizontal: 43,
    paddingVertical: 19,
  },
  menuChild: {
    height: 777,
    top: 0,
    backgroundColor: Color.ivory,
  },
  changLeMotDePasseChild: {
    width: 217,
    height: 24,
  },
  arrowChild: {
    top: -6,
    left: -9,
    backgroundColor: Color.silver_100,
    display: "none",
    height: 24,
    position: "absolute",
  },
  arrowItem: {
    top: -1,
    left: -1,
    width: 8,
    height: 14,
    position: "absolute",
  },
  arrow: {
    width: 6,
    height: 12,
  },
  changLeMotDePasse: {
    top: 8,
    left: 13,
    position: "absolute",
  },
  groupContainer: {
    width: 305,
    height: 40,
    left: 7,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  vectorIcon1: {
    left: 12,
    width: 16,
    height: 22,
    top: 9,
    position: "absolute",
  },
  frameParent: {
    top: 64,
  },
  vectorIcon2: {
    width: 14,
    height: 22,
  },
  vectorWrapper: {
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  motDePasse: {
    left: 0,
    top: 0,
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
    position: "absolute",
  },
  frameParent1: {
    top: 232,
  },
  lineIcon: {
    top: 200,
    height: 1,
  },
  groupParent: {
    top: 118,
    height: 272,
  },
  imageIcon: {
    width: 43,
    height: 46,
  },
  sergeKassi: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 157,
    height: 28,
  },
  imageParent: {
    paddingHorizontal: 10,
    paddingVertical: 0,
  },
  frameInner: {
    width: 328,
    height: 1,
  },
  frameParent2: {
    top: 13,
  },
  menu: {
    width: 391,
    left: 0,
    top: 0,
    position: "absolute",
    height: 844,
  },
  burger: {
    overflow: "hidden",
    height: 844,
    width: 390,
    backgroundColor: Color.ivory,
  },
});

export default Burger;
