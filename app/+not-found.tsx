import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Not found' }} />
            <View style={styles.container}>
                <LinearGradient
                    colors={['rgba(244, 109, 221, 0.8)', 'transparent']}
                    style={styles.background}
                />
                <Link href="/" style={styles.link}>
                    Go to home screen!
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'orange',
        justifyContent: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
    },
    link: {
        fontsize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});