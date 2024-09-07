import {
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Gap from './Gap';
import {useState} from 'react';

export default function FormInput({
  title,
  onChangeText,
  iconName,
  placeholder,
  value,
  password,
  keyboardType,
  autoCapitalize,
}) {
  const [secure, setSecure] = useState(true);
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.textHeader}>{title}</Text>
      <View style={styles.viewTextInput}>
        <Icon name={iconName} size={20} color={'white'} />
        <Gap width={10} />
        <TextInput
          style={{flex: 1, color: 'white', fontSize: 14}}
          placeholder={placeholder}
          placeholderTextColor={'#ffffff80'}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={password && secure}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
        />
        {password && (
          <TouchableNativeFeedback
            onPress={() => {
              setSecure(!secure);
            }}>
            <Icon name={secure ? 'eye' : 'eye-off'} size={20} color={'white'} />
          </TouchableNativeFeedback>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewTextInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textHeader: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
  },
  viewContainer: {
    marginHorizontal: 40,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: '100%',
  },
});
