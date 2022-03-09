import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View, Text } from 'react-native';

const animation = () => {
  const progress = useRef(new Animated.Value(0.5)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([Animated.spring(progress, { toValue: 1, useNativeDriver: true }), Animated.spring(progress, { toValue: 0.5, useNativeDriver: true })]),
        Animated.sequence([Animated.spring(scale, { toValue: 2, useNativeDriver: true }), Animated.spring(scale, { toValue: 1, useNativeDriver: true })]),
      ]),
      { iterations: 3 },
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.square,
          {
            borderRadius: /*progress.value * SIZE / 2*/ progress.interpolate({
              inputRange: [0.5, 1],
              outputRange: [SIZE / 4, SIZE / 2],
            }),
            opacity: progress,
            transform: [
              { scale },
              {
                rotate: /*progress.value * 2 * Math.PI*/ progress.interpolate({
                  inputRange: [0.5, 1],
                  outputRange: ['0deg', '360deg'],
                  //outputRange: [PI, 2 * PI],
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
};

const SIZE = 100.0;
const PI = Math.PI;

export default animation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'red',
  },
});
