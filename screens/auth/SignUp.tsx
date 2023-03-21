import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  Pressable,
} from 'react-native';
import PasswordView from '../../components/PasswordView';
import { Margin, FontFamily, Color } from '../../GlobalStyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useUploadImage } from '../../hooks/upload';
import { useNavigation } from '@react-navigation/native';
import { navigationProps } from '../..';
import { ROUTES } from '../../constants';

const SignUp = () => {
  const navigation = useNavigation<navigationProps>();
  const { image, pickImage } = useUploadImage();

  return (
    <KeyboardAwareScrollView>
      <View style={styles.signUp}>
        <View style={styles.homeIndicator}>
          <View style={styles.homeIndicator1} />
        </View>
        <View style={styles.body}>
          <View style={styles.slideLogin} />
          <View style={[styles.cards, styles.cardsFlexBox]}>
            <View style={styles.buttonFlexBox}>
              <Pressable onPress={pickImage}>
                <Image
                  style={styles.photoIcon}
                  resizeMode="cover"
                  source={
                    image === ''
                      ? require('../../assets/photo1.png')
                      : {
                          uri: image,
                        }
                  }
                />
              </Pressable>
              <Text
                style={[
                  styles.largeLabelMedium16px,
                  styles.ml30,
                  styles.largeTypo,
                ]}
              >
                Ajouter une photo
              </Text>
            </View>
            <PasswordView />
            <View
              style={[styles.vousAvezUnCompteParent, styles.mt20]}
            >
              <Pressable
                style={[
                  styles.button,
                  styles.mt20,
                  styles.buttonFlexBox,
                ]}
                onPress={() =>
                  navigation.navigate(ROUTES.FORGOT_PASSWORD)
                }
              >
                <Text style={[styles.vousAvezUn, styles.vousTypo]}>
                  Mot de passe oublié ?
                </Text>
              </Pressable>
              <Pressable
                style={[
                  styles.button,
                  styles.mt20,
                  styles.buttonFlexBox,
                ]}
                onPress={() => navigation.navigate(ROUTES.LOGIN)}
              >
                <Text style={[styles.connectezVous, styles.vousTypo]}>
                  Connectez-vous
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={[styles.inscription, styles.cardsFlexBox]}>
            <Text
              style={[styles.largeLabelMedium16px2, styles.largeTypo]}
            >
              Inscription
            </Text>
            <View style={[styles.inscriptionChild, styles.mt10]} />
          </View>
          <ImageBackground
            style={styles.logo2Icon}
            resizeMode="cover"
            source={require('../../assets/logo.png')}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  ml30: {
    marginLeft: Margin.m_11xl,
  },
  mt20: {
    marginTop: Margin.m_xl,
  },
  mt10: {
    marginTop: Margin.m_3xs,
  },
  ml240: {
    marginLeft: Margin.m_221xl,
  },
  cardsFlexBox: {
    alignItems: 'center',
    position: 'absolute',
  },
  largeTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
  },
  vousTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: '500',
    lineHeight: 25,
    letterSpacing: 1,
    fontSize: 14,
    top: 0,
    textAlign: 'left',
    position: 'absolute',
  },
  buttonFlexBox: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
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
    width: 390,
    height: 31,
    display: 'none',
    left: 0,
    position: 'absolute',
    overflow: 'hidden',
  },
  slideLogin: {
    top: 306,
    height: 814,
    left: 0,
    position: 'absolute',
  },
  photoIcon: {
    borderRadius: 10,
    width: 100,
    height: 100,
    overflow: 'hidden',
  },
  largeLabelMedium16px: {
    fontSize: 18,
    color: Color.maroon,
  },
  vousAvezUn: {
    color: Color.silver_200,
    width: 169,
    left: 0,
  },
  connectezVous: {
    left: 188,
    width: 129,
    color: Color.maroon,
  },
  vousAvezUnCompteParent: {
    width: 317,
    height: 10,
  },
  largeLabelMedium16px1: {
    fontSize: 16,
    color: Color.maroon,
  },
  button: {
    borderRadius: 12,
    backgroundColor: Color.goldenrod,
    width: 324,
    paddingHorizontal: 32,
    paddingVertical: 12,
    overflow: 'hidden',
  },
  cards: {
    top: 218,
    left: 1,
  },
  largeLabelMedium16px2: {
    fontSize: 26,
    color: Color.maroon,
  },
  inscriptionChild: {
    borderStyle: 'solid',
    borderColor: '#000',
    borderTopWidth: 1,
    width: 73,
    height: 1,
  },
  inscription: {
    top: 131,
    left: 96,
  },
  logo2Icon: {
    left: 127,
    width: 75,
    height: 97,
    top: 0,
    position: 'absolute',
  },
  body: {
    top: 74,
    left: 31,
    width: 328,
    height: 1120,
    position: 'absolute',
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
    flexDirection: 'row',
    display: 'none',
  },
  signUp: {
    backgroundColor: Color.ivory,
    flex: 1,
    width: '100%',
    height: 1150,
    overflow: 'hidden',
  },
});

export default SignUp;
