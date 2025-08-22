import { StyleSheet } from 'react-native';
import { View, Text } from '@/components/Themed';

export default function MapWeb() {
  return (
    <View style={s.center}>
      <Text style={s.title}>Mapa no disponible en web</Text>
      <Text>Abre en Expo Go (Android/iOS) o en un emulador.</Text>
    </View>
  );
}
const s = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8, padding: 16 },
  title: { fontSize: 18, fontWeight: '600' },
});
