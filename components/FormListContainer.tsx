import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import MoneyContainer from "./MoneyContainer";
import { Margin, Color, FontFamily } from "../GlobalStyles";

const FormListContainer = () => {
  return (
    <View style={[styles.cards, styles.mt30]}>
      <View style={[styles.cardsChild, styles.cardPosition]} />
      <Text style={styles.listeDesFormules}>Liste des formules</Text>
      <View style={[styles.card, styles.cardPosition]}>
        <MoneyContainer />
        <MoneyContainer propMarginTop={10} propDisplay="unset" />
        <MoneyContainer propMarginTop={10} propDisplay="unset" />
        <MoneyContainer propMarginTop={10} propDisplay="unset" />
        <MoneyContainer propMarginTop={10} propDisplay="unset" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt10: {
    marginTop: Margin.m_3xs,
  },
  cardPosition: {
    left: 0,
    position: "absolute",
    width: 359,
  },
  cardsChild: {
    top: 0,
    borderRadius: 7,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    height: 498,
  },
  listeDesFormules: {
    top: 16,
    left: 23,
    fontSize: 18,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  card: {
    top: 67,
    paddingHorizontal: 0,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  cards: {
    height: 498,
    width: 359,
  },
});

export default FormListContainer;
