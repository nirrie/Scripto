import { StyleSheet, View, ViewStyle, Pressable, Text } from "react-native";
import { useRouter } from "expo-router"; 
import { Ionicons } from "@expo/vector-icons";

type Props = {
    icon?: keyof typeof Ionicons.glyphMap;
    size?: number;
    color?: string;
    onPress?: () => void;
    style?: ViewStyle;

};


export default function Button({
    icon = "add-circle-outline",
    size = 24,
    color = "#72401A",
    onPress,
    style,
}: Props) {
    const router = useRouter();
    return (
        <Pressable style={[styles.fab, style]}
            onPress={() => {
                onPress && onPress();
            }}
            >
                
            <Ionicons name={"add-circle-outline"} size={30} color={color} />
        </Pressable>
        
    );
}

const styles = StyleSheet.create({
    fab: {
        position: "absolute",
        bottom: 30,
        right: 30,
        backgroundColor: "#ceab96",
        borderRadius: 100,
        padding: 20,
        elevation: 5,
        shadowColor: "#000",
        shadowOpacity: 0.7,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 2 },
},
});