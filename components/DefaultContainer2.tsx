import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Margin, FontFamily, Color } from '../GlobalStyles';
import { navigationProps } from '..';

const DefaultContainer2 = () => {
  const navigation = useNavigation<navigationProps>();

  return (
    <View style={styles.group239702default}>
      <View style={[styles.bottomBar, styles.bottomBarPosition]}>
        <View style={styles.titreIcones}>
          <View style={styles.acceuilParent}>
            <Text style={[styles.acceuil, styles.acceuilTypo]}>
              Acceuil
            </Text>
            <Text
              style={[
                styles.formules,
                styles.ml30,
                styles.acceuilTypo,
              ]}
            >
              Formules
            </Text>
          </View>
          <View style={[styles.souscriptionParent, styles.ml112]}>
            <Text style={[styles.acceuil, styles.acceuilTypo]}>
              Souscription
            </Text>
            <Text
              style={[
                styles.acceuil,
                styles.ml29,
                styles.acceuilTypo,
              ]}
            >
              Profil
            </Text>
          </View>
        </View>
        <View style={styles.icones}>
          <View style={styles.homeParent}>
            <Pressable
              style={styles.home}
              onPress={() => navigation.navigate('Dashboard')}
            >
              <Image
                style={styles.iconLayout1}
                resizeMode="cover"
                source={require('../assets/home.png')}
              />
            </Pressable>
            <Pressable
              style={[styles.home, styles.ml50]}
              onPress={() => navigation.navigate('MesFormules1')}
            >
              <View
                style={[
                  styles.iconColor,
                  styles.addPosition,
                  styles.iconLayout1,
                  styles.bottomBarPosition,
                ]}
              />
            </Pressable>
          </View>
          <View style={[styles.acceuilParent, styles.ml145]}>
            <Pressable
              style={styles.home}
              onPress={() => navigation.navigate('Recherche')}
            >
              <Image
                style={styles.iconLayout1}
                resizeMode="cover"
                source={require('../assets/vector.png')}
              />
            </Pressable>
            <Pressable
              style={[styles.home, styles.ml50]}
              onPress={() => navigation.navigate('Profile')}
            >
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require('../assets/profile2.png')}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.add, styles.addPosition]}
        onPress={() => navigation.navigate('Souscription')}
      >
        <Image
          style={[styles.icon3, styles.iconLayout]}
          resizeMode="cover"
          source={require('../assets/add1.png')}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ml30: {
    marginLeft: Margin.m_11xl,
  },
  ml29: {
    marginLeft: Margin.m_10xl,
  },
  ml112: {
    marginLeft: Margin.m_93xl,
  },
  ml50: {
    marginLeft: Margin.m_31xl,
  },
  ml145: {
    marginLeft: Margin.m_126xl,
  },
  bottomBarPosition: {
    left: '0%',
    bottom: '0%',
    right: '0%',
  },
  acceuilTypo: {
    textAlign: 'center',
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: '500',
    lineHeight: 15,
    letterSpacing: -0.2,
    fontSize: 11,
  },
  addPosition: {
    top: '0%',
    position: 'absolute',
  },
  iconLayout1: {
    height: '100%',
    width: '100%',
  },
  iconLayout: {
    overflow: 'hidden',
    height: '100%',
    width: '100%',
  },
  acceuil: {
    color: Color.gray_500,
  },
  formules: {
    color: Color.white,
  },
  acceuilParent: {
    flexDirection: 'row',
  },
  souscriptionParent: {
    width: 125,
    flexDirection: 'row',
  },
  titreIcones: {
    top: 42,
    left: 18,
    width: 348,
    flexDirection: 'row',
    position: 'absolute',
  },
  home: {
    width: 24,
    height: 24,
  },
  iconColor: {
    backgroundColor: Color.white,
  },
  homeParent: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  icones: {
    top: 10,
    left: 22,
    width: 347,
    flexDirection: 'row',
    position: 'absolute',
  },
  bottomBar: {
    height: '69.07%',
    top: '30.93%',
    backgroundColor: Color.gray_100,
    width: '100%',
    left: '0%',
    bottom: '0%',
    right: '0%',
    position: 'absolute',
  },
  icon3: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  add: {
    left: '41.54%',
    right: '43.08%',
    bottom: '38.14%',
    width: '15.38%',
    height: '61.86%',
  },
  group239702default: {
    top: 747,
    left: 0,
    width: 390,
    height: 97,
    display: 'none',
    position: 'absolute',
  },
});

export default DefaultContainer2;
