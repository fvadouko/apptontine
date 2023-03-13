import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Pressable,
  Image,
} from "react-native";
import { Margin, Color, FontFamily } from "../GlobalStyles";

type SubscriptionSectionType = {
  /** Action props */
  onIconPress?: () => void;
  onIconPress1?: () => void;
  onIconPress2?: () => void;
  onIconPress3?: () => void;
  onIconPress4?: () => void;
};

const SubscriptionSection = ({
  onIconPress,
  onIconPress1,
  onIconPress2,
  onIconPress3,
  onIconPress4,
}: SubscriptionSectionType) => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.souscriptionWrapper}>
        <Text style={[styles.souscription, styles.souscriptionTypo]}>
          Souscription
        </Text>
      </View>
      <View style={[styles.cards, styles.mt30]}>
        <View style={[styles.cardsChild, styles.cardPosition]} />
        <Text style={[styles.listeDesFormules, styles.souscriptionTypo]}>
          Liste des formules
        </Text>
        <View style={[styles.card, styles.cardFlexBox, styles.cardPosition]}>
          <View style={[styles.card1, styles.cardFlexBox]}>
            <ImageBackground
              style={styles.cardChild}
              resizeMode="cover"
              source={require("../assets/rectangle34624630.png")}
            />
            <View style={[styles.left, styles.ml16]}>
              <Text style={[styles.putNameHere, styles.putFlexBox]}>
                Alpha1
              </Text>
              <Text
                style={[styles.putNameHere1, styles.mt4, styles.putFlexBox]}
              >
                200.000 Fcfa
              </Text>
            </View>
            <Pressable style={[styles.icon, styles.ml16]} onPress={onIconPress}>
              <Image
                style={styles.icon1}
                resizeMode="cover"
                source={require("../assets/icon3.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.card1, styles.mt10, styles.cardFlexBox]}>
            <ImageBackground
              style={styles.cardChild}
              resizeMode="cover"
              source={require("../assets/rectangle34624630.png")}
            />
            <View style={[styles.left, styles.ml16]}>
              <Text style={[styles.putNameHere, styles.putFlexBox]}>
                Alpha1
              </Text>
              <Text
                style={[styles.putNameHere1, styles.mt4, styles.putFlexBox]}
              >
                200.000 Fcfa
              </Text>
            </View>
            <Pressable
              style={[styles.icon, styles.ml16]}
              onPress={onIconPress1}
            >
              <Image
                style={styles.icon1}
                resizeMode="cover"
                source={require("../assets/icon3.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.card1, styles.mt10, styles.cardFlexBox]}>
            <ImageBackground
              style={styles.cardChild}
              resizeMode="cover"
              source={require("../assets/rectangle34624630.png")}
            />
            <View style={[styles.left, styles.ml16]}>
              <Text style={[styles.putNameHere, styles.putFlexBox]}>
                Alpha1
              </Text>
              <Text
                style={[styles.putNameHere1, styles.mt4, styles.putFlexBox]}
              >
                200.000 Fcfa
              </Text>
            </View>
            <Pressable
              style={[styles.icon, styles.ml16]}
              onPress={onIconPress2}
            >
              <Image
                style={styles.icon1}
                resizeMode="cover"
                source={require("../assets/icon4.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.card1, styles.mt10, styles.cardFlexBox]}>
            <ImageBackground
              style={styles.cardChild}
              resizeMode="cover"
              source={require("../assets/rectangle34624630.png")}
            />
            <View style={[styles.left, styles.ml16]}>
              <Text style={[styles.putNameHere, styles.putFlexBox]}>
                Alpha1
              </Text>
              <Text
                style={[styles.putNameHere1, styles.mt4, styles.putFlexBox]}
              >
                200.000 Fcfa
              </Text>
            </View>
            <Pressable
              style={[styles.icon, styles.ml16]}
              onPress={onIconPress3}
            >
              <Image
                style={styles.icon1}
                resizeMode="cover"
                source={require("../assets/icon4.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.card1, styles.mt10, styles.cardFlexBox]}>
            <ImageBackground
              style={styles.cardChild}
              resizeMode="cover"
              source={require("../assets/rectangle34624630.png")}
            />
            <View style={[styles.left, styles.ml16]}>
              <Text style={[styles.putNameHere, styles.putFlexBox]}>
                Alpha1
              </Text>
              <Text
                style={[styles.putNameHere1, styles.mt4, styles.putFlexBox]}
              >
                200.000 Fcfa
              </Text>
            </View>
            <Pressable
              style={[styles.icon, styles.ml16]}
              onPress={onIconPress4}
            >
              <Image
                style={styles.icon1}
                resizeMode="cover"
                source={require("../assets/icon4.png")}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: Margin.m_9xs,
  },
  ml16: {
    marginLeft: Margin.m_base,
  },
  mt10: {
    marginTop: Margin.m_3xs,
  },
  mt30: {
    marginTop: Margin.m_11xl,
  },
  souscriptionTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 22,
  },
  cardPosition: {
    left: 0,
    width: 359,
    position: "absolute",
  },
  cardFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  putFlexBox: {
    color: Color.gray_100,
    alignSelf: "stretch",
    textAlign: "left",
  },
  souscription: {
    fontSize: 30,
  },
  souscriptionWrapper: {
    flexDirection: "row",
  },
  cardsChild: {
    top: 0,
    borderRadius: 7,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    height: 498,
  },
  listeDesFormules: {
    top: 16,
    left: 23,
    fontSize: 18,
    position: "absolute",
  },
  cardChild: {
    borderRadius: 100,
    width: 38,
    height: 38,
  },
  putNameHere: {
    fontSize: 14,
    fontFamily: FontFamily.spaceGroteskRegular,
  },
  putNameHere1: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: FontFamily.spaceGroteskBold,
  },
  left: {
    flex: 1,
  },
  icon1: {
    width: "100%",
    height: "100%",
    opacity: 0.6,
  },
  icon: {
    width: 35,
    height: 35,
  },
  card1: {
    borderRadius: 12,
    backgroundColor: Color.khaki,
    width: 317,
    overflow: "hidden",
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: "row",
  },
  card: {
    top: 67,
    paddingHorizontal: 0,
    paddingVertical: 8,
  },
  cards: {
    height: 498,
    width: 359,
  },
  frameParent: {
    top: 112,
    left: 16,
    display: "none",
    width: 359,
    position: "absolute",
  },
});

export default SubscriptionSection;
