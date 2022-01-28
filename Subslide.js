import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import Button from './Button';

const {width, height} = Dimensions.get('window');
const Subslide = ({subtitle, description, last, x, onPress}) => {
  return (
    <View style={Styles.Container}>
      <Text style={Styles.Subtitle}>{subtitle}</Text>
      <Text style={Styles.Description}>{description}</Text>
      <Button
        label={last ? "Let's get started" : 'Next'}
        variant={last ? 'primary' : 'default'}
        {...{onPress}}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    padding: '1%',
    // height: height * 0.2,
    // width: '20%',
  },
  Subtitle: {
    fontFamily: 'SFProText-Semibold',
    fontSize: 24,
    color: '#0C0D34',
    bottom: '15%',
  },
  Description: {
    fontFamily: 'SFProText-regular',
    fontSize: 16,
    color: '#0C0D34',
    lineHeight: 24,
    textAlign: 'center',
    bottom: '15%',
  },
});
export default Subslide;
