import React from 'react';
import {View, Text, Button, StyleSheet, Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');
const Subslide = () => {
  return (
    <View style={Styles.Container}>
      <Text style={{color: 'black'}}>hello I am from Subslide</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  Container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    height: height * 0.2,
    width: '20%',
  },
});
export default Subslide;
