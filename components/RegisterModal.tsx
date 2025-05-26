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



    const handleRegister = async () => {
        try {
            const response = await api.post<{ token: string }>("/register", {
                    name,
                    email,
                    password,
                    password_confirmation: password_confirmation,
                });
            
            const token = response.data.token;
            await AsyncStorage.setItem("auth_token", token);
            onRegisterSuccess(token);
            onClose();
        } catch (error: any) {
              console.log(error);
                Alert.alert("Registration failed");
            
            console.log(error);
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
                    <Text style={styles.title}>Login</Text>
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
                        <Pressable onPress={handleRegister} style={styles.button}>
                            <Text style={styles.buttonText}>Register</Text>
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
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
    },
    input: {
        width: "80%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#007BFF",
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    cancel: {
        backgroundColor: "#FF0000",
    },
    cancelText: {
        color: "#fff",
    },
    linkText: {
        color: "#007BFF",
        textDecorationLine: "underline",
        marginBottom: 20,
    },
    link: {
        color: "#007BFF",
        textDecorationLine: "underline",
    },
});
