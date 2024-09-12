import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Gap from '../Gap';

export default function Profile({name, email, mengisi, tidakMengisi}) {
  return (
    <View style={styles.viewProfileHeader}>
      <View style={styles.viewProfileNameContainer}>
        <View style={styles.viewProfileName}>
          <Gap width={5} />
          <Icon name={'account-circle'} color={'black'} size={50} />
          <Gap width={10} />
          <View style={{flex: 1}}>
            <Text style={styles.textUser}>{name}</Text>
            <Gap height={5} />
            <Text style={styles.textUserEmail}>{email}</Text>
          </View>
        </View>
      </View>

      <Gap width={10} />

      <View style={{flex: 1}}>
        <View style={styles.viewFilledContainer}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.textFilled}>{mengisi} Kali</Text>
            <Text style={styles.textFilledDesc}>Mengisi</Text>
          </View>
        </View>

        <Gap height={10} />

        <View style={styles.viewNotFilledContainer}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.textNotFilled}>{tidakMengisi} Kali</Text>
            <Text style={styles.textNotFilledDesc}>Lalai</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textNotFilledDesc: {
    fontSize: 10,
    fontWeight: '400',
    color: 'red',
  },
  textNotFilled: {
    fontSize: 12,
    fontWeight: '700',
    color: 'black',
  },
  viewNotFilledContainer: {
    backgroundColor: 'white',
    height: 45,
    borderRadius: 10,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFilledDesc: {
    fontSize: 10,
    fontWeight: '400',
    color: 'green',
  },
  textFilled: {
    fontSize: 12,
    fontWeight: '700',
    color: 'black',
  },
  viewFilledContainer: {
    backgroundColor: 'white',
    height: 45,
    borderRadius: 10,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textUserEmail: {
    fontSize: 13,
    fontWeight: '400',
    color: 'black',
  },
  textUser: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
  },
  viewProfileName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewProfileNameContainer: {
    backgroundColor: 'white',
    height: 100,
    width: '70%',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewProfileHeader: {
    marginHorizontal: 20,
    flexDirection: 'row',
    maxWidth: 520,
    alignSelf: 'center',
  },
});
