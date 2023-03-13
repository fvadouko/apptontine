import * as React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import Section7 from "../components/Section7";
import FormuleContainer from "../components/FormuleContainer";
import Group239702Container from "../components/Group239702Container";
import { Margin, Color, FontFamily } from "../GlobalStyles";

const Recherche = () => {
  const [frameDropdownOpen, setFrameDropdownOpen] = useState(false);
  const [frameDropdownValue, setFrameDropdownValue] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.recherche}>
      <Section7 icon={require("../assets/icon1.png")} />
      <View style={styles.frameParent}>
        <View style={styles.rechercheWrapper}>
          <Text style={[styles.recherche1, styles.timeFlexBox]}>Recherche</Text>
        </View>
        <View style={[styles.wrapper, styles.mt30, styles.wrapperFlexBox]}>
          <DropDownPicker
            style={styles.dropdownpicker}
            open={frameDropdownOpen}
            setOpen={setFrameDropdownOpen}
            value={frameDropdownValue}
            setValue={setFrameDropdownValue}
            placeholder="Formules"
            labelStyle={styles.frameDropdownValue}
            dropDownContainerStyle={styles.frameDropdowndropDownContainer}
          />
        </View>
        <FormuleContainer />
      </View>
      <View style={[styles.statusBar, styles.wrapperFlexBox]}>
        <View style={styles.barsstatusTime}>
          <Text style={[styles.time, styles.timeFlexBox]}>19:27</Text>
        </View>
        <Image
          style={[styles.symbolsIcon, styles.ml240]}
          resizeMode="cover"
          source={require("../assets/symbols2.png")}
        />
      </View>
      <Group239702Container
        productIds={require("../assets/home1.png")}
        productIds24x24={require("../assets/vector5.png")}
        productIds24x24x={require("../assets/profile3.png")}
        propTop={747}
        propColor="rgba(255, 255, 255, 0.7)"
        propColor1="rgba(255, 255, 255, 0.7)"
        propColor2="#f25650"
        propBackgroundColor="rgba(255, 255, 255, 0.7)"
        propLeft={263}
        propTop1={-1}
        onIconPromoPress={() => navigation.navigate("MesFormules1")}
        onVectorPress={() => navigation.navigate("Recherche")}
        onProfilePress={() => navigation.navigate("PROFILE")}
        onAddPress={() => navigation.navigate("Souscription")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameDropdownValue: {
    color: "#abb3bb",
    fontSize: 14,
    fontFamily: "Inter_regular",
  },
  frameDropdowndropDownContainer: {
    borderStyle: "solid",
    borderColor: "#d0d0d0",
    borderWidth: 0.7,
  },
  mt30: {
    marginTop: Margin.m_11xl,
  },
  ml240: {
    marginLeft: Margin.m_221xl,
  },
  timeFlexBox: {
    textAlign: "left",
    color: Color.black,
  },
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  recherche1: {
    fontSize: 30,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
  },
  rechercheWrapper: {
    flexDirection: "row",
  },
  dropdownpicker: {
    borderColor: "#d0d0d0",
    borderWidth: 0.7,
    borderStyle: "solid",
  },
  wrapper: {
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 17,
    justifyContent: "center",
    borderStyle: "solid",
    width: 359,
    overflow: "hidden",
  },
  frameParent: {
    top: 112,
    left: 16,
    width: 359,
    position: "absolute",
  },
  time: {
    fontSize: 15,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  barsstatusTime: {
    paddingHorizontal: 0,
    paddingVertical: 2,
    flexDirection: "row",
  },
  symbolsIcon: {
    width: 68,
    height: 13,
    overflow: "hidden",
  },
  statusBar: {
    top: 7,
    right: 21,
    left: 22,
    display: "none",
    position: "absolute",
  },
  recherche: {
    backgroundColor: Color.ivory,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Recherche;
