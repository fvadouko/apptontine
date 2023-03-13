import * as React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Group239702Container from '../../components/Group239702Container';
import SectionForm from '../../components/SectionForm';
import Section7 from '../../components/Section7';
import Alpha1Container from '../../components/Alpha1Container';
import { Margin, FontFamily, Color } from '../../GlobalStyles';

const ListeDesFeuillesDisponible = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.listeDesFeuillesDisponible}>
      <Group239702Container
        productIds={require('../../assets/home2.png')}
        productIds24x24={require('../../assets/vector.png')}
        productIds24x24x={require('../../assets/profile.png')}
        propTop={747}
        propColor="rgba(255, 255, 255, 0.7)"
        propColor1="#f25650"
        propColor2="rgba(255, 255, 255, 0.7)"
        propBackgroundColor="#f25650"
        propLeft={97}
        propTop1={-1}
        onIconPromoPress={() => {}}
        onVectorPress={() => {}}
        onProfilePress={() => {}}
        onAddPress={() => {}}
      />
      <SectionForm />
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
      <View style={styles.modalPopWrapper}>
        <Alpha1Container />
      </View>
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
  modalPopWrapper: {
    top: 222,
    left: 17,
    width: 356,
    height: 401,
    position: 'absolute',
  },
  listeDesFeuillesDisponible: {
    backgroundColor: Color.ivory,
    flex: 1,
    width: '100%',
    height: 844,
    overflow: 'hidden',
  },
});

export default ListeDesFeuillesDisponible;
