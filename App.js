import React from 'react';
import {View, Text, Button, StyleSheet, Dimensions} from 'react-native';
import {useState} from 'react/cjs/react.development';
import Modal from 'react-native-modal';
import Slide, {SLIDE_HEIGHT} from './component/slide';
import {ScrollView} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator
          bounces={'false'}>
          <Slide label="Relaxed" />
          <Slide label="Playful" right />
          <Slide label="Excentric" />
          <Slide label="Funky" right />
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View
          style={{...StyleSheet.absoluteFillObject, backgroundColor: 'cyan'}}
        />
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            borderTopLeftRadius: 75,
          }}></View>
      </View>
      {/* <Text>hello</Text> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: 'cyan',
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
});
