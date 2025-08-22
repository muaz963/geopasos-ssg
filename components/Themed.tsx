import {
  Text as DefaultText,
  View as DefaultView,
  type TextProps as DefaultTextProps,
  type ViewProps as DefaultViewProps,
} from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from './useColorScheme';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

function useThemeColor(
  props: ThemeProps,
  colorName: keyof typeof Colors['light'] & keyof typeof Colors['dark']
) {
  const theme = useColorScheme();
  const colorFromProps = theme === 'light' ? props.lightColor : props.darkColor;
  return colorFromProps ?? Colors[theme][colorName];
}

export type TextProps = ThemeProps & DefaultTextProps;
export type ViewProps = ThemeProps & DefaultViewProps;

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ lightColor, darkColor }, 'text');
  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ lightColor, darkColor }, 'background');
  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
