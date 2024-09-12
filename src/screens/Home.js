import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Background, Gap} from '../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BarChart} from 'react-native-chart-kit';
import EncryptedStorage from 'react-native-encrypted-storage';
import ApiRequest from '../api/ApiRequest';
import axios from 'axios';
import Header from '../components/HomeComponents/Header';
import Profile from '../components/HomeComponents/Profile';
import CalendarControl from '../components/HomeComponents/CalendarControl';
import Calendar from '../components/HomeComponents/Calendar';
import ModalCalendar from '../components/HomeComponents/ModalCalendar';

export default function Home({navigation, route}) {
  const token = route.params.token;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => setModalVisible(false);

  const submitLogout = async _id => {
    Alert.alert('Keluar?', 'Sesi anda akan berakhir', [
      {
        text: 'Keluar',
        onPress: async () => {
          try {
            await EncryptedStorage.removeItem('credentials');
            navigation.replace('Login');
          } catch (error) {
            navigation.replace('Login');
          }
        },
      },
      {
        text: 'Batal',
      },
    ]);
  };

  const getUserDetail = async () => {
    try {
      const response = await ApiRequest(token).get('/user');
      setName(response.data.user.name);
      setEmail(response.data.user.email);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response.data);
      }
    }
  };

  const [mengisi, setMengisi] = useState('');
  const [tidakMengisi, setTidakMengisi] = useState('');
  const [persentaseAmal, setPersentaseAmal] = useState({});

  const excludeLabels = [
    'qiyamul_lail',
    'doa_ortu',
    'istighfar',
    'surah_al-waqiah',
    'surah_al-mulk',
    'dzikir_pagi',
    'dzikir_petang',
  ];

  const filteredData = Object.keys(persentaseAmal)
    .filter(label => !excludeLabels.includes(label))
    .reduce((obj, key) => {
      obj[key] = persentaseAmal[key];
      return obj;
    }, {});

  const labels = Object.keys(filteredData)?.map(key => key.replace(/_/g, ' '));
  const dataSetsData = Object.keys(filteredData)?.map(
    key => persentaseAmal[key].did,
  );

  const getUserdata = async () => {
    try {
      const response = await ApiRequest(token).get('/yaumi-santri/dashboard');
      setMengisi(response.data.profile[0].filled);
      setTidakMengisi(response.data.profile[0].not_filled);
      setPersentaseAmal(response.data.persentase_amal.original);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response.data);
      }
    }
  };

  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const currentMonth = new Date().getMonth();
  const visileMonth = months.slice(0, currentMonth + 1);
  const [dataCalender, setDataCalender] = useState({});
  const [loadingCalender, setLoadingCalender] = useState(false);

  const getYaumiDataBulanan = async selectedMonth => {
    setLoadingCalender(true);
    try {
      const response = await ApiRequest(token).get(
        `/month/calendar/${selectedMonth + 1}`,
      );
      setDataCalender(response.data);
      setLoadingCalender(false);
    } catch (error) {
      setLoadingCalender(false);
      if (axios.isAxiosError(error)) {
        console.log(error.response.data);
      } else {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getUserDetail();
    getUserdata();
    getYaumiDataBulanan(selectedMonth);
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Background />
      <Gap height={20} />

      <ScrollView>
        {/* header */}
        <Header
          onPress={() => {
            submitLogout();
          }}
        />

        {/* profile */}
        <Profile
          name={name}
          email={email}
          mengisi={mengisi}
          tidakMengisi={tidakMengisi}
        />

        <Gap height={20} />

        {/* chart */}
        <View style={styles.viewChart}>
          <ScrollView
            horizontal={true}
            style={{
              alignSelf: 'center',
            }}>
            <View style={{marginHorizontal: 20}}>
              <BarChart
                data={{
                  labels: labels,
                  datasets: [{data: dataSetsData}],
                }}
                width={480}
                height={200}
                yAxisLabel=""
                yAxisSuffix="x"
                chartConfig={{
                  backgroundGradientFrom: '#ffffff',
                  backgroundGradientTo: '#ffffff',
                  decimalPlaces: 1, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  barPercentage: 0.5,
                }}
                verticalLabelRotation={0}
                showValuesOnTopOfBars={false}
              />
            </View>
          </ScrollView>
        </View>

        <Gap height={20} />

        {/* calendar control */}
        <CalendarControl
          onPressLeft={() => {
            setSelectedMonth(selectedMonth - 1);
            getYaumiDataBulanan(selectedMonth - 1);
          }}
          disabledLeft={selectedMonth === 0}
          onPressMonth={() => setModalVisible(true)}
          textMonth={months[selectedMonth]}
          onPressRight={() => {
            setSelectedMonth(selectedMonth + 1);
            getYaumiDataBulanan(selectedMonth + 1);
          }}
          disabledRight={selectedMonth === new Date().getMonth()}
        />

        <Gap height={10} />

        {/* calender */}
        <Calendar
          loading={loadingCalender}
          tanggalCalendar={Object.keys(dataCalender).map(index => (
            <View
              key={index}
              style={[
                styles.tanggalCalender,
                dataCalender[index] === true && styles.tanggalCalenderHadir,
              ]}>
              <View style={styles.viewTanggalCalender}>
                <Text style={styles.textTanggal}>{index}</Text>
              </View>
            </View>
          ))}
          onPressCalendar={() => setModalVisible(true)}
        />

        <Gap height={5} />

        {/* isi yaumi */}
        <TouchableOpacity
          style={styles.btnIsiYaumi}
          onPress={() => navigation.navigate('Yaumi', {token})}>
          <Icon name={'format-list-bulleted'} size={30} color={'white'} />
          <Gap width={5} />
          <Text style={styles.textIsiYaumi}>Isi Yaumi</Text>
        </TouchableOpacity>

        {/* modal calender */}
        <ModalCalendar
          visible={modalVisible}
          onRequestClose={closeModal}
          dataMonth={visileMonth.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.viewMonth}
              onPress={() => {
                setSelectedMonth(index);
                getYaumiDataBulanan(index);
                closeModal();
              }}>
              <View key={index} style={styles.viewModalMonth}>
                {selectedMonth === index ? (
                  <Icon name={'chevron-right'} color={'black'} size={20} />
                ) : (
                  <Text></Text>
                )}
                <Text style={styles.textModalMonth}>{item}</Text>
              </View>
            </TouchableOpacity>
          ))}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewModalMonth: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  textModalMonth: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
  textTanggal: {
    fontWeight: '700',
    color: 'white',
  },
  viewChart: {
    borderRadius: 20,
    backgroundColor: 'white',
    marginHorizontal: 20,
    overflow: 'hidden',
    maxWidth: 520,
    alignSelf: 'center',
    maxHeight: 200,
  },
  viewMonth: {
    backgroundColor: '#e8e8e8',
    elevation: 5,
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    marginVertical: 5,
  },

  textIsiYaumi: {
    fontSize: 15,
    fontWeight: '700',
    color: 'white',
  },
  btnIsiYaumi: {
    alignSelf: 'flex-end',
    margin: 20,
    backgroundColor: '#403F81',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  viewTanggalCalender: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tanggalCalenderHadir: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#008000',
    marginHorizontal: 10,
    marginVertical: 5,
    elevation: 3,
  },
  tanggalCalender: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#7667AA',
    marginHorizontal: 10,
    marginVertical: 5,
    elevation: 3,
  },
});
