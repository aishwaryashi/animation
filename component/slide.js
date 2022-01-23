import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');
export const SLIDE_HEIGHT = 0.61 * height;

export default function slide({label, right}) {
  const transform = [
    {translateY: (SLIDE_HEIGHT - 100) / 2},
    {translateX: right ? width / 2 - 50 : width / 2 - width * 0.9},
    {rotate: right ? '-90deg' : '90deg'},
  ];

  return (
    <View style={styles.container}>
      <View style={[styles.titlecontainer, {transform}]}>
        <Text style={styles.title}>{label}</Text>
        <Text style={{color: 'black'}}>Aishwarya </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, width: width},
  title: {
    color: 'black',
    fontSize: 80,
    fontFamily: 'SFProText-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 80,
  },
  titlecontainer: {
    height: 100,
    justifyContent: 'center',
  },
});
