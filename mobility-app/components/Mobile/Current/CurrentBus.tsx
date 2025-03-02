import { CurrentDataType } from "@/types/Current";
import { StyleSheet, Text, View } from "react-native";

export default function CurrentBus({currentData}: {currentData: CurrentDataType}) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Te encuentras en la ruta: {currentData.route}</Text>
        <Text style={styles.detail}>Pago: ${currentData.cost}</Text>
        <Text style={styles.detail}>Tomado a las: {currentData.time}</Text> {/* Hora mostrada */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
    },
    card: {
      backgroundColor: "white",
      padding: 20,
      borderRadius: 10,
      elevation: 5, // For Android shadow
      shadowColor: "#000", // For iOS shadow
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      width: "80%", // Adjust width based on your design
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
    detail: {
      fontSize: 16,
      marginBottom: 5,
    },
  });
