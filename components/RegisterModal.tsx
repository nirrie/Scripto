import { Modal, Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../lib/api";

type Props = {
    visible: boolean;
    onClose: () => void;
    onRegisterSuccess: (token: string) => void;
    onSwitchToLogin: () => void;
};


export default function RegisterModal({ visible, onClose, onRegisterSuccess, onSwitchToLogin }: Props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPassword_confirmation] = useState("");
    const [loading, setLoading] = useState(false);



    const handleRegister = async () => {

        if (loading) return;
        setLoading(true);
        try {
            console.log("Attempting to register with name:", name, "email:", email);

            const response = await api.post<{ token: string }>("/register", {
                    name,
                    email,
                    password,
                    password_confirmation: password_confirmation,
            });
            
            const token = response.data.token;
            await AsyncStorage.setItem("auth_token", token);
            Alert.alert("Registration succesfull! Login to continue.");
            onClose();
            onSwitchToLogin();
        } catch (error: any) {
            if (error.response && error.response.data === 422) {
                const messages = error.response.data.errors;
                console.log("Validation Errors:", messages);
            }
        }

        }
    
    return (
            <Modal visible={visible} animationType="slide" transparent={true}>
                <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.linkText}>
                        Already have an account?{" "}
                        <Text onPress={onSwitchToLogin} style={styles.link}>
                            Login
                        </Text>
                    </Text>
                    <Text style={styles.title}>Create a new account</Text>
                    <TextInput
                        placeholder="Name"
                        value={name}
                        onChangeText={setName}
                        style={styles.input}
                    />
                        <TextInput
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Confirm Password"
                            value={password_confirmation}
                            onChangeText={setPassword_confirmation}
                            secureTextEntry
                            style={styles.input}
                        />
                        <Pressable onPress={handleRegister} style={styles.button} disabled={loading}>
                        <Text style={styles.buttonText}>{loading ? "Registering..." : "register"}</Text>
                        </Pressable>
                        <Pressable onPress={onClose} style={styles.cancel}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </Pressable>
                    </View>
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
            fontWeight: "bold",
            backgroundColor: "#FF0000",
        },
        cancelText: {
            backgroundColor: "#fac3a5",
        },
        linkText: {
            marginTop: 20,
            color: "#b88566",
        },
        link: {
            color: "#007BFF",
            textDecorationLine: "underline",
        },
    
    });
