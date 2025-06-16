import { Modal, Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { Alert } from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSequence,
    withTiming,
} from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../lib/api";

type Props = {
    visible: boolean;
    onClose: () => void;
    onSwitchToRegister: () => void;
    onLoginSuccess: (token: string) => void;
};

export default function LoginModal({ visible, onClose, onSwitchToRegister, onLoginSuccess }: Props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const shake = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: shake.value }],
    }));

    const triggerShake = () => {
        shake.value = withSequence(
            withTiming(-10, { duration: 100 }),
            withTiming(10, { duration: 100 }),
            withTiming(-10, { duration: 100 }),
            withTiming(0, { duration: 100 })
        );
    };

        const handleLogin = async () => {
            if (loading) return;
            console.log("Login button pressed");
            setLoading(true);
            try {
                console.log("Attempting to login with email:", email, password);
                const response = await api.post("/login", {
                    email,
                    password,
                });

                const token = response.data.token;

                await AsyncStorage.setItem("auth_token", token);
                console.log("Token received:", token);

                onLoginSuccess(token);
                onClose();

                Alert.alert("Login successful");
            } catch (error: any) {
                console.error("Login error:", error?.response?.data || error.message);
                 triggerShake();
            } finally {
                setLoading(false);
            }
        };
    
        return (
            <Modal visible={visible} animationType="fade" transparent>
                <View style={styles.overlay}>
                    <Animated.View style={[styles.modalContainer, animatedStyle]}>
                        <Text style={styles.title}>Login</Text>
                        <TextInput
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            style={styles.input}
                        />
                        <Pressable onPress={handleLogin} style={styles.button}>
                            <Text style={styles.buttonText}>Login</Text>
                        </Pressable>
                        <Pressable onPress={onClose} style={styles.cancel}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </Pressable>
                        <Text style={styles.linkText}>
                            Don't have an account?{" "}
                            <Text onPress={onSwitchToRegister} style={styles.link}>
                                Register
                            </Text>
                        </Text>
                    </Animated.View>
                </View>
            </Modal>
        );
            
    }


    const styles = StyleSheet.create({
        overlay: {
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            justifyContent: "center",
            alignItems: "center",
        },
        modalContainer: {
            width: "85%",
            backgroundColor: "#fac3a5",
            borderRadius: 20,
            padding: 20,
            elevation: 5,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            justifyContent: "center",
            alignItems: "center",
        },
        title: {
            fontSize: 24,
            fontFamily: "Roboto, sans-serif",
            fontWeight: "bold",
            marginBottom: 20,
            color: "#B88566",
        },
        input: {
            width: "100%",
            padding: 10,
            borderWidth: 1,
            borderColor: "#B88566",
            opacity: 0.5,
            backgroundColor: "#fff",
            borderRadius: 5,
            marginBottom: 20,
        },
        button: {
            backgroundColor: "#e48368",
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 5,
            marginBottom: 10,
        },
        buttonText: {
            color: "#fff",
            fontWeight: "bold",
        },
        cancel: {
            backgroundColor: "#fac3a5",
        },
        cancelText: {
            color: "#fff",
        },
        link: {
            color: "#007BFF",
            textDecorationLine: "underline",
        },
        linkText: {
            marginTop: 20,
            color: "#b88566",
        },
    })
    

    