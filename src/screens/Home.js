import {
  Alert,
  Dimensions,
  Modal,
  Pressable,
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

export default function Home({navigation, route}) {
  const token = route.params.token;
  const data = [
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
    {
      in: ' ',
      out: ' ',
      statusPresence: 'Alpha',
      isReturn: false,
    },
  ];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

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

  useEffect(() => {
    getUserDetail();
  }, []);

  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => setModalVisible(false);
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={{flex: 1}}>
      <Background />
      <Gap height={20} />

      {/* header */}
      <View style={{margin: 20, flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            submitLogout();
          }}>
          <Icon
            name={'exit-to-app'}
            color={'white'}
            size={30}
            style={{transform: [{rotate: '180deg'}]}}
          />
        </TouchableOpacity>
        <Gap width={10} />
        <Text style={{color: 'white', fontSize: 14, fontWeight: '700'}}>
          Santri Sejati
        </Text>
      </View>

      {/* profile */}
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: 'row',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            height: 100,
            width: 220,
            borderBottomLeftRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Gap width={5} />
            <Icon name={'account-circle'} color={'black'} size={50} />
            <Gap width={10} />
            <View style={{flex: 1, marh: 10}}>
              <Text style={{fontSize: 16, fontWeight: '700', color: 'black'}}>
                {name}
              </Text>
              <Gap height={5} />
              <Text style={{fontSize: 13, fontWeight: '400', color: 'black'}}>
                {email}
              </Text>
            </View>
          </View>
        </View>

        <Gap width={10} />

        <View style={{flex: 1}}>
          <View
            style={{
              backgroundColor: 'white',
              height: 45,
              borderRadius: 10,
              borderTopRightRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 12, fontWeight: '700', color: 'black'}}>
                20 Kali
              </Text>
              <Text style={{fontSize: 10, fontWeight: '400', color: 'green'}}>
                Mengisi
              </Text>
            </View>
          </View>

          <Gap height={10} />

          <View
            style={{
              backgroundColor: 'white',
              height: 45,
              borderRadius: 10,
              borderBottomRightRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 12, fontWeight: '700', color: 'black'}}>
                15 Kali
              </Text>
              <Text style={{fontSize: 10, fontWeight: '400', color: 'red'}}>
                Lalai
              </Text>
            </View>
          </View>
        </View>
      </View>

      <Gap height={20} />

      {/* chart */}
      <View
        style={{
          alignSelf: 'center',
        }}>
        <BarChart
          style={{borderRadius: 20}}
          data={{
            labels: [
              'STW',
              'Dhuha',
              'ODOJ',
              'Infaq',
              'Hafalan',
              'Dzikir',
              'Dzikir',
            ],
            datasets: [
              {
                data: [5, 4, 0, 2, 5, 1, 5],
              },
            ],
          }}
          width={screenWidth - 40}
          height={190}
          yAxisLabel=""
          yAxisSuffix="x"
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            barPercentage: 0.5,
          }}
          verticalLabelRotation={0}
          showValuesOnTopOfBars={true}
        />
      </View>

      <Gap height={20} />

      {/* calendar control */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 40 / 2,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name={'chevron-left'} size={35} color={'black'} />
        </TouchableOpacity>

        <Gap width={20} />

        <TouchableOpacity
          style={{
            width: 160,
            height: 30,
            borderRadius: 10,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setModalVisible(true)}>
          <Text style={{fontSize: 14, fontWeight: '700', color: 'black'}}>
            September
          </Text>
        </TouchableOpacity>

        <Gap width={20} />

        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 40 / 2,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name={'chevron-right'} size={35} color={'black'} />
        </TouchableOpacity>
      </View>

      <Gap height={10} />

      {/* calender */}
      <View
        style={{
          backgroundColor: 'white',
          marginHorizontal: 20,
          borderRadius: 20,
          height: 240,
        }}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            {data?.map(
              (item, index) =>
                (
                  <View
                    key={index}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      backgroundColor: '#FFA500',
                      marginHorizontal: 10,
                      marginVertical: 5,
                      elevation: 3,
                    }}>
                    <View
                      style={{
                        margin: 10,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={{fontWeight: '700', color: 'black'}}>
                        {index + 1}
                      </Text>
                    </View>
                  </View>
                ) || <Text>data sedang di muat</Text>,
            )}
          </View>
        </ScrollView>
        <View
          style={{
            marginHorizontal: 20,
            marginVertical: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flex: 1}}>
            <View
              style={{
                backgroundColor: '#008000',
                width: 120,
                height: 20,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 11, fontWeight: '700'}}>
                Mengisi
              </Text>
            </View>
            <Gap height={5} />
            <View
              style={{
                backgroundColor: '#FFA500',
                width: 120,
                height: 20,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 11, fontWeight: '700'}}>
                Tidak/Belum Mengisi
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              width: 45,
              height: 45,
              borderRadius: 45 / 2,
              elevation: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setModalVisible(true)}>
            <Icon name={'calendar'} size={25} color={'black'} />
          </TouchableOpacity>
        </View>
      </View>

      <Gap height={5} />

      {/* isi yaumi */}
      <TouchableOpacity
        style={{
          alignSelf: 'flex-end',
          margin: 20,
          backgroundColor: '#403F81',
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 20,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Yaumi')}>
        <Icon name={'format-list-bulleted'} size={30} color={'white'} />
        <Gap width={5} />
        <Text style={{fontSize: 15, fontWeight: '700', color: 'white'}}>
          Isi Yaumi
        </Text>
      </TouchableOpacity>

      {/* modal calender */}
      <Modal
        transparent
        visible={modalVisible}
        animationType="fade"
        onRequestClose={closeModal}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            alignSelf: 'center',
          }}>
          <Pressable
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              backgroundColor: 'black',
              opacity: 0.3,
            }}
            onPress={closeModal}
          />
          <View
            style={{
              backgroundColor: 'white',
              width: '80%',
              padding: 20,
              borderRadius: 20,
              elevation: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Icon name={'calendar'} color={'black'} size={25} />
              <Text style={{fontSize: 15, fontWeight: '600', color: 'black'}}>
                Pilih Bulan
              </Text>
              <TouchableOpacity onPress={closeModal}>
                <Icon name={'close'} color={'black'} size={25} />
              </TouchableOpacity>
            </View>
            <Gap height={10} />
            <ScrollView>
              <TouchableOpacity
                style={{
                  backgroundColor: '#dedede',
                  elevation: 5,
                  borderRadius: 20,
                  height: 40,
                  justifyContent: 'center',
                }}>
                <View style={{marginHorizontal: 20}}>
                  <Text
                    style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
                    Bulan Januari
                  </Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({});
