import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { Margin, FontFamily, Color } from "../GlobalStyles";

type ProfileContainerType = {
  /** Action props */
  onIconPromoPress?: () => void;
  onVectorPress?: () => void;
  onProfilePress?: () => void;
};

const ProfileContainer = ({
  onIconPromoPress,
  onVectorPress,
  onProfilePress,
}: ProfileContainerType) => {
  return (
    <View style={[styles.navbar6, styles.navbar6Position]}>
      <Image
        style={[styles.navbar6Child, styles.navbar6Position]}
        resizeMode="cover"
        source={require("../assets/group-6166.png")}
      />
      <View style={styles.icones}>
        <View style={styles.homeParent}>
          <Image
            style={styles.homeIcon}
            resizeMode="cover"
            source={require("../assets/home.png")}
          />
          <Pressable
            style={[styles.homeIcon, styles.ml50]}
            onPress={onIconPromoPress}
          >
            <View style={[styles.iconColor, styles.iconLayout]} />
          </Pressable>
        </View>
        <View style={[styles.vectorParent, styles.ml145]}>
          <Pressable style={styles.homeIcon} onPress={onVectorPress}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/vector.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.homeIcon, styles.ml50]}
            onPress={onProfilePress}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/profile.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.titreIcones}>
        <View style={styles.vectorParent}>
          <Text style={[styles.acceuil, styles.acceuilTypo]}>Acceuil</Text>
          <Text style={[styles.formules, styles.ml33, styles.acceuilTypo]}>
            Formules
          </Text>
        </View>
        <View style={[styles.vectorParent, styles.ml111]}>
          <Text style={[styles.formules, styles.acceuilTypo]}>
            Souscription
          </Text>
          <Text style={[styles.formules, styles.ml30, styles.acceuilTypo]}>
            Profil
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml50: {
    marginLeft: Margin.m_31xl,
  },
  ml145: {
    marginLeft: Margin.m_126xl,
  },
  ml33: {
    marginLeft: 33,
  },
  ml30: {
    marginLeft: Margin.m_11xl,
  },
  ml111: {
    marginLeft: 111,
  },
  navbar6Position: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    width: "100%",
    height: "100%",
  },
  acceuilTypo: {
    textAlign: "center",
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    lineHeight: 15,
    letterSpacing: -0.2,
    fontSize: 11,
  },
  navbar6Child: {
    top: -2,
    height: 120,
  },
  homeIcon: {
    width: 24,
    height: 24,
  },
  iconColor: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.gray_500,
    position: "absolute",
  },
  homeParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  icon1: {
    overflow: "hidden",
  },
  vectorParent: {
    flexDirection: "row",
  },
  icones: {
    top: 35,
    left: 26,
    width: 347,
    flexDirection: "row",
    position: "absolute",
  },
  acceuil: {
    color: Color.tomato,
  },
  formules: {
    color: Color.gray_500,
  },
  titreIcones: {
    top: 66,
    left: 19,
    flexDirection: "row",
    position: "absolute",
  },
  navbar6: {
    top: 753,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
    height: 118,
    display: "none",
  },
});

export default ProfileContainer;
