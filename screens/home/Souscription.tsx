import * as React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Section7 from '../../components/Section7';
import SubscriptionSection from '../../components/SubscriptionSection';
import DefaultContainer2 from '../../components/DefaultContainer2';
import { Margin, FontFamily, Color } from '../../GlobalStyles';

const Souscription = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.souscription}>
      <Section7 icon={require('../../assets/icon2.png')} />
      <SubscriptionSection
        onIconPress={() => {}}
        onIconPress1={() => {}}
        onIconPress2={() => {}}
        onIconPress3={() => {}}
        onIconPress4={() => {}}
      />
      <View style={styles.statusBar}>
        <View style={styles.barsstatusTime}>
          <Text style={styles.time}>19:27</Text>
        </View>
        <Image
          style={[styles.symbolsIcon, styles.ml240]}
          resizeMode="cover"
          source={require('../../assets/symbols.png')}
        />
      </View>
      <DefaultContainer2 />
    </View>
  );
};

const styles = StyleSheet.create({
  ml240: {
    marginLeft: Margin.m_221xl,
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
    position: 'absolute',
    top: 7,
    right: 21,
    left: 22,
    alignItems: 'center',
    display: 'none',
    flexDirection: 'row',
  },
  souscription: {
    backgroundColor: Color.ivory,
    flex: 1,
    width: '100%',
    height: 844,
    overflow: 'hidden',
  },
});

export default Souscription;
