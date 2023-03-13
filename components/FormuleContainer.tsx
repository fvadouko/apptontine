import * as React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import IDFormuleContainer from "./IDFormuleContainer";
import { Margin, Color, FontFamily } from "../GlobalStyles";

const FormuleContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.cards, styles.mt30, styles.cardsBg]}>
      <View style={styles.card}>
        <View style={styles.card1}>
          <ImageBackground
            style={styles.cardChild}
            resizeMode="cover"
            source={require("../assets/rectangle34624630.png")}
          />
          <View style={[styles.left, styles.ml16]}>
            <Text style={styles.putNameHere}>ID Formule</Text>
            <View style={[styles.groupChildLayout, styles.mt4]}>
              <View
                style={[
                  styles.groupChild,
                  styles.groupChildLayout,
                  styles.cardsBg,
                ]}
              />
              <Text style={[styles.ac45pl, styles.ac45plTypo]}>AC45PL</Text>
            </View>
          </View>
          <Pressable
            style={styles.ml16}
            onPress={() => navigation.navigate("Souscriptioncode")}
          >
            <Text style={[styles.copier1, styles.ac45plTypo]}>copier</Text>
          </Pressable>
        </View>
        <IDFormuleContainer />
        <IDFormuleContainer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: Margin.m_9xs,
  },
  ml16: {
    marginLeft: Margin.m_base,
  },
  mt10: {
    marginTop: Margin.m_3xs,
  },
  cardsBg: {
    backgroundColor: Color.white,
    borderRadius: 7,
  },
  groupChildLayout: {
    height: 34,
    width: 133,
  },
  ac45plTypo: {
    color: Color.black,
    textAlign: "left",
    lineHeight: 16,
    fontSize: 16,
  },
  cardChild: {
    borderRadius: 100,
    width: 38,
    height: 38,
  },
  putNameHere: {
    fontFamily: FontFamily.interRegular,
    color: Color.gray_100,
    width: 85,
    textAlign: "left",
    lineHeight: 16,
    fontSize: 16,
  },
  groupChild: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  ac45pl: {
    top: 9,
    left: 37,
    fontFamily: FontFamily.spaceGroteskRegular,
    position: "absolute",
  },
  left: {
    flex: 1,
    alignItems: "center",
  },
  copier1: {
    textDecoration: "underline",
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
  },
  card1: {
    borderRadius: 12,
    backgroundColor: Color.khaki,
    width: 317,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignItems: "center",
  },
  card: {
    width: 359,
    paddingHorizontal: 10,
    paddingVertical: 8,
    justifyContent: "center",
  },
  cards: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    height: 343,
    paddingHorizontal: 0,
    paddingVertical: 10,
    alignItems: "center",
  },
});

export default FormuleContainer;
