import { useState, useEffect } from "react";
import { Animated, View, Image, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { useFonts } from 'expo-font';

export default function RootLayout() {
  const [loaded] = useFonts({
    Roboto: require('../assets/fonts/Roboto-Italic-VariableFont_wdth,wght.ttf'),
  });
  const [fadeAnim] = useState(new Animated.Value(1));
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      delay: 1000,
      useNativeDriver: true,
    }).start();
    }, []);
  return (
    <>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
        </Stack>
       <Animated.View style={[StyleSheet.absoluteFill, { opacity: fadeAnim}]}>
        <View style={styles.splashScreen}>
          <Image 
          source={require('../assets/images/splash-icon.png')}
          style={styles.splashIcon}
          />
        </View>
      </Animated.View>
      </>
    
  );
}

const styles = StyleSheet.create({
  splashScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FBEDE0",
  },
  splashIcon: {
    width: 200,
    height: 200,
  },
});