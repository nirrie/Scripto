import { Stack } from "expo-router";
import { useFonts } from 'expo-font';

export default function RootLayout() {
  const [loaded] = useFonts({
    Roboto: require('../assets/fonts/Roboto-Italic-VariableFont_wdth,wght.ttf'),
  });
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
