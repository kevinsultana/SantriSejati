import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Background} from '../components';
import EncryptedStorage from 'react-native-encrypted-storage';
import ApiRequest from '../api/ApiRequest';

export default function SplashScreen({navigation}) {
  async function refreshToken() {
    try {
      const credentials = await EncryptedStorage.getItem('credentials');
      if (credentials) {
        const response = await ApiRequest().post(
          '/login',
          JSON.parse(credentials),
        );
        navigation.replace('Home', {token: response.data.token});
      } else {
        setTimeout(() => {
          navigation.replace('Login');
        }, 2000);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('Axios error:', error.response?.data || error.message);
      } else console.log('credential gagal di ambil');
      setTimeout(() => {
        navigation.replace('Login');
      }, 2000);
    }
  }

  useEffect(() => {
    refreshToken();
  }, []);

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
