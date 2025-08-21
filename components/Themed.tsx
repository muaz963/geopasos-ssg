import { Text as DefaultText, View as DefaultView } from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from './useColorScheme';

export function Text(props: DefaultText['props']) {
  const theme = useColorScheme();
  return <DefaultText {...props} style={[{ color: Colors[theme].text }, props.style]} />;
}
export function View(props: DefaultView['props']) {
  const theme = useColorScheme();
  return <DefaultView {...props} style={[{ backgroundColor: Colors[theme].background }, props.style]} />;
}
