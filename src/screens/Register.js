import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Background, Gap} from '../components';
import FormInput from '../components/FormInput';
import axios from 'axios';
import ApiRequest from '../api/ApiRequest';
import EncryptedStorage from 'react-native-encrypted-storage';

export default function Register({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nama, setNama] = useState('');
  const [loading, setLoading] = useState(false);

  const submitRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Registrasi Gagal', 'Passwords tidak sama.');
      return;
    }
    setLoading(true);
    try {
      const response = await ApiRequest().post('/register', {
        name: nama,
        email: email,
        password: password,
        gender: 'pria',
        phone_number: Math.random(),
        division: 2,
        department: 24,
        branch: 1,
        position: 'staff',
        device_model: Math.random(),
      });
      const responseLogin = await ApiRequest().post('/login', {
        email: email,
        password: password,
      });
      await EncryptedStorage.setItem(
        'credentials',
        JSON.stringify({email: email, password: password}),
      );
      navigation.replace('Home', {token: responseLogin.data.token});
      Alert.alert('', 'Register Berhasil');
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        console.log(error.response.data);
      } else {
        console.log(error);
      }
    }
  };
  return (
    <View style={{flex: 1}}>
      <Background />
      <View style={styles.viewContainer}>
        <View>
          <View style={styles.viewHeaderContainer}>
            <Text style={styles.textLogin}>Daftar</Text>

            <Gap height={20} />

            <FormInput
              title={'Nama'}
              iconName={'account'}
              placeholder={'Masukkan Nama Disini...'}
              value={nama}
              onChangeText={nama => setNama(nama)}
              autoCapitalize={'words'}
            />
            <Gap height={20} />

            <FormInput
              title={'Email'}
              iconName={'gmail'}
              placeholder={'Contoh@email.com'}
              value={email}
              onChangeText={email => setEmail(email)}
              keyboardType={'email-address'}
              autoCapitalize={'none'}
            />

            <Gap height={20} />

            <FormInput
              title={'Password'}
              iconName={'lock'}
              placeholder={'Masukkan Password...'}
              password={true}
              value={password}
              onChangeText={password => {
                setPassword(password);
              }}
              autoCapitalize={'none'}
            />

            <Gap height={30} />

            <FormInput
              title={'Password'}
              iconName={'lock'}
              placeholder={'Masukkan Konfirmasi Password...'}
              password={true}
              value={confirmPassword}
              onChangeText={confirmPassword => {
                setConfirmPassword(confirmPassword);
              }}
              autoCapitalize={'none'}
            />

            <Gap height={30} />

            <TouchableOpacity onPress={() => submitRegister()}>
              <View style={styles.btnAction}>
                {loading ? (
                  <ActivityIndicator color={'white'} size={'small'} />
                ) : (
                  <Text style={styles.textBtn}>Daftar</Text>
                )}
              </View>
            </TouchableOpacity>

            <Gap height={10} />

            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View
                style={{
                  ...styles.btnAction,
                  width: 180,
                  backgroundColor: '#403F81',
                }}>
                <Text style={styles.textBtn}>Kembali</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textBtn: {color: 'white', fontSize: 17, fontWeight: '700'},
  viewHeaderContainer: {
    width: 320,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    alignSelf: 'center',
  },
  btnAction: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7667AA',
    width: 225,
    height: 50,
    borderRadius: 50 / 2,
    elevation: 3,
  },
  textLogin: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
  },
});
