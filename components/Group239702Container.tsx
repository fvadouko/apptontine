import * as React from "react";
import { useMemo } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Margin, FontFamily, Color } from "../GlobalStyles";

type Group239702ContainerType = {
  productIds?: ImageSourcePropType;
  productIds24x24?: ImageSourcePropType;
  productIds24x24x?: ImageSourcePropType;

  /** Style props */
  propTop?: number | string;
  propColor?: string;
  propColor1?: string;
  propColor2?: string;
  propBackgroundColor?: string;
  propLeft?: number | string;
  propTop1?: number | string;

  /** Action props */
  onIconPromoPress?: () => void;
  onVectorPress?: () => void;
  onProfilePress?: () => void;
  onAddPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const Group239702Container = ({
  productIds,
  productIds24x24,
  productIds24x24x,
  propTop,
  propColor,
  propColor1,
  propColor2,
  propBackgroundColor,
  propLeft,
  propTop1,
  onIconPromoPress,
  onVectorPress,
  onProfilePress,
  onAddPress,
}: Group239702ContainerType) => {
  const group239702Default1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  const acceuilStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  const formulesStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor1),
    };
  }, [propColor1]);

  const souscriptionStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor2),
    };
  }, [propColor2]);

  const iconColorStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
      ...getStyleValue("top", propTop1),
    };
  }, [propLeft, propTop1]);

  return (
    <View style={[styles.group239702default, group239702Default1Style]}>
      <View style={[styles.bottomBar, styles.bottomBarPosition]}>
        <View style={styles.titreIcones}>
          <View style={styles.acceuilParent}>
            <Text style={[styles.acceuil, styles.acceuilTypo, acceuilStyle]}>
              Acceuil
            </Text>
            <Text
              style={[
                styles.acceuil,
                styles.ml30,
                styles.acceuilTypo,
                formulesStyle,
              ]}
            >
              Formules
            </Text>
          </View>
          <View style={[styles.souscriptionParent, styles.ml112]}>
            <Text
              style={[
                styles.souscription,
                styles.acceuilTypo,
                souscriptionStyle,
              ]}
            >
              Souscription
            </Text>
            <Text style={[styles.acceuil, styles.ml29, styles.acceuilTypo]}>
              Profil
            </Text>
          </View>
        </View>
        <View style={styles.icones}>
          <View style={styles.homeParent}>
            <Image
              style={styles.homeIcon}
              resizeMode="cover"
              source={productIds}
            />
            <Pressable
              style={[styles.homeIcon, styles.ml50]}
              onPress={onIconPromoPress}
            >
              <View
                style={[
                  styles.iconColor,
                  styles.addPosition,
                  styles.iconLayout1,
                  styles.bottomBarPosition,
                  iconColorStyle,
                ]}
              />
            </Pressable>
          </View>
          <View style={[styles.acceuilParent, styles.ml145]}>
            <Pressable style={styles.homeIcon} onPress={onVectorPress}>
              <Image
                style={styles.iconLayout1}
                resizeMode="cover"
                source={productIds24x24}
              />
            </Pressable>
            <Pressable
              style={[styles.homeIcon, styles.ml50]}
              onPress={onProfilePress}
            >
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={productIds24x24x}
              />
            </Pressable>
          </View>
        </View>
        <View style={[styles.bottomBarChild, rectangleViewStyle]} />
      </View>
      <Pressable style={[styles.add, styles.addPosition]} onPress={onAddPress}>
        <Image
          style={[styles.icon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/add.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ml30: {
    marginLeft: Margin.m_11xl,
  },
  ml29: {
    marginLeft: Margin.m_10xl,
  },
  ml112: {
    marginLeft: Margin.m_93xl,
  },
  ml50: {
    marginLeft: Margin.m_31xl,
  },
  ml145: {
    marginLeft: Margin.m_126xl,
  },
  bottomBarPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
  },
  acceuilTypo: {
    textAlign: "center",
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    lineHeight: 15,
    letterSpacing: -0.2,
    fontSize: 11,
  },
  addPosition: {
    top: "0%",
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  acceuil: {
    color: Color.gray_500,
  },
  acceuilParent: {
    flexDirection: "row",
  },
  souscription: {
    color: Color.tomato,
  },
  souscriptionParent: {
    width: 125,
    flexDirection: "row",
  },
  titreIcones: {
    top: 42,
    left: 18,
    width: 348,
    flexDirection: "row",
    position: "absolute",
  },
  homeIcon: {
    width: 24,
    height: 24,
  },
  iconColor: {
    backgroundColor: Color.gray_500,
  },
  homeParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  icones: {
    top: 10,
    left: 22,
    width: 347,
    flexDirection: "row",
    position: "absolute",
  },
  bottomBarChild: {
    top: -1,
    left: 263,
    borderRadius: 10,
    backgroundColor: Color.tomato,
    width: 22,
    height: 2,
    position: "absolute",
  },
  bottomBar: {
    height: "69.07%",
    top: "30.93%",
    backgroundColor: Color.gray_100,
    width: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  icon2: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  add: {
    left: "41.54%",
    right: "43.08%",
    bottom: "38.14%",
    width: "15.38%",
    height: "61.86%",
  },
  group239702default: {
    top: 747,
    left: 0,
    width: 390,
    height: 97,
    display: "none",
    position: "absolute",
  },
});

export default Group239702Container;
