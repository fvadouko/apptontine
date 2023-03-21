import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import NameContainer from './NameContainer';
import CountryContainer from './CountryContainer';
import { Margin, FontFamily, Color } from '../GlobalStyles';

import { SAMPLE_FORM } from '../constants';
import { useForm } from '../hooks/forms';

const PasswordView = () => {
  const {
    form: { fields },
    handleFieldUpdate,
    handleSubmit,
  } = useForm(SAMPLE_FORM);

  return (
    <View>
      <NameContainer
        labelField="Nom"
        placeholder="Votre nom"
        propMarginTop={8}
        onChangeValue={handleFieldUpdate}
        valueField={fields.lastname.value}
        nameField={fields.lastname.name}
      />
      <NameContainer
        labelField="Prénom(s)"
        placeholder="Votre prénom(s)"
        propMarginTop={8}
        onChangeValue={handleFieldUpdate}
        valueField={fields.firstname.value}
        nameField={fields.firstname.name}
      />
      <NameContainer
        labelField="Pseudo"
        placeholder="Votre pseudo"
        propMarginTop={8}
        onChangeValue={handleFieldUpdate}
        valueField={fields.nickname.value}
        nameField={fields.nickname.name}
      />
      <NameContainer
        labelField="Email"
        placeholder="Votre email"
        propMarginTop={8}
        onChangeValue={handleFieldUpdate}
        valueField={fields.email.value}
        nameField={fields.email.name}
      />
      <NameContainer
        labelField="Numero de telephone"
        placeholder="Votre numéro"
        propMarginTop={8}
        onChangeValue={handleFieldUpdate}
        valueField={fields.tel.value}
        nameField={fields.tel.name}
      />
      {/* <CountryContainer
        country="Pays"
        countryInput="Votre pays"
        propMarginLeft={200}
      />
      <CountryContainer
        country="Ville"
        countryInput="Votre ville"
        propMarginLeft={204}
      /> */}
      <NameContainer
        labelField="Mot de passe"
        placeholder="Votre mot de passe"
        propMarginTop={8}
        onChangeValue={handleFieldUpdate}
        valueField={fields.password.value}
        nameField={fields.password.name}
      />
      <NameContainer
        labelField="Confirmer"
        placeholder="Confirmer le mot de passe"
        propMarginTop={8}
        onChangeValue={handleFieldUpdate}
        valueField={fields.confirmpassword.value}
        nameField={fields.confirmpassword.name}
      />
      <Pressable onPress={handleSubmit}>
        <View
          style={[styles.button, styles.mt20, styles.buttonFlexBox]}
        >
          <Text
            style={[styles.largeLabelMedium16px1, styles.largeTypo]}
          >
            Emregistrer
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

export default PasswordView;
