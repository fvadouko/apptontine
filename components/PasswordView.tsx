import * as React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import NameContainer from "./NameContainer";
import CountryContainer from "./CountryContainer";
import { Margin, FontFamily, Color } from "../GlobalStyles";

const PasswordView = () => {
  return (
    <View>
      <View>
        <Text style={styles.nom}>Nom</Text>
        <TextInput
          style={[styles.emailFieldChild, styles.mt7]}
          placeholder="Votre no"
          keyboardType="default"
          placeholderTextColor="#abb3bb"
        />
      </View>
      <View style={styles.mt8}>
        <Text style={styles.nom}>Prénom(s)</Text>
        <TextInput
          style={[styles.emailFieldChild, styles.mt7]}
          placeholder="Vos Prénom(s)"
          keyboardType="default"
          placeholderTextColor="#abb3bb"
        />
      </View>
      <NameContainer
        lastName="Pseudo"
        firstName="Votre pseudo"
        propMarginTop={8}
      />
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
      <CountryContainer
        country="Pays"
        countryInput="Votre pays"
        propMarginLeft={200}
      />
      <CountryContainer
        country="Ville"
        countryInput="Votre ville"
        propMarginLeft={204}
      />
      <NameContainer
        lastName="Mot de passe"
        firstName="Votre mot de passe "
        propMarginTop={8}
      />
      <NameContainer
        lastName="Confirmation mot de passe"
        firstName="Votre mot de passe "
        propMarginTop={8}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt7: {
    marginTop: Margin.m_6xs,
  },
  mt8: {
    marginTop: Margin.m_5xs,
  },
  nom: {
    fontSize: 14,
    letterSpacing: 0.3,
    lineHeight: 14,
    fontFamily: FontFamily.interRegular,
    color: Color.black,
    textAlign: "left",
  },
  emailFieldChild: {
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "#d0d0d0",
    borderWidth: 0.7,
    width: 327,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 17,
  },
});

export default PasswordView;
