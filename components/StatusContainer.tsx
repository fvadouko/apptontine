import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Margin, FontFamily, Color } from "../GlobalStyles";

const StatusContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.body}>
      <View style={styles.buttonFlexBox}>
        <Image
          style={styles.imageIcon}
          resizeMode="cover"
          source={require("../assets/image2.png")}
        />
        <View style={styles.ml22}>
          <View style={styles.buttonFlexBox}>
            <Text style={[styles.status, styles.nomTypo, styles.nomTypo1]}>
              Status
            </Text>
            <Image
              style={[styles.vectorIcon, styles.ml42]}
              resizeMode="cover"
              source={require("../assets/vector6.png")}
            />
          </View>
          <Text
            style={[
              styles.status,
              styles.mt20,
              styles.nomTypo,
              styles.nomTypo1,
            ]}
          >
            ID : Nom utilisateur
          </Text>
        </View>
      </View>
      <View style={styles.mt65}>
        <View style={styles.nomParent}>
          <Text
            style={[styles.nom, styles.nomTypo, styles.nomTypo1]}
          >{`Nom : `}</Text>
          <Text
            style={[
              styles.status,
              styles.ml43,
              styles.nomTypo,
              styles.nomTypo1,
            ]}
          >
            Kouakou
          </Text>
        </View>
        <View style={[styles.nomParent, styles.mt40]}>
          <Text
            style={[styles.nom, styles.nomTypo, styles.nomTypo1]}
          >{`Prenoms : `}</Text>
          <Text
            style={[
              styles.status,
              styles.ml10,
              styles.nomTypo,
              styles.nomTypo1,
            ]}
          >
            marcus tanoh
          </Text>
        </View>
        <View style={[styles.nomParent, styles.mt40]}>
          <Text
            style={[styles.nom, styles.nomTypo, styles.nomTypo1]}
          >{`Numero : `}</Text>
          <Text
            style={[
              styles.status,
              styles.ml14,
              styles.nomTypo,
              styles.nomTypo1,
            ]}
          >
            01010101010101
          </Text>
        </View>
        <View style={[styles.nomParent, styles.mt40]}>
          <Text
            style={[styles.nom, styles.nomTypo, styles.nomTypo1]}
          >{`Pays : `}</Text>
          <Text
            style={[
              styles.status,
              styles.ml36,
              styles.nomTypo,
              styles.nomTypo1,
            ]}
          >
            Côte d’ivoire
          </Text>
        </View>
        <View style={[styles.nomParent, styles.mt40]}>
          <Text
            style={[styles.nom, styles.nomTypo, styles.nomTypo1]}
          >{`Ville : `}</Text>
          <Text
            style={[
              styles.status,
              styles.ml40,
              styles.nomTypo,
              styles.nomTypo1,
            ]}
          >
            Abidjan
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.button, styles.mt65, styles.buttonFlexBox]}
        onPress={() => navigation.navigate("PROFILEmodifier")}
      >
        <Text style={[styles.largeLabelMedium16px, styles.nomTypo]}>
          Modifier
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ml42: {
    marginLeft: 42,
  },
  mt20: {
    marginTop: Margin.m_xl,
  },
  ml22: {
    marginLeft: Margin.m_3xl,
  },
  ml43: {
    marginLeft: 43,
  },
  ml10: {
    marginLeft: Margin.m_3xs,
  },
  ml14: {
    marginLeft: Margin.m_sm,
  },
  ml36: {
    marginLeft: 36,
  },
  ml40: {
    marginLeft: Margin.m_21xl,
  },
  mt40: {
    marginTop: Margin.m_21xl,
  },
  mt65: {
    marginTop: Margin.m_46xl,
  },
  nomTypo: {
    textAlign: "left",
    fontSize: 16,
  },
  nomTypo1: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 22,
    textAlign: "left",
    fontSize: 16,
  },
  buttonFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  imageIcon: {
    width: 130,
    height: 130,
  },
  status: {
    color: Color.black,
  },
  vectorIcon: {
    width: 35,
    height: 35,
  },
  nom: {
    color: Color.gray_400,
  },
  nomParent: {
    flexDirection: "row",
  },
  largeLabelMedium16px: {
    fontWeight: "700",
    fontFamily: FontFamily.spaceGroteskBold,
    color: Color.gray_100,
    textAlign: "left",
    fontSize: 16,
  },
  button: {
    borderRadius: 12,
    borderStyle: "solid",
    borderColor: "#171717",
    borderWidth: 1,
    overflow: "hidden",
    paddingHorizontal: 32,
    paddingVertical: 8,
  },
  body: {
    position: "absolute",
    top: 166,
    left: 50,
    alignItems: "center",
  },
});

export default StatusContainer;
