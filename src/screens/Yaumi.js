import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Background, Gap} from '../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';
import ApiRequest from '../api/ApiRequest';

export default function Yaumi({navigation, route}) {
  const token = route.params.token;

  const [loading, setLoading] = useState(false);

  const [dataYaumi, setDataYaumi] = useState([
    {id: 1, name: 'Sholat Shubuh', checked: 0, fieldName: 'sholat_subuh'},
    {id: 2, name: 'Sholat Dzuhur', checked: 0, fieldName: 'sholat_dzuhur'},
    {id: 3, name: 'Sholat Ashar', checked: 0, fieldName: 'sholat_ashar'},
    {id: 4, name: 'Sholat Maghrib', checked: 0, fieldName: 'sholat_maghrib'},
    {id: 5, name: 'Sholat Isya', checked: 0, fieldName: 'sholat_isya'},
    {id: 6, name: 'Sholat Dhuha', checked: 0, fieldName: 'sholat_dhuha'},
    {id: 7, name: 'ODOJ', checked: 0, fieldName: 'odoj_umum'},
    {id: 8, name: 'Infaq', checked: 0, fieldName: 'donasi_infaq'},
    {
      id: 9,
      name: "Hafalan Al-Qur'an",
      checked: 0,
      fieldName: 'quran_hafalan_quran',
    },
    {id: 10, name: 'Sholawat', checked: 0, fieldName: 'lain_sholawat_100'},
  ]);

  // untuk checkbox
  function setSelectedAmalan(indexAmalan) {
    const newAmalan = dataYaumi.map((itemAmalan, index) =>
      index == indexAmalan
        ? {...itemAmalan, checked: itemAmalan.checked == 0 ? 1 : 0}
        : itemAmalan,
    );
    setDataYaumi(newAmalan);
  }

  const dataSelected = dataYaumi.reduce((obj, item) => {
    obj[item.fieldName] = item.checked;
    return obj;
  }, {});

  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await ApiRequest(token).post('/yaumi', dataSelected);
      console.log(response.data);
      Alert.alert('Berhasil', response.data.message);
      navigation.replace('Home', {token});
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
      Alert.alert('Error', 'An error occurred');
    }
  };

  return (
    <View style={{flex: 1}}>
      <Background />

      {/* header */}
      <View style={styles.viewHeaderYaumi}>
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
          <View style={styles.viewYaumi} key={index}>
            <CheckBox
              onValueChange={value => setSelectedAmalan(index)}
              value={item.checked === 1}
            />
            <Gap width={10} />
            <Text style={styles.textYaumi}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* btn Action */}
      <TouchableOpacity style={styles.btnSimpan} onPress={handleSave}>
        {loading ? (
          <ActivityIndicator color={'white'} size={'small'} />
        ) : (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name={'content-save'} color={'white'} size={25} />
            <Gap width={10} />
            <Text style={styles.textSimpan}>Simpan</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewHeaderYaumi: {
    margin: 20,
    marginTop: 40,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  textSimpan: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  btnSimpan: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#7667AA',
    height: 50,
    width: 220,
    bottom: 40,
    borderRadius: 25,
    elevation: 5,
  },
  textYaumi: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
  },
  viewYaumi: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 10,
  },
});
