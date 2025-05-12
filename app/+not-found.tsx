import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Not found' }} />
                <LinearGradient
                    colors={['#B88566', '#FAC3A5', '#FBEDE0']}
                    style={styles.container}
            >
                <Link href="/" style={styles.link}>
                Home
                 </Link>
            </LinearGradient>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    link: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});