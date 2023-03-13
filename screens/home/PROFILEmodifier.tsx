import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Section7 from '../../components/Section7';
import ProfileCard from '../../components/ProfileCard';
import GroupContainer from '../../components/GroupContainer';
import { Margin, FontFamily, Color } from '../../GlobalStyles';

const PROFILEmodifier = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profilemodifier}>
      <Section7 icon={require('../assets/icon1.png')} />
      <View style={[styles.text, styles.textPosition]}>
        <Text style={[styles.headline, styles.timeTypo]}>
          Profile
        </Text>
      </View>
      <ProfileCard />
      <View style={[styles.statusBar, styles.textPosition]}>
        <View style={styles.barsstatusTime}>
          <Text style={[styles.time, styles.timeTypo]}>19:27</Text>
        </View>
        <Image
          style={[styles.symbolsIcon, styles.ml240]}
          resizeMode="cover"
          source={require('../assets/symbols1.png')}
        />
      </View>
      <GroupContainer
        onIconPromoPress={() => {}}
        onVectorPress={() => {}}
        onProfilePress={() => {}}
        onAddPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ml240: {
    marginLeft: Margin.m_221xl,
  },
  textPosition: {
    position: 'absolute',
    flexDirection: 'row',
  },
  timeTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
  },
  headline: {
    fontSize: 30,
    letterSpacing: -0.1,
    color: Color.gray_100,
  },
  text: {
    top: 103,
    left: 11,
    flexDirection: 'row',
  },
  time: {
    fontSize: 15,
    letterSpacing: 0,
    color: Color.black,
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
  },
  profilemodifier: {
    backgroundColor: Color.ivory,
    flex: 1,
    width: '100%',
    height: 1002,
    overflow: 'hidden',
  },
});

export default PROFILEmodifier;
