import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import React, { useContext } from 'react';
import { Color, FontFamily, Margin } from '../GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import { navigationProps } from '..';
import { AuthContext } from '../context/authContext';

const HeaderContainer = () => {
  const navigation = useNavigation<navigationProps>();
  const { state } = useContext(AuthContext);
  const { user } = state;

  return (
    <View style={[styles.bar, styles.barFlexBox]}>
      <Pressable
        style={styles.group}
        onPress={() => navigation.openDrawer()}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require('../assets/group.png')}
        />
      </Pressable>
      <View
        style={[styles.frameParent, styles.ml257, styles.barFlexBox]}
      >
        <Pressable style={styles.iconParent}>
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require('../assets/icon6.png')}
          />
          <View style={styles.rectangleParent}>
            <View style={styles.instanceChild} />
            <Text style={[styles.text1, styles.textTypo]}>7</Text>
          </View>
        </Pressable>
        <Image
          style={[styles.imageIcon, styles.ml12]}
          resizeMode="cover"
          source={{ uri: user?.image.url }}
        />
      </View>
    </View>
  );
};

export default HeaderContainer;

const styles = StyleSheet.create({
  ml12: {
    marginLeft: Margin.m_xs,
  },
  ml257: {
    marginLeft: Margin.m_238xl,
  },
  icon1: {
    top: 10,
    left: -1,
    height: 24,
    width: 21,
    position: 'absolute',
  },
  barFlexBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bar: {
    top: 42,
    width: 354,
    left: 16,
    flexDirection: 'row',
    position: 'absolute',
  },
  group: {
    width: 23,
    height: 18,
  },
  icon: {
    height: '100%',
    width: '100%',
  },
  iconParent: {
    height: 33,
    width: 21,
  },
  imageIcon: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
  },
  frameParent: {
    justifyContent: 'center',
  },
  rectangleParent: {
    top: 0,
    left: 6,
    width: 15,
    height: 19,
    position: 'absolute',
  },
  instanceChild: {
    height: '78.95%',
    top: '21.05%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    borderRadius: 12,
    backgroundColor: Color.red_100,
    position: 'absolute',
    width: '100%',
  },
  text1: {
    height: '84.21%',
    width: '40%',
    top: '0%',
    left: '33.33%',
    fontSize: 10,
    lineHeight: 22,
    color: Color.white,
    position: 'absolute',
  },
  textTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.interMedium,
    fontWeight: '500',
  },
});
