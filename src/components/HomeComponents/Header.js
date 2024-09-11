import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Gap from '../Gap';

export default function Header({onPress}) {
  return (
    <View style={styles.viewHeader}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          name={'exit-to-app'}
          color={'white'}
          size={30}
          style={{transform: [{rotate: '180deg'}]}}
        />
      </TouchableOpacity>
      <Gap width={10} />
      <Text style={styles.textHeader}>Santri Sejati</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textHeader: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
  },
  viewHeader: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
