import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Gap from '../Gap';

export default function Calendar({tanggalCalendar, onPressCalendar, loading}) {
  return (
    <View style={styles.viewCalenderContainer}>
      <ScrollView refreshControl={<RefreshControl refreshing={loading} />}>
        <View style={styles.viewCalenderDate}>{tanggalCalendar}</View>
      </ScrollView>
      <View style={styles.viewBottomContainer}>
        <View style={{flex: 1}}>
          <View style={styles.viewMengisi}>
            <Text style={styles.textMengisi}>Mengisi</Text>
          </View>
          <Gap height={5} />
          <View style={styles.viewBelumMengisi}>
            <Text style={styles.textMengisi}>Tidak/Belum Mengisi</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btnCalendar} onPress={onPressCalendar}>
          <Icon name={'calendar'} size={25} color={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewBelumMengisi: {
    backgroundColor: '#7667AA',
    width: 120,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCalendar: {
    backgroundColor: 'white',
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewCalenderDate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginHorizontal: 20,
  },
  viewCalenderContainer: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 20,
    maxWidth: 520,
    // alignSelf: 'center',
    // height: 300,
  },
  textMengisi: {
    color: 'white',
    fontSize: 11,
    fontWeight: '700',
  },
  viewMengisi: {
    backgroundColor: '#008000',
    width: 120,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewBottomContainer: {
    marginHorizontal: 20,
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
