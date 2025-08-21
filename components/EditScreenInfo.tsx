import { View, Text, StyleSheet } from 'react-native';

export default function EditScreenInfo({ path }: { path?: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de ejemplo {path ? `(${path})` : ''}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { padding: 12 },
  text: { fontSize: 16 },
});
