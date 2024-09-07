import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Background, Gap} from '../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';

export default function Yaumi({navigation}) {
  const dataYaumi = [
    'Sholat Subuh',
    'Sholat Dzuhur',
    'Sholat Ashar',
    'Sholat Maghrib',
    'Sholat Isya',
    'Sholat Dhuha',
    'ODOJ',
    'Infaq',
    'Hafalan Quran',
    'Sholawat',
  ];
  return (
    <View style={{flex: 1}}>
      <Background />

      {/* header */}
      <View
        style={{
          margin: 20,
          marginTop: 40,
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name={'chevron-left'} color={'white'} size={30} />
        </TouchableOpacity>
        <Gap width={20} />
        <Text style={{fontSize: 20, color: 'white', fontWeight: '600'}}>
          Isi Yaumi
        </Text>
      </View>

      {/* data */}
      <ScrollView>
        {dataYaumi.map((item, index) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white',
              marginHorizontal: 20,
              marginVertical: 10,
              borderRadius: 10,
              height: 40,
              paddingHorizontal: 10,
            }}
            key={index}>
            <CheckBox />
            <Gap width={10} />
            <Text style={{fontSize: 15, fontWeight: '600', color: 'black'}}>
              {item}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* btn Action */}
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          backgroundColor: '#7667AA',
          height: 50,
          width: 220,
          bottom: 40,
          borderRadius: 25,
          elevation: 5,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name={'content-save'} color={'white'} size={25} />
          <Gap width={10} />
          <Text style={{fontSize: 16, fontWeight: '600', color: 'white'}}>
            Simpan
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
