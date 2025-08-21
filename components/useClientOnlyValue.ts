import { Platform } from 'react-native';
export function useClientOnlyValue<T>(_: T, initial: T) {
  // En web puede renderizar dos veces; devolvemos un valor estable en SSR.
  return Platform.OS === 'web' ? initial : _;
}
