import * as React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FcfaContainer from "./FcfaContainer";
import { Margin, Color, FontFamily } from "../GlobalStyles";

const FcfaCard = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.card, styles.mt30]}>
      <View style={[styles.card1, styles.card1FlexBox]}>
        <ImageBackground
          style={styles.cardChild}
          resizeMode="cover"
          source={require("../assets/rectangle34624630.png")}
        />
        <View style={[styles.left, styles.ml16]}>
          <Pressable
            onPress={() => navigation.navigate("ListeDesFeuillesDisponible")}
          >
            <Text
              style={[styles.alpha1, styles.retirFlexBox, styles.retirTypo]}
            >
              Alpha1
            </Text>
          </Pressable>
          <Text style={[styles.putNameHere, styles.mt4, styles.retirFlexBox]}>
            200.000 Fcfa
          </Text>
        </View>
        <Pressable
          style={[styles.label, styles.ml16, styles.card1FlexBox]}
          onPress={() => navigation.navigate("MesFormules")}
        >
          <Text style={[styles.retir, styles.retirFlexBox, styles.retirTypo]}>
            Retiré
          </Text>
        </Pressable>
      </View>
      <FcfaContainer />
      <FcfaContainer />
      <FcfaContainer />
      <FcfaContainer />
      <FcfaContainer />
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
  card1FlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  retirFlexBox: {
    textAlign: "left",
    color: Color.gray_100,
  },
  retirTypo: {
    fontFamily: FontFamily.spaceGroteskRegular,
    color: Color.gray_100,
  },
  cardChild: {
    borderRadius: 100,
    width: 38,
    height: 38,
  },
  alpha1: {
    fontSize: 14,
    textDecoration: "underline",
    alignSelf: "stretch",
  },
  putNameHere: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: FontFamily.spaceGroteskBold,
    alignSelf: "stretch",
  },
  left: {
    flex: 1,
  },
  retir: {
    fontSize: 12,
  },
  label: {
    borderRadius: 24,
    backgroundColor: Color.red_200,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  card1: {
    borderRadius: 12,
    backgroundColor: Color.khaki,
    overflow: "hidden",
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignSelf: "stretch",
  },
  card: {
    width: 359,
    paddingHorizontal: 0,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FcfaCard;
