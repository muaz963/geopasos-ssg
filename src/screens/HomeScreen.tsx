import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', gap: 12, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: '600' }}>Geopasos SSG</Text>
      <Button title="Ir al mapa" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
}
