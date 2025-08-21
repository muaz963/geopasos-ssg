import { useColorScheme as useRN } from 'react-native';
export function useColorScheme() {
  return useRN() ?? 'light';
}
