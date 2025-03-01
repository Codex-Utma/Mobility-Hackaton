import { CardDataType } from "@/assets/types/Card";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function CardData({ cardData }: { cardData: CardDataType }) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <AntDesign name="idcard" size={72} color="black" style={styles.icon} />
                <View style={styles.cardText}>
                    <Text style={styles.title}>Tarjeta: {cardData.id}</Text>
                    <Text style={styles.text}>Saldo: ${cardData.balance.toFixed(2)}</Text>
                    <Text style={styles.text}>Tipo de tarjeta: {cardData.cardType}</Text>
                    <Text style={styles.text}>Último Depósito: {cardData.lastDeposit}</Text>
                    <Text style={styles.text}>Último Uso: {cardData.lastUsed}</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Recargar Tarjeta</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        width: 320,
        padding: 16,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderRadius: 16,
        elevation: 3,
    },
    icon: {
        marginRight: 12,
        paddingLeft: 8,
    },
    cardText: {
        flex: 1,
        alignItems: "flex-start",
        paddingLeft: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    text: {
        fontSize: 14,
        color: "gray",
        marginTop: 4,
        textAlign: "right",
    },
    button: {
        marginTop: 12,
        backgroundColor: "#007bff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});
