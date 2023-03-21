import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import NameContainer from './NameContainer';
import { Margin, FontFamily, Color } from '../GlobalStyles';

import { SAMPLE_FORM } from '../constants';
import { useForm } from '../hooks/forms';

const LoginContainer = () => {
  const {
    form: { fields },
    handleFieldUpdate,
    handleSubmitLogin,
  } = useForm(SAMPLE_FORM);

  return (
    <View>
      <NameContainer
        labelField="Pseudo"
        placeholder="Votre pseudo"
        propMarginTop={8}
        onChangeValue={handleFieldUpdate}
        valueField={fields.nickname.value}
        nameField={fields.nickname.name}
      />

      <NameContainer
        labelField="Mot de passe"
        placeholder="Votre mot de passe"
        propMarginTop={8}
        onChangeValue={handleFieldUpdate}
        valueField={fields.password.value}
        nameField={fields.password.name}
      />

      <Pressable onPress={handleSubmitLogin}>
        <View
          style={[styles.button, styles.mt20, styles.buttonFlexBox]}
        >
          <Text
            style={[styles.largeLabelMedium16px1, styles.largeTypo]}
          >
            Se connecter
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mt7: {
    marginTop: Margin.m_6xs,
  },
  mt8: {
    marginTop: Margin.m_5xs,
  },
  nom: {
    fontSize: 14,
    letterSpacing: 0.3,
    lineHeight: 14,
    fontFamily: FontFamily.interRegular,
    color: Color.black,
    textAlign: 'left',
  },
  emailFieldChild: {
    borderRadius: 8,
    borderStyle: 'solid',
    borderColor: '#d0d0d0',
    borderWidth: 0.7,
    width: 327,
    overflow: 'hidden',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
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
  buttonFlexBox: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  mt20: {
    marginTop: Margin.m_xl,
  },
  largeTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.interBold,
    fontWeight: '700',
  },
});

export default LoginContainer;
