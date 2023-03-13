import * as React from "react";
import { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Margin, Color, FontFamily } from "../GlobalStyles";

type DashboardSectionType = {
  /** Style props */
  propDisplay?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const DashboardSection = ({ propDisplay }: DashboardSectionType) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("display", propDisplay),
    };
  }, [propDisplay]);

  return (
    <View style={[styles.frameParent, frameViewStyle]}>
      <View style={styles.dashboardWrapper}>
        <Text style={[styles.dashboard, styles.fcfaTypo]}>Dashboard</Text>
      </View>
      <View style={[styles.bgParent, styles.mt30, styles.bgLayout]}>
        <View style={[styles.bg, styles.bgLayout]} />
        <View style={styles.frameGroup}>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textTypo]}>10.000</Text>
            <Text style={[styles.fcfa, styles.ml5, styles.fcfaTypo]}>Fcfa</Text>
          </View>
          <Text style={[styles.soldeRetir, styles.mt16, styles.textTypo]}>
            Solde à retiré
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
  bgLayout: {
    height: 124,
    width: 357,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
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
  bg: {
    top: 0,
    left: 0,
    borderRadius: 24,
    backgroundColor: Color.yellowgreen,
    shadowColor: "rgba(0, 13, 58, 0.04)",
    shadowRadius: 32,
    elevation: 32,
    position: "absolute",
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
  soldeRetir: {
    fontSize: 30,
  },
  frameGroup: {
    top: 18,
    left: 84,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  bgParent: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowRadius: 10,
    elevation: 10,
  },
  frameParent: {
    top: 112,
    left: 16,
    display: "none",
    position: "absolute",
  },
});

export default DashboardSection;
