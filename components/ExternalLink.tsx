import { Linking, Pressable, Text } from 'react-native';

export function ExternalLink(props: { href: string; children: string }) {
  return (
    <Pressable onPress={() => Linking.openURL(props.href)}>
      <Text>{props.children}</Text>
    </Pressable>
  );
}
