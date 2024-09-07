import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Background} from '../components';

export default function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.replace('Login');
  }, 2000);
  return (
    <View style={styles.viewScreen}>
      <Background />
      <View style={styles.viewLogo}>
        <Image source={require('../assets/logo.png')} />
      </View>
      <Text style={styles.textVer}>v1.0.0 Alpha-rc</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textVer: {
    bottom: 0,
    color: 'black',
    fontWeight: '600',
  },
  viewLogo: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  viewScreen: {
    alignItems: 'center',
    flex: 1,
  },
});
