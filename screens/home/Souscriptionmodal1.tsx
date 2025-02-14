import * as React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Section7 from '../../components/Section7';
import SubscriptionSection from '../../components/SubscriptionSection';
import MoneyChoicesSection from '../../components/MoneyChoicesSection';
import DefaultContainer from '../../components/DefaultContainer';
import { Margin, FontFamily, Color } from '../../GlobalStyles';

const Souscriptionmodal1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.souscriptionmodal}>
      <View style={styles.statusBar}>
        <View style={styles.barsstatusTime}>
          <Text style={styles.time}>19:27</Text>
        </View>
        <Image
          style={[styles.symbolsIcon, styles.ml251]}
          resizeMode="cover"
          source={require('../../assets/symbols.png')}
        />
      </View>
      <Section7 icon={require('../../assets/icon2.png')} />
      <SubscriptionSection
        onIconPress={() => {}}
        onIconPress1={() => {}}
        onIconPress2={() => {}}
        onIconPress3={() => {}}
        onIconPress4={() => {}}
      />
      <View style={styles.souscriptionmodalChild} />
      <MoneyChoicesSection />
      <DefaultContainer
        onIconPromoPress={() => {}}
        onVectorPress={() => {}}
        onProfilePress={() => {}}
        onAddPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ml251: {
    marginLeft: Margin.m_232xl,
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
    right: 16,
    left: 16,
    alignItems: 'center',
    display: 'none',
    flexDirection: 'row',
    position: 'absolute',
  },
  souscriptionmodalChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.gray_300,
    width: 390,
    position: 'absolute',
    height: 844,
  },
  souscriptionmodal: {
    backgroundColor: Color.ivory,
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    height: 844,
  },
});

export default Souscriptionmodal1;
