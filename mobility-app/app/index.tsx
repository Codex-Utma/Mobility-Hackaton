import { View, Text, StyleSheet } from "react-native";

import LoginButton from "@/components/Mobile/Login/LoginButton";
import LogoutButton from "@/components/Mobile/Login/LogoutButton";
import { Link } from "expo-router";

export default function LoginScreen() {

  return (
    <View style={styles.container}>
      <Link href="./(tabs)/Tarjeta">
        <Text style={styles.title}>Iniciar Sesión</Text>
      </Link>
      {/* <LoginButton /> */}
      {/* <LogoutButton /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    width: "100%",
    padding: 12,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d1d5db",
    marginBottom: 12,
  },
  button: {
    width: "100%",
    backgroundColor: "#3b82f6",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
