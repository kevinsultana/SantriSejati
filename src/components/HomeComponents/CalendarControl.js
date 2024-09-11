import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Gap from '../Gap';

export default function CalendarControl({
  onPressLeft,
  disabledLeft,
  onPressMonth,
  textMonth,
  onPressRight,
  disabledRight,
}) {
  return (
    <View style={styles.viewCalendarControl}>
      <TouchableOpacity
        style={styles.viewBtnCalendarControl}
        onPress={onPressLeft}
        disabled={disabledLeft}>
        <Icon name={'chevron-left'} size={35} color={'black'} />
      </TouchableOpacity>

      <Gap width={20} />

      <TouchableOpacity
        style={styles.viewBtnCalendarMonth}
        onPress={onPressMonth}>
        <Text style={styles.textCalendarControl}>{textMonth}</Text>
      </TouchableOpacity>

      <Gap width={20} />

      <TouchableOpacity
        style={styles.viewBtnCalendarControl}
        onPress={onPressRight}
        disabled={disabledRight}>
        <Icon name={'chevron-right'} size={35} color={'black'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textCalendarControl: {
    fontSize: 14,
    fontWeight: '700',
    color: 'black',
  },
  viewBtnCalendarMonth: {
    width: 160,
    height: 30,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBtnCalendarControl: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewCalendarControl: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
