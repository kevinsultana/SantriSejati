import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Background, Gap} from '../components';
import FormInput from '../components/FormInput';

export default function Register({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nama, setNama] = useState('');
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

            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <View style={styles.btnAction}>
                <Text style={styles.textBtn}>Daftar</Text>
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
