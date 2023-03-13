import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Section7 from "../components/Section7";
import StatusContainer from "../components/StatusContainer";
import GroupContainer from "../components/GroupContainer";
import { Margin, FontFamily, Color } from "../GlobalStyles";

const PROFILE = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <Section7 icon={require("../assets/icon1.png")} />
      <StatusContainer />
      <View style={[styles.statusBar, styles.statusBarFlexBox]}>
        <View style={styles.barsstatusTime}>
          <Text style={[styles.time, styles.timeTypo]}>19:27</Text>
        </View>
        <Image
          style={[styles.symbolsIcon, styles.ml240]}
          resizeMode="cover"
          source={require("../assets/symbols1.png")}
        />
      </View>
      <View style={[styles.textParent, styles.statusBarFlexBox]}>
        <View style={styles.text}>
          <Text style={[styles.headline, styles.timeTypo]}>Profile</Text>
        </View>
        <View style={[styles.groupChildLayout, styles.ml214]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <View style={styles.groupItem} />
        </View>
      </View>
      <GroupContainer
        propTop={747}
        onIconPromoPress={() => navigation.navigate("MesFormules1")}
        onVectorPress={() => navigation.navigate("Recherche")}
        onProfilePress={() => navigation.navigate("PROFILE")}
        onAddPress={() => navigation.navigate("Souscription")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ml240: {
    marginLeft: Margin.m_221xl,
  },
  ml214: {
    marginLeft: 214,
  },
  statusBarFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  timeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  groupChildLayout: {
    height: 21,
    width: 54,
  },
  time: {
    fontSize: 15,
    letterSpacing: 0,
    color: Color.black,
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
  },
  headline: {
    fontSize: 30,
    letterSpacing: -0.1,
    color: Color.gray_100,
  },
  text: {
    flexDirection: "row",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "rgba(217, 217, 217, 0.8)",
    position: "absolute",
  },
  groupItem: {
    top: 1,
    left: 3,
    borderRadius: 24,
    backgroundColor: Color.white,
    width: 19,
    height: 19,
    position: "absolute",
  },
  textParent: {
    top: 103,
    left: 11,
  },
  profile: {
    backgroundColor: Color.ivory,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default PROFILE;
