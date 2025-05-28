import React from "react";
import {
  Modal,
  Text,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { Link } from "expo-router";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Keyboard } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LoginModal from "@/components/LoginModal";
import Button from "@/components/Button";
import Note from "@/components/Note";
import RegisterModal from "@/components/RegisterModal";

export default function Index() {
  const router = useRouter();
  const [ShowNote, setShowNote] = useState(false);
  const [ShowLogin, setShowLogin] = useState(true);
  const [ShowRegister, setShowRegister] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem("auth_token");
      if (token) {
        setIsAuthenticated(true);
        setShowLogin(false);
      } else {
        setIsAuthenticated(false);
        setShowLogin(true);
      }
    };
    checkAuth();
  }, []);

  const handleLoginSucces = async (token: string) => {
    setIsAuthenticated(true);
    setShowLogin(false);
  };

  const handleRegisterSucces = async (token: string) => {
    setIsAuthenticated(true);
    setShowRegister(false);
  };

  return (
    <LinearGradient
      colors={["#B88566", "#FAC3A5", "#FBEDE0"]}
      locations={[0, 0.5, 1]}
      style={styles.container}
    >
      <Text style={styles.title}>Scripto</Text>

      <Link href="/saved" style={styles.button}></Link>
      <Button
        icon="add-circle-outline"
        style={styles.footerContainer}
        onPress={() => setShowNote(true)}
      />
      <LoginModal
        visible={ShowLogin}
        onClose={() => setShowLogin(false)}
        onSwitchToRegister={() => {
          setShowLogin(false);
          setShowRegister(true);
        }}
        onLoginSuccess={handleLoginSucces}
      />
      <RegisterModal
        visible={ShowRegister}
        onClose={() => setShowRegister(false)}
        onSwitchToLogin={() => {
          setShowRegister(false);
          setShowLogin(true);
        }}
        onRegisterSuccess={handleRegisterSucces}
      />
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
            setShowNote(false);
          }}
      >
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={styles.noteWrapper}>
                <Note onClose={() => setShowNote(false)} />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
    </LinearGradient >
      
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    fontFamily: "Roboto",
    color: "#B88566",
    fontWeight: "bold",
    marginTop: 60,
    marginBottom: 20,
  },
  button: {
    padding: 20,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  noteWrapper: {
    width: "90%",
    height: "80%",
    backgroundColor: "#fbede0",
    borderRadius: 12,
    padding: 20,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
    flexDirection: "row",
  },
});
