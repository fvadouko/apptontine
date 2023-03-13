import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Margin, Color, FontFamily } from "../GlobalStyles";

const DashboardView = () => {
  return (
    <View style={styles.solde}>
      <View style={styles.dashboardWrapper}>
        <Text style={[styles.dashboard, styles.fcfaTypo]}>Dashboard</Text>
      </View>
      <View style={[styles.soldeInner, styles.mt30]}>
        <View style={styles.frameParent}>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textTypo]}>10.000</Text>
            <Text style={[styles.fcfa, styles.ml5, styles.fcfaTypo]}>Fcfa</Text>
          </View>
          <Text style={[styles.solde1, styles.mt16, styles.textTypo]}>
            SOLDE
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml5: {
    marginLeft: Margin.m_8xs,
  },
  mt16: {
    marginTop: Margin.m_base,
  },
  mt30: {
    marginTop: Margin.m_11xl,
  },
  fcfaTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  textTypo: {
    lineHeight: 36,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  dashboard: {
    lineHeight: 22,
    fontSize: 30,
  },
  dashboardWrapper: {
    flexDirection: "row",
  },
  text: {
    fontSize: 36,
  },
  fcfa: {
    fontSize: 16,
    lineHeight: 24,
  },
  parent: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  solde1: {
    fontSize: 30,
  },
  frameParent: {
    top: 18,
    left: 100,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  soldeInner: {
    borderRadius: 24,
    backgroundColor: Color.yellowgreen,
    shadowColor: "rgba(0, 13, 58, 0.04)",
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowRadius: 32,
    elevation: 32,
    shadowOpacity: 1,
    width: 357,
    height: 124,
  },
  solde: {
    top: 112,
    left: 16,
    position: "absolute",
  },
});

export default DashboardView;
