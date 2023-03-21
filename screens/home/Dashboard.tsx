import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Group239702Container from '../../components/Group239702Container';
import SouscriptionContainer from '../../components/SouscriptionContainer';
import DashboardView from '../../components/DashboardView';
import { Margin, FontFamily, Color } from '../../GlobalStyles';
import { navigationProps } from '../..';
import HeaderContainer from '../../components/HeaderContainer';

const Dashboard = () => {
  return (
    <View style={styles.dashboard}>
      <View style={styles.parent}>
        <Text style={[styles.text, styles.textTypo]}>3</Text>
        <Text style={[styles.text, styles.textTypo]}>Scr/jour</Text>
      </View>
      <Group239702Container
        productIds={require('../../assets/home.png')}
        productIds24x24={require('../../assets/vector.png')}
        productIds24x24x={require('../../assets/profile4.png')}
        propTop={747}
        propColor="#f25650"
        propColor1="rgba(255, 255, 255, 0.7)"
        propColor2="rgba(255, 255, 255, 0.7)"
        propBackgroundColor="rgba(255, 255, 255, 0.7)"
        propLeft={23}
        propTop1={0}
        onIconPromoPress={() => {}}
        onVectorPress={() => {}}
        onProfilePress={() => {}}
        onAddPress={() => {}}
      />
      <SouscriptionContainer />
      <View style={styles.titre}>
        <Text
          style={[
            styles.rcenteSouscription,
            styles.rsumDesDerniresClr,
          ]}
        >
          Récente souscription
        </Text>
        <Text
          style={[
            styles.rsumDesDernires,
            styles.mt4,
            styles.rsumDesDerniresClr,
          ]}
        >
          Résumé des dernières souscription.
        </Text>
      </View>
      <DashboardView />
      <HeaderContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: Margin.m_9xs,
  },
  ml12: {
    marginLeft: Margin.m_xs,
  },

  textTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.interMedium,
    fontWeight: '500',
  },
  rsumDesDerniresClr: {
    color: Color.gray_100,
    width: 306,
    textAlign: 'left',
  },

  text: {
    fontSize: 16,
    lineHeight: 18,
    color: Color.black,
  },
  parent: {
    top: 301,
    left: 162,
    alignItems: 'center',
    position: 'absolute',
  },
  rcenteSouscription: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: FontFamily.interBold,
  },
  rsumDesDernires: {
    fontSize: 14,
    fontFamily: FontFamily.interRegular,
    opacity: 0.7,
  },
  titre: {
    top: 359,
    width: 306,
    left: 16,
    position: 'absolute',
  },

  dashboard: {
    backgroundColor: Color.ivory,
    flex: 1,
    height: 844,
    overflow: 'hidden',
    width: '100%',
  },
});

export default Dashboard;
