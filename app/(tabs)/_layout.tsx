import { Tabs } from 'expo-router';
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
      const [loaded] = useFonts({
    Roboto: require('../../assets/fonts/Roboto-Italic-VariableFont_wdth,wght.ttf'),
  });
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#72401A',
                tabBarInactiveTintColor: '#FBEDE0',
                headerStyle: {
                    backgroundColor: '#b88566',
                },
                headerShadowVisible: true,
                headerTintColor: '#72401A',
                tabBarStyle: {
                    backgroundColor: '#b88566',
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'pencil-sharp' : 'pencil-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="saved"
                options={{
                    title: 'Saved',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'save-sharp' : 'save-outline'} color={color} size={24} />
                    )

                }} />
        </Tabs>
    );
}