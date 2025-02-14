import * as React from "react";
import { useState } from "react";
import {
  StyleProp,
  ViewStyle,
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { Checkbox as RNPCheckbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Margin, FontFamily, Color } from "../GlobalStyles";

type Login1Type = {
  style?: StyleProp<ViewStyle>;
};

const Login1 = ({ style }: Login1Type) => {
  const [checkchecked, setCheckchecked] = useState(undefined);
  const navigation = useNavigation();

  return (
    <View style={[styles.login1, style, styles.bodyLayout]}>
      <View style={[styles.body, styles.bodyLayout]}>
        <View style={[styles.slideLogin, styles.mt50]}>
          <View style={styles.slide}>
            <View style={styles.titre}>
              <Text
                style={[styles.bienvenueSurFast, styles.bienvenueSurFastTypo]}
              >
                BIENVENUE SUR FAST CASH
              </Text>
              <Text
                style={[styles.loremIpsumDolor, styles.mt8]}
              >{`Lorem ipsum dolor sit amet consectetur.
Lorem ipsum dolor sit amet consectetur.`}</Text>
            </View>
            <Image
              style={[styles.slideButtonIcon, styles.mt25]}
              resizeMode="cover"
              source={require("../assets/slide-button.png")}
            />
          </View>
          <View style={[styles.cards, styles.mt45]}>
            <View>
              <View>
                <Text style={styles.nomDutilisateur}>Nom d’utilisateur</Text>
                <TextInput
                  style={[
                    styles.emailFieldChild,
                    styles.mt7,
                    styles.fieldChildBorder,
                  ]}
                  placeholder="Votre nom d’utilisateur"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  placeholderTextColor="#abb3bb"
                />
              </View>
              <View style={styles.mt16}>
                <Text style={styles.nomDutilisateur}>Mot de passe</Text>
                <TextInput
                  style={[
                    styles.passwordFieldChild,
                    styles.mt7,
                    styles.fieldChildBorder,
                  ]}
                  placeholder="votre mot de passe"
                  keyboardType="default"
                  autoCapitalize="none"
                  secureTextEntry
                  placeholderTextColor="#abb3bb"
                />
              </View>
              <View style={[styles.keepLoggedInParent, styles.mt16]}>
                <View style={styles.keepLoggedIn}>
                  <View>
                    <RNPCheckbox
                      status={checkchecked ? "checked" : "unchecked"}
                      onPress={() => setCheckchecked(!checkchecked)}
                      color="#d0d0d0"
                    />
                  </View>
                  <Text
                    style={[
                      styles.gardezMoiConnect,
                      styles.ml10,
                      styles.forgotPasswordTypo,
                    ]}
                  >
                    Gardez-moi connecté
                  </Text>
                </View>
                <Text
                  style={[styles.forgotPassword, styles.forgotPasswordTypo]}
                >
                  Mot de passe oublié ?
                </Text>
              </View>
            </View>
            <Pressable
              style={[styles.button, styles.mt20]}
              onPress={() => navigation.navigate("Dashboard")}
            >
              <Text
                style={[
                  styles.largeLabelMedium16px,
                  styles.bienvenueSurFastTypo,
                ]}
              >
                Se connecter
              </Text>
            </Pressable>
            <View style={[styles.inscrivezVous, styles.mt20]}>
              <Text style={[styles.vousNavezPas, styles.vousTypo]}>
                Vous n'avez pas de compte ?
              </Text>
              <Pressable onPress={() => navigation.navigate("SignUp")}>
                <Text style={[styles.inscrivezVous2, styles.vousTypo]}>
                  Inscrivez-vous
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt8: {
    marginTop: Margin.m_5xs,
  },
  mt25: {
    marginTop: Margin.m_6xl,
  },
  mt7: {
    marginTop: Margin.m_6xs,
  },
  ml10: {
    marginLeft: Margin.m_3xs,
  },
  mt16: {
    marginTop: Margin.m_base,
  },
  mt20: {
    marginTop: Margin.m_xl,
  },
  mt45: {
    marginTop: Margin.m_26xl,
  },
  mt50: {
    marginTop: Margin.m_31xl,
  },
  bodyLayout: {
    width: 416,
    alignItems: "center",
  },
  bienvenueSurFastTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
  },
  fieldChildBorder: {
    borderWidth: 0.7,
    borderColor: "#d0d0d0",
    borderStyle: "solid",
    borderRadius: 8,
    width: 327,
  },
  forgotPasswordTypo: {
    letterSpacing: 0.2,
    fontSize: 12,
    lineHeight: 14,
    fontFamily: FontFamily.interRegular,
  },
  vousTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 25,
    letterSpacing: 1,
    fontSize: 14,
    textAlign: "left",
  },
  bienvenueSurFast: {
    fontSize: 18,
    letterSpacing: 0.4,
    lineHeight: 32,
    color: Color.darkslategray,
    textAlign: "left",
  },
  loremIpsumDolor: {
    lineHeight: 24,
    color: Color.lightslategray,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    letterSpacing: 1,
    fontSize: 14,
    width: 304,
  },
  titre: {
    height: 88,
    justifyContent: "center",
    width: 304,
    alignItems: "center",
  },
  slideButtonIcon: {
    width: 50,
    height: 6,
  },
  slide: {
    height: 127,
    alignItems: "center",
  },
  nomDutilisateur: {
    letterSpacing: 0.3,
    color: Color.black,
    lineHeight: 14,
    fontFamily: FontFamily.interRegular,
    fontSize: 14,
    textAlign: "left",
  },
  emailFieldChild: {
    paddingHorizontal: 20,
    paddingVertical: 17,
    flexDirection: "row",
    width: 327,
    overflow: "hidden",
  },
  passwordFieldChild: {
    height: 48,
    paddingHorizontal: 14,
    paddingVertical: 0,
    alignItems: "flex-end",
    width: 327,
    justifyContent: "center",
  },
  gardezMoiConnect: {
    color: Color.darkgray,
    textAlign: "left",
  },
  keepLoggedIn: {
    width: 162,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  forgotPassword: {
    color: Color.coral,
    textAlign: "right",
  },
  keepLoggedInParent: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 327,
    alignItems: "center",
  },
  largeLabelMedium16px: {
    fontSize: 16,
    color: Color.maroon,
    textAlign: "left",
  },
  button: {
    borderRadius: 12,
    backgroundColor: Color.goldenrod,
    width: 324,
    paddingHorizontal: 32,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  vousNavezPas: {
    color: Color.silver_200,
    width: 211,
  },
  inscrivezVous2: {
    width: 107,
    color: Color.maroon,
  },
  inscrivezVous: {
    height: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  cards: {
    width: 334,
    alignItems: "center",
  },
  slideLogin: {
    width: 341,
    alignItems: "center",
  },
  body: {
    alignItems: "center",
  },
  login1: {
    backgroundColor: Color.ivory,
    height: 844,
    paddingHorizontal: 0,
    paddingVertical: 50,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default Login1;
