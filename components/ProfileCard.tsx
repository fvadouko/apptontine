import * as React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import NameContainer from "./NameContainer";
import CountryContainer from "./CountryContainer";
import { useNavigation } from "@react-navigation/native";
import { Margin, Color, FontFamily } from "../GlobalStyles";

const ProfileCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cards}>
      <View style={styles.buttonFlexBox}>
        <Image
          style={styles.photoIcon}
          resizeMode="cover"
          source={require("../assets/photo.png")}
        />
        <Text
          style={[styles.largeLabelMedium16px, styles.ml30, styles.largeTypo]}
        >
          Modifier votre photo
        </Text>
      </View>
      <View style={styles.mt20}>
        <NameContainer lastName="Nom" />
        <NameContainer lastName="Prénom(s)" propMarginTop={8} />
        <NameContainer lastName="Pseudo" propMarginTop={8} />
        <NameContainer
          lastName="Email"
          firstName="Votre email"
          propMarginTop={8}
        />
        <NameContainer
          lastName="Numero"
          firstName="Votre numero"
          propMarginTop={8}
        />
        <CountryContainer country="Pays" countryInput="Votre pays" />
        <CountryContainer
          country="Ville"
          countryInput="Votre ville"
          propMarginLeft={204}
        />
      </View>
      <Pressable
        style={[styles.button, styles.mt20, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("PROFILE")}
      >
        <Text style={[styles.largeLabelMedium16px1, styles.largeTypo]}>
          Emregistrer
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ml30: {
    marginLeft: Margin.m_11xl,
  },
  mt8: {
    marginTop: Margin.m_5xs,
  },
  mt20: {
    marginTop: Margin.m_xl,
  },
  largeTypo: {
    textAlign: "left",
    color: Color.maroon,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  buttonFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  photoIcon: {
    borderRadius: 10,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  largeLabelMedium16px: {
    fontSize: 18,
  },
  largeLabelMedium16px1: {
    fontSize: 16,
  },
  button: {
    borderRadius: 12,
    backgroundColor: Color.goldenrod,
    width: 324,
    paddingHorizontal: 32,
    paddingVertical: 12,
    overflow: "hidden",
  },
  cards: {
    position: "absolute",
    top: 182,
    left: 32,
    alignItems: "center",
  },
});

export default ProfileCard;
