import { useState, useEffect, useRef } from "react";
import { Animated, View, Image, StyleSheet, Easing } from "react-native";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";


export default function RootLayout() {
    const [loaded] = useFonts({
    Roboto: require("../assets/fonts/Roboto.ttf"),
   });


  const spinAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.elastic(2),
      })
    ).start();

    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      delay: 500,
      useNativeDriver: true,
    }).start(() => {
      setIsVisible(false);
    });
  }, []);

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
  outputRange: ['0deg', '360deg'],
  });
  
  if (!loaded) {
return null; // or a loading screen
}
    
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      {isVisible && (
        <Animated.View style={[StyleSheet.absoluteFill, { opacity: fadeAnim }]}>
          <View style={styles.splashScreen}>
            <Animated.Image
              source={require("../assets/images/splash-icon.png")}
              style={[styles.splashIcon, { transform: [{ rotate: spin }] }]}
            />
          </View>
        </Animated.View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  splashScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FBEDE0",
  },
  splashIcon: {
    width: 200,
    height: 200,
  },
});
