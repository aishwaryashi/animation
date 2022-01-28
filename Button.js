import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export default function Button({variant, label, onPress}) {
  const backgroundColor =
    variant === 'primary' ? '#2CB9B0' : 'rgba(12,13,52,0.4)';
  const color = variant === 'primary' ? '#FFFFFF' : '#0C0D34';
  return (
    <RectButton
      style={[Styles.Container, {backgroundColor: backgroundColor}]}
      {...{onPress}}>
      <Text style={[Styles.Label, {color}]}>{label}</Text>
      <Text>hello</Text>
      {/* //i am checking third commit // */}
    </RectButton>
  );
}
const Styles = StyleSheet.create({
  Container: {
    borderRadius: 40,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Label: {
    fontFamily: 'SFProText-regular',
    fontSize: 24,
    textAlign: 'center',
  },
});
