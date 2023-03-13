import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  Text,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Margin, Color, FontFamily } from "../GlobalStyles";

const AppLockContainer = () => {
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
          source={require("../assets/materialsymbolscloserounded1.png")}
        />
      </Pressable>
      <View style={styles.titreParent}>
        <Text style={styles.titre}>Verrouillage App</Text>
        <View style={[styles.cardsParent, styles.mt60]}>
          <TextInput
            style={[styles.cards, styles.cardsBorder]}
            placeholder="Code vérroue"
            keyboardType="default"
            placeholderTextColor="rgba(21, 22, 36, 0.7)"
          />
          <Pressable style={[styles.button, styles.mt40]}>
            <View style={[styles.buttons, styles.buttonsPosition]}>
              <View
                style={[
                  styles.modifier,
                  styles.modifierFlexBox,
                  styles.cardsBorder,
                ]}
              >
                <View style={styles.modifierFlexBox}>
                  <Text style={styles.largeLabelMedium16px}>Validé</Text>
                  <Image
                    style={[
                      styles.materialSymbolsnavigateNextIcon,
                      styles.ml15,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/materialsymbolsnavigatenext1.png")}
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
    height: 279,
    width: 356,
  },
  buttonsPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  cardsBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
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
    top: 9,
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
  cards: {
    borderColor: "#2cb9b0",
    width: 315,
    height: 50,
    borderRadius: 7,
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
    borderColor: "#171717",
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
    top: 40,
    left: 21,
    height: 148,
    alignItems: "center",
    position: "absolute",
  },
  modalPop: {
    top: 218,
    left: 17,
    position: "absolute",
  },
});

export default AppLockContainer;
