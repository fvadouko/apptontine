import * as React from 'react';
import { useMemo } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Margin, FontFamily, Color } from '../GlobalStyles';

type NameContainerType = {
  lastName?: string;
  firstName?: string;

  /** Style props */
  propMarginTop?: number | string;
};

const getStyleValue = (
  key: string,
  value: string | number | undefined
) => {
  if (value === undefined) return;
  return { [key]: value === 'unset' ? undefined : value };
};

const NameContainer = ({
  lastName,
  firstName,
  propMarginTop,
}: NameContainerType) => {
  const emailFieldStyle = useMemo(() => {
    return {
      ...getStyleValue('marginTop', propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[emailFieldStyle]}>
      <Text style={styles.nom}>{lastName}</Text>
      <TextInput
        style={[styles.emailFieldChild, styles.mt7]}
        placeholder="Votre nom"
        keyboardType="default"
        placeholderTextColor="#abb3bb"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt7: {
    marginTop: Margin.m_6xs,
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
});

export default NameContainer;
