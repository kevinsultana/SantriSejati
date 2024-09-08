import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Background, Gap} from '../components';
import FormInput from '../components/FormInput';
import {useState} from 'react';
import axios from 'axios';
import ApiRequest from '../api/ApiRequest';
import EncryptedStorage from 'react-native-encrypted-storage';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const submitLogin = async () => {
    setLoading(true);
    try {
      const response = await ApiRequest().post('/login', {
        email: email,
        password: password,
      });
      setLoading(false);
      await EncryptedStorage.setItem(
        'credentials',
        JSON.stringify({email: email, password: password}),
      );
      navigation.replace('Home', {token: response.data.token});
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        Alert.alert('Gagal Login', error.response.data.message);
      } else {
        console.log('syntax submit login error:', error);
      }
    }
  };

  return (
    <View style={{flex: 1}}>
      <Background />
      <View style={styles.viewContainer}>
        <View>
          <View style={styles.viewHeaderContainer}>
            <Text style={styles.textLogin}>Login</Text>

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

            <TouchableOpacity onPress={() => submitLogin()}>
              <View style={styles.btnAction}>
                {loading ? (
                  <ActivityIndicator size={'small'} color={'white'} />
                ) : (
                  <Text style={styles.textBtn}>Masuk</Text>
                )}
              </View>
            </TouchableOpacity>

            <Gap height={10} />

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <View
                style={{
                  ...styles.btnAction,
                  width: 180,
                  backgroundColor: '#403F81',
                }}>
                <Text style={styles.textBtn}>Daftar</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textBtn: {
    color: 'white',
    fontSize: 17,
    fontWeight: '700',
  },
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
