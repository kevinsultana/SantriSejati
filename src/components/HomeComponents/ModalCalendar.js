import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Gap from '../Gap';

export default function ModalCalendar({visible, onRequestClose, dataMonth}) {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onRequestClose}>
      <View style={styles.viewModal}>
        <Pressable style={styles.viewModalBackdrop} onPress={onRequestClose} />
        <View style={styles.viewModalContainer}>
          <View style={styles.viewModalHeader}>
            <Icon name={'calendar'} color={'black'} size={25} />
            <Text style={styles.textMonth}>Pilih Bulan</Text>
            <TouchableOpacity onPress={onRequestClose}>
              <Icon name={'close'} color={'black'} size={25} />
            </TouchableOpacity>
          </View>
          <Gap height={10} />
          <ScrollView>{dataMonth}</ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  viewModalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewModalContainer: {
    backgroundColor: 'white',
    width: '80%',
    padding: 20,
    borderRadius: 20,
    elevation: 5,
    height: 360,
  },
  viewModalBackdrop: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.3,
  },
  viewModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
  },
  textMonth: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
  },
});
