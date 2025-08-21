import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Geopasos SSG' }} />
      <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detalle' }} />
    </Stack.Navigator>
  );
}
