import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import Yaumi from '../screens/Yaumi';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarColor: '#ffffff33',
        statusBarTranslucent: true,
      }}>
      <Stack.Screen name="Splash Screen" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Yaumi" component={Yaumi} />
    </Stack.Navigator>
  );
}
