import * as React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Section7 from '../../components/Section7';
import FormListContainer from '../../components/FormListContainer';
import Group239702Container from '../../components/Group239702Container';
import CodeParrainContainer from '../../components/CodeParrainContainer';
import { Margin, Color, FontFamily } from '../../GlobalStyles';

const Souscriptioncode = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.souscriptioncode}>
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <View style={styles.barsstatusTime}>
          <Text style={[styles.time, styles.timeFlexBox]}>19:27</Text>
        </View>
        <Image
          style={[styles.symbolsIcon, styles.ml251]}
          resizeMode="cover"
          source={require('../assets/symbols2.png')}
        />
      </View>
      <Section7 icon={require('../assets/icon1.png')} />
      <View style={[styles.frameParent, styles.statusBarPosition]}>
        <View style={styles.souscriptionWrapper}>
          <Text style={[styles.souscription, styles.timeFlexBox]}>
            Souscription
          </Text>
        </View>
        <FormListContainer />
      </View>
      <Group239702Container
        productIds={require('../assets/home1.png')}
        productIds24x24={require('../assets/vector5.png')}
        productIds24x24x={require('../assets/profile3.png')}
        onIconPromoPress={() => {}}
        onVectorPress={() => {}}
        onProfilePress={() => {}}
        onAddPress={() => {}}
      />
      <View style={styles.souscriptioncodeChild} />
      <CodeParrainContainer
        referralCode="AC45PL"
        propColor="#151624"
        onAnnulPress={() => {}}
        onModifierPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ml251: {
    marginLeft: Margin.m_232xl,
  },
  mt30: {
    marginTop: Margin.m_11xl,
  },
  statusBarPosition: {
    display: 'none',
    left: 16,
    position: 'absolute',
  },
  timeFlexBox: {
    textAlign: 'left',
    color: Color.black,
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
    right: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  souscription: {
    fontSize: 30,
    lineHeight: 22,
    fontWeight: '500',
    fontFamily: FontFamily.interMedium,
  },
  souscriptionWrapper: {
    flexDirection: 'row',
  },
  frameParent: {
    top: 112,
    width: 359,
  },
  souscriptioncodeChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.gray_300,
    width: 390,
    position: 'absolute',
    height: 844,
  },
  souscriptioncode: {
    backgroundColor: Color.ivory,
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    height: 844,
  },
});

export default Souscriptioncode;
