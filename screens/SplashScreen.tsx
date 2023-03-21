import * as React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image,
} from 'react-native';
import { Margin, Color, FontFamily } from '../GlobalStyles';

const SplashScreen = () => {
  return (
    <View style={styles.acceuil2}>
      <View style={[styles.homeIndicator, styles.statusBarPosition]}>
        <View style={styles.homeIndicator1} />
      </View>
      <ImageBackground
        style={styles.logo1Icon}
        resizeMode="cover"
        source={require('../assets/logo2.png')}
      />
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <View style={styles.barsstatusTime}>
          <Text style={styles.time}>19:27</Text>
        </View>
        <Image
          style={[styles.symbolsIcon, styles.ml240]}
          resizeMode="cover"
          source={require('../assets/symbols.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml240: {
    marginLeft: Margin.m_221xl,
  },
  statusBarPosition: {
    display: 'none',
    position: 'absolute',
  },
  homeIndicator1: {
    marginLeft: -67,
    bottom: 8,
    left: '50%',
    borderRadius: 100,
    backgroundColor: Color.black,
    width: 134,
    height: 5,
    position: 'absolute',
  },
  homeIndicator: {
    bottom: 0,
    left: 0,
    width: 390,
    height: 31,
    overflow: 'hidden',
  },
  logo1Icon: {
    top: 339,
    left: 130,
    width: 130,
    height: 166,
    position: 'absolute',
  },
  time: {
    fontSize: 15,
    letterSpacing: 0,
    fontWeight: '700',
    fontFamily: FontFamily.interBold,
    color: Color.black,
    textAlign: 'left',
  },
  barsstatusTime: {
    paddingHorizontal: 0,
    paddingVertical: 2,
    flexDirection: 'row',
  },
  symbolsIcon: {
    width: 68,
    height: 13,
    overflow: 'hidden',
  },
  statusBar: {
    top: 7,
    right: 21,
    left: 22,
    alignItems: 'center',
    flexDirection: 'row',
  },
  acceuil2: {
    backgroundColor: Color.ivory,
    flex: 1,
    width: '100%',
    height: 844,
    overflow: 'hidden',
  },
});

export default SplashScreen;
