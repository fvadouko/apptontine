import * as React from "react";
import { useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Image,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import Hellomalonecom from "./Hellomalonecom";
import SEPARATEUR from "./SEPARATEUR";
import { useNavigation } from "@react-navigation/native";
import { Margin, FontFamily, Color } from "../GlobalStyles";

const Alpha1Container = () => {
  const [frameFlatListData, setFrameFlatListData] = useState([
    <Hellomalonecom />,
    <SEPARATEUR />,
  ]);
  const navigation = useNavigation();

  return (
    <View style={styles.modalPosition}>
      <View style={[styles.modalPopChild, styles.modalPosition]} />
      <Pressable
        style={styles.materialSymbolscloseRounded}
        onPress={() => navigation.navigate("MesFormules1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/materialsymbolscloserounded.png")}
        />
      </Pressable>
      <Text style={[styles.alpha1, styles.alpha1Typo]}>Alpha1</Text>
      <ScrollView
        style={styles.frameParent}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <FlatList
          style={styles.frameChild}
          data={frameFlatListData}
          renderItem={({ item }) => item}
          contentContainerStyle={styles.frameFlatListContent}
        />
        <View style={styles.mt13}>
          <Text style={[styles.hellomalonecom, styles.alpha1Typo]}>
            Francis Nganou
          </Text>
          <View style={[styles.separateur, styles.mt20]}>
            <View style={[styles.separateurChild, styles.iconLayout]} />
          </View>
        </View>
        <View style={styles.mt13}>
          <Text style={[styles.hellomalonecom, styles.alpha1Typo]}>
            Francis Nganou
          </Text>
          <View style={[styles.separateur, styles.mt20]}>
            <View style={[styles.separateurChild, styles.iconLayout]} />
          </View>
        </View>
        <View style={styles.mt13}>
          <Text style={[styles.hellomalonecom, styles.alpha1Typo]}>
            Francis Nganou
          </Text>
          <View style={[styles.separateur, styles.mt20]}>
            <View style={[styles.separateurChild, styles.iconLayout]} />
          </View>
        </View>
        <View style={styles.mt13}>
          <Text style={[styles.hellomalonecom, styles.alpha1Typo]}>
            Francis Nganou
          </Text>
          <View style={[styles.separateur, styles.mt20]}>
            <View style={[styles.separateurChild, styles.iconLayout]} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlatListContent: {
    flexDirection: "column",
  },
  mt20: {
    marginTop: Margin.m_xl,
  },
  mt13: {
    marginTop: Margin.m_smi,
  },
  frameScrollViewContent: {
    flexDirection: "column",
  },
  modalPosition: {
    height: 401,
    width: 356,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  alpha1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
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
    overflow: "hidden",
  },
  materialSymbolscloseRounded: {
    left: 318,
    top: 14,
    width: 30,
    height: 30,
    position: "absolute",
  },
  alpha1: {
    top: 44,
    left: 140,
    fontSize: 24,
    textDecoration: "underline",
    color: Color.black,
    position: "absolute",
  },
  frameChild: {
    flex: 1,
  },
  hellomalonecom: {
    fontSize: 14,
    color: Color.gray_200,
  },
  separateurChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.dimgray_200,
    position: "absolute",
  },
  separateur: {
    width: 266,
    height: 1,
  },
  frameParent: {
    top: 107,
    left: 45,
    flex: 1,
    position: "absolute",
  },
});

export default Alpha1Container;
