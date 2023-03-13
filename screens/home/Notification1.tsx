import * as React from "react";
import { View, Pressable, Image, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ViewToday from "../components/ViewToday";
import HierView from "../components/HierView";
import ViewDatePicker from "../components/ViewDatePicker";
import Group239702Container from "../components/Group239702Container";
import { Margin, FontFamily, Color } from "../GlobalStyles";

const Notification1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notification}>
      <View style={styles.frameParent}>
        <Pressable
          style={styles.headerWrapper}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <View style={styles.header}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/icon7.png")}
            />
            <Text style={[styles.lesNotifications, styles.ml84]}>
              Les notifications
            </Text>
          </View>
        </Pressable>
        <ViewToday />
        <HierView />
        <ViewDatePicker />
      </View>
      <View style={styles.statusBar}>
        <View style={styles.barsstatusTime}>
          <Text style={styles.time}>19:27</Text>
        </View>
        <Image
          style={[styles.symbolsIcon, styles.ml240]}
          resizeMode="cover"
          source={require("../assets/symbols4.png")}
        />
      </View>
      <Group239702Container
        productIds={require("../assets/home3.png")}
        productIds24x24={require("../assets/vector7.png")}
        productIds24x24x={require("../assets/profile5.png")}
        propTop={847}
        propColor="#f25650"
        propColor1="rgba(255, 255, 255, 0.7)"
        propColor2="rgba(255, 255, 255, 0.7)"
        propBackgroundColor="rgba(255, 255, 255, 0.7)"
        propLeft={23}
        propTop1={0}
        onIconPromoPress={() => navigation.navigate("MesFormules1")}
        onVectorPress={() => navigation.navigate("Recherche")}
        onProfilePress={() => navigation.navigate("PROFILE")}
        onAddPress={() => navigation.navigate("Souscription")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ml84: {
    marginLeft: 84,
  },
  ml240: {
    marginLeft: Margin.m_221xl,
  },
  icon: {
    width: 20,
    height: 20,
  },
  lesNotifications: {
    fontSize: 16,
    letterSpacing: 1,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textAlign: "center",
    width: 170,
    height: 24,
    color: Color.black,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerWrapper: {
    top: 37,
    left: 15,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  frameParent: {
    top: 0,
    left: 0,
    width: 389,
    height: 869,
    position: "absolute",
    backgroundColor: Color.ivory,
  },
  time: {
    fontSize: 15,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    textAlign: "left",
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
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  notification: {
    flex: 1,
    width: "100%",
    height: 944,
    overflow: "hidden",
    backgroundColor: Color.ivory,
  },
});

export default Notification1;
