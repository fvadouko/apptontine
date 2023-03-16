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

const Dashboard = () => {
  const navigation = useNavigation<navigationProps>();

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
      <View style={[styles.bar, styles.barFlexBox]}>
        <Pressable
          style={styles.group}
          onPress={() => navigation.openDrawer()}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require('../../assets/group.png')}
          />
        </Pressable>
        <View
          style={[
            styles.frameParent,
            styles.ml257,
            styles.barFlexBox,
          ]}
        >
          <Pressable style={styles.iconParent}>
            <Image
              style={styles.icon1}
              resizeMode="cover"
              source={require('../../assets/icon6.png')}
            />
            <View style={styles.rectangleParent}>
              <View style={styles.instanceChild} />
              <Text style={[styles.text1, styles.textTypo]}>7</Text>
            </View>
          </Pressable>
          <Image
            style={[styles.imageIcon, styles.ml12]}
            resizeMode="cover"
            source={require('../../assets/image3.png')}
          />
        </View>
      </View>
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
  ml257: {
    marginLeft: Margin.m_238xl,
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
  barFlexBox: {
    flexDirection: 'row',
    alignItems: 'center',
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
  icon: {
    height: '100%',
    width: '100%',
  },
  group: {
    width: 23,
    height: 18,
  },
  icon1: {
    top: 10,
    left: -1,
    height: 24,
    width: 21,
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
  rectangleParent: {
    top: 0,
    left: 6,
    width: 15,
    height: 19,
    position: 'absolute',
  },
  iconParent: {
    height: 33,
    width: 21,
  },
  imageIcon: {
    width: 48,
    height: 48,
  },
  frameParent: {
    justifyContent: 'center',
  },
  bar: {
    top: 42,
    width: 354,
    left: 16,
    flexDirection: 'row',
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
