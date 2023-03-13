import * as React from "react";
import { View, StyleSheet, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Margin, Color, FontFamily } from "../GlobalStyles";

const PaymentModeContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.modalPop, styles.modalLayout]}>
      <View
        style={[
          styles.modalPopChild,
          styles.buttonsPosition,
          styles.modalLayout,
        ]}
      />
      <Pressable
        style={styles.materialSymbolscloseRounded}
        onPress={() => navigation.navigate("Burger")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/materialsymbolscloserounded.png")}
        />
      </Pressable>
      <View style={styles.titreParent}>
        <Text style={styles.titre}>Mode de paiement</Text>
        <View style={[styles.cardsParent, styles.mt60]}>
          <View style={styles.cards}>
            <Pressable style={[styles.fieldBgParent, styles.fieldLayout]}>
              <Image
                style={styles.fieldBgIcon}
                resizeMode="cover"
                source={require("../assets/fieldbg1.png")}
              />
              <Text style={styles.hellomalonecom}>Orange</Text>
            </Pressable>
            <Pressable style={[styles.fieldLayout, styles.mt25]}>
              <Image
                style={styles.fieldBgIcon}
                resizeMode="cover"
                source={require("../assets/fieldbg.png")}
              />
              <Text style={styles.hellomalonecom}>MTN</Text>
            </Pressable>
            <Pressable style={[styles.fieldLayout, styles.mt25]}>
              <Image
                style={styles.fieldBgIcon}
                resizeMode="cover"
                source={require("../assets/fieldbg.png")}
              />
              <Text style={styles.hellomalonecom}>Moov</Text>
            </Pressable>
          </View>
          <Pressable style={[styles.button, styles.mt40]}>
            <View style={[styles.buttons, styles.buttonsPosition]}>
              <View style={[styles.modifier, styles.modifierFlexBox]}>
                <View style={styles.modifierFlexBox}>
                  <Text style={styles.largeLabelMedium16px}>Validé</Text>
                  <Image
                    style={[
                      styles.materialSymbolsnavigateNextIcon,
                      styles.ml15,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/materialsymbolsnavigatenext.png")}
                  />
                </View>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  modalLayout: {
    height: 443,
    width: 356,
  },
  buttonsPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  fieldLayout: {
    height: 50,
    width: 315,
  },
  modifierFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  modalPopChild: {
    borderRadius: 24,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  materialSymbolscloseRounded: {
    left: 305,
    top: 13,
    width: 30,
    height: 30,
    position: "absolute",
  },
  titre: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    color: Color.black,
    textAlign: "left",
  },
  fieldBgIcon: {
    height: "102%",
    width: "100.32%",
    top: "-1%",
    right: "-0.16%",
    bottom: "-1%",
    left: "-0.16%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  hellomalonecom: {
    top: "32%",
    left: "3.81%",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.gray_200,
    textAlign: "left",
    position: "absolute",
  },
  fieldBgParent: {
    borderColor: "#2CB9B0",
    borderRadius: "7",
  },
  cards: {
    justifyContent: "center",
    alignItems: "center",
  },
  largeLabelMedium16px: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: FontFamily.spaceGroteskBold,
    color: Color.gray_100,
    textAlign: "left",
  },
  materialSymbolsnavigateNextIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  modifier: {
    borderRadius: 12,
    borderStyle: "solid",
    borderColor: "#171717",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    justifyContent: "center",
    overflow: "hidden",
  },
  buttons: {
    justifyContent: "center",
  },
  button: {
    width: 108,
    height: 42,
  },
  cardsParent: {
    alignItems: "flex-end",
  },
  titreParent: {
    top: 58,
    left: 21,
    alignItems: "center",
    position: "absolute",
  },
  modalPop: {
    top: 218,
    left: 17,
    position: "absolute",
  },
});

export default PaymentModeContainer;
