import { Modal, Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";
import { Alert } from "react-native";
import useAsyncStorage from "@react-native-async-storage/async-storage";
import api from "../lib/api";

export default function LoginModal({ visible, onClose }: { visible: boolean; onClose: () => void }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await api.post("/login", {
                email,
                password,
            });

            const token = response.data.token;

            await useAsyncStorage.setItem("auth_token", token);

            Alert.alert("Login successful");
            onClose();
        } catch (error: any) {
            console.log(error);
            Alert.alert("Login failed");
        }
    };
    
    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.title}>Login</Text>
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
                    <Pressable onPress={handleLogin} style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
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
});