import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Section7 from '../../components/Section7';
import FcfaCard from '../../components/FcfaCard';
import DefaultContainer1 from '../../components/DefaultContainer1';
import { Margin, Color, FontFamily } from '../../GlobalStyles';

const MesFormules1 = () => {
  return (
    <View style={styles.mesFormules}>
      <Section7 icon={require('../../assets/icon2.png')} />
      <View style={styles.frameParent}>
        <View style={styles.mesFormulesWrapper}>
          <Text style={[styles.mesFormules1, styles.timeFlexBox]}>
            Mes formules
          </Text>
        </View>
        <FcfaCard />
      </View>
      <View style={styles.statusBar}>
        <View style={styles.barsstatusTime}>
          <Text style={[styles.time, styles.timeFlexBox]}>19:27</Text>
        </View>
        <Image
          style={[styles.symbolsIcon, styles.ml240]}
          resizeMode="cover"
          source={require('../../assets/symbols.png')}
        />
      </View>
      <DefaultContainer1 />
    </View>
  );
};

const styles = StyleSheet.create({
  mt30: {
    marginTop: Margin.m_11xl,
  },
  ml240: {
    marginLeft: Margin.m_221xl,
  },
  timeFlexBox: {
    textAlign: 'left',
    color: Color.black,
  },
  mesFormules1: {
    fontSize: 30,
    lineHeight: 22,
    fontWeight: '500',
    fontFamily: FontFamily.interMedium,
  },
  mesFormulesWrapper: {
    flexDirection: 'row',
  },
  frameParent: {
    top: 112,
    left: 16,
    width: 359,
    position: 'absolute',
  },
  time: {
    fontSize: 15,
    letterSpacing: 0,
    fontWeight: '700',
    fontFamily: FontFamily.interBold,
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
    display: 'none',
    flexDirection: 'row',
    position: 'absolute',
  },
  mesFormules: {
    backgroundColor: Color.ivory,
    flex: 1,
    width: '100%',
    height: 844,
    overflow: 'hidden',
  },
});

export default MesFormules1;
