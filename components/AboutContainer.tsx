import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from "react-native";
import { Margin, Color, FontFamily } from "../GlobalStyles";

type AboutContainerType = {
  productId?: ImageSourcePropType;
};

const AboutContainer = ({ productId }: AboutContainerType) => {
  return (
    <View style={[styles.groupParent, styles.lineIconLayout]}>
      <View style={styles.groupContainer}>
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
                styles.groupInnerPosition,
              ]}
            >
              <View style={[styles.iconSettingChild, styles.childLayout]} />
            </View>
          </View>
        </View>
        <View style={[styles.changLeMotDePasse, styles.frameParentFlexBox]}>
          <View style={styles.groupView}>
            <Image
              style={styles.groupItem}
              resizeMode="cover"
              source={require("../assets/group-460.png")}
            />
            <Text style={[styles.changLeMot, styles.motTypo]}>
              Changé le mot de passe
            </Text>
          </View>
          <View style={[styles.arrowLayout, styles.ml70]}>
            <View style={[styles.arrowChild, styles.childLayout]} />
            <Image
              style={[styles.arrowItem, styles.arrowLayout]}
              resizeMode="cover"
              source={require("../assets/vector-59.png")}
            />
          </View>
        </View>
      </View>
      <View
        style={[
          styles.frameParent,
          styles.frameParentFlexBox,
          styles.frameParentPosition,
        ]}
      >
        <View style={styles.frameParentFlexBox}>
          <View style={styles.groupLayout}>
            <View
              style={[
                styles.groupInner,
                styles.groupLayout,
                styles.groupBg,
                styles.groupInnerPosition,
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
          <View style={[styles.arrowChild, styles.childLayout]} />
          <Image
            style={[styles.arrowItem, styles.arrowLayout]}
            resizeMode="cover"
            source={require("../assets/vector-591.png")}
          />
        </View>
      </View>
      <View style={[styles.frameGroup, styles.frameParentFlexBox]}>
        <View style={styles.vectorWrapperFlexBox}>
          <View
            style={[
              styles.vectorWrapper,
              styles.vectorWrapperFlexBox,
              styles.groupLayout,
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
            <Text
              style={[
                styles.motDePasse,
                styles.motTypo,
                styles.groupInnerPosition,
              ]}
            >
              Mot de passe paiement
            </Text>
          </View>
        </View>
        <View style={[styles.arrowLayout, styles.ml64]}>
          <View style={[styles.arrowChild, styles.childLayout]} />
          <Image
            style={[styles.arrowItem, styles.arrowLayout]}
            resizeMode="cover"
            source={require("../assets/vector-592.png")}
          />
        </View>
      </View>
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
            source={productId}
          />
          <Text style={[styles.motTypo, styles.ml16]}>A propos</Text>
        </View>
        <View style={[styles.arrowLayout, styles.ml173]}>
          <View style={[styles.arrowChild, styles.childLayout]} />
          <Image
            style={[styles.arrowItem, styles.arrowLayout]}
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
  );
};

const styles = StyleSheet.create({
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
  groupInnerPosition: {
    left: 0,
    top: 0,
  },
  childLayout: {
    display: "none",
    height: 24,
    position: "absolute",
  },
  frameParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  motTypo: {
    textAlign: "left",
    color: Color.darkslategray,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    lineHeight: 24,
    letterSpacing: 1,
    fontSize: 14,
  },
  arrowLayout: {
    height: 12,
    width: 6,
  },
  frameParentPosition: {
    left: 7,
    flexDirection: "row",
    position: "absolute",
  },
  groupLayout: {
    width: 40,
    height: 40,
  },
  groupBg: {
    backgroundColor: Color.khaki,
    borderRadius: 12,
  },
  vectorWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconSettingChild: {
    top: -3,
    left: -5,
    backgroundColor: Color.darkslateblue,
    width: 25,
  },
  iconSetting: {
    top: 0,
  },
  iconSettingWrapper: {
    top: 11,
    left: 13,
  },
  groupItem: {
    height: "75%",
    width: "6.66%",
    top: "12.5%",
    right: "93.34%",
    bottom: "12.5%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  changLeMot: {
    left: 43,
    top: 0,
    position: "absolute",
  },
  groupView: {
    width: 216,
    height: 24,
  },
  arrowChild: {
    top: -6,
    left: -9,
    backgroundColor: Color.silver_100,
    width: 24,
  },
  arrowItem: {
    left: 6,
    top: 0,
    position: "absolute",
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
  groupInner: {
    top: 0,
    position: "absolute",
  },
  vectorIcon: {
    top: 9,
    left: 12,
    width: 16,
    height: 22,
    position: "absolute",
  },
  frameParent: {
    top: 64,
  },
  vectorIcon1: {
    width: 14,
    height: 22,
  },
  vectorWrapper: {
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  motDePasse: {
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
  },
  groupParent: {
    top: 118,
    height: 272,
    position: "absolute",
  },
});

export default AboutContainer;
