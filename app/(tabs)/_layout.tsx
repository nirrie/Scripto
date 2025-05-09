import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: ' #ffd33d',
                
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'pencil-sharp' : 'pencil-outline'} color={' #ee53cc'} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="saved"
                options={{
                    title: 'Saved',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'save-sharp' : 'save-outline'} color={' #ee53cc' } size={24} />
                    )

                }} />
        </Tabs>
    );
}