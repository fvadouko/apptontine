import * as React from 'react';
import { useMemo } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Margin, FontFamily, Color } from '../GlobalStyles';

type NameContainerType = {
  labelField: string;
  placeholder?: string;
  onChangeValue: (nameField: string, value: string) => void;
  valueField: string;
  nameField: string;
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
  placeholder,
  labelField,
  propMarginTop,
  onChangeValue,
  valueField,
  nameField,
}: NameContainerType) => {
  const emailFieldStyle = useMemo(() => {
    return {
      ...getStyleValue('marginTop', propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[emailFieldStyle]}>
      <Text style={styles.nom}>{labelField}</Text>
      <TextInput
        style={[styles.emailFieldChild, styles.mt7]}
        placeholder={placeholder}
        keyboardType="default"
        placeholderTextColor="#abb3bb"
        onChangeText={(newText) => {
          onChangeValue(nameField, newText);
        }}
        value={valueField}
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
