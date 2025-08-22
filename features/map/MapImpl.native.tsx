import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import * as Location from 'expo-location';
import { View, Text } from '@/components/Themed';

const GRANADA: Region = { latitude: 37.1765, longitude: -3.5979, latitudeDelta: 0.05, longitudeDelta: 0.05 };

export default function MapScreen() {
  const [region, setRegion] = useState<Region>(GRANADA);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const loc = await Location.getCurrentPositionAsync({});
        setRegion(r => ({ ...r, latitude: loc.coords.latitude, longitude: loc.coords.longitude }));
      }
    })();
  }, []);

  return (
    <View style={s.container}>
      <MapView style={s.map} initialRegion={GRANADA} region={region} onRegionChangeComplete={setRegion} provider={PROVIDER_GOOGLE}>
        <Marker coordinate={{ latitude: 37.1763, longitude: -3.5991 }} title="Catedral de Granada" />
      </MapView>
      <View style={s.badge} lightColor="#fff" darkColor="rgba(0,0,0,0.6)"><Text style={s.badgeText}>Granada</Text></View>
    </View>
  );
}
const s = StyleSheet.create({
  container: { flex: 1 }, map: { flex: 1 },
  badge: { position: 'absolute', top: 16, left: 16, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 12 },
  badgeText: { fontWeight: '600' },
});
