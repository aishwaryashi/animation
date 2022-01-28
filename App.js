import React, {useRef} from 'react';
import {View, Text, Button, StyleSheet, Dimensions} from 'react-native';
import {useState} from 'react/cjs/react.development';
import Modal from 'react-native-modal';
import Slide, {SLIDE_HEIGHT} from './component/slide';
import {ScrollView} from 'react-native-gesture-handler';
import Animated, {multiply} from 'react-native-reanimated';
import SubSlide from './Subslide';
import {
  useValue,
  onScrollEvent,
  interpolateColor,
} from 'react-native-redash/lib/module/v1';

const BORDER_RADIUS = 75;
const {width, height} = Dimensions.get('window');

const slides = [
  {
    title: 'Relaxed',
    subtitle: 'Find Your Outfits',
    description:
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    color: '#BFEAF5',
  },
  {
    title: 'Playful',
    subtitle: 'Hear it First Wear it First',
    description:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ',
    color: '#BEECC4',
  },
  {
    title: 'Excentric',
    subtitle: 'Your Style,YourWay',
    description:
      'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ',
    color: '#FFE4D9',
  },
  {
    title: 'Funky',
    subtitle: 'Look Good, Feel Good',
    description:
      ' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    color: '#FFDDDD',
  },
];

const App = () => {
  const x = useValue(0);
  // const scroll = useRef({Animated.ScrollView(null)});
  const onScroll = onScrollEvent({x});
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(slide => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, {backgroundColor}]}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator
          bounces={'false'}
          scrollEventThrottle={1}
          {...{onScroll}}>
          {slides.map(({title}, index) => (
            <Slide key={index} right={!!(index % 2)} {...{title}} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{...StyleSheet.absoluteFillObject, backgroundColor}}
        />
        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * slides.length,
              flex: 1,
              transform: [{translateX: multiply(x, -1)}],
            },
          ]}>
          {slides.map(({subtitle, description}, index) => (
            <SubSlide
              key={index}
              onPress={() => {
                console.log('hello');
                console.log('width * (index + 1)', width * (index + 1));
                if (scroll.current) {
                  scroll.current
                    .getNode()
                    .scrollTo({x: width * (index + 1), animated: true});
                }
              }}
              last={index === slides.length - 1}
              {...{subtitle, description, x}}
            />
          ))}
        </Animated.View>
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
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    backgroundColor: 'white',
    flex: 1,
    borderTopLeftRadius: BORDER_RADIUS,
    flexDirection: 'row',
  },
});
