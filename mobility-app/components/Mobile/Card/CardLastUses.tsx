import { LastUsedType } from "@/assets/types/Card";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function CardLastUses({lastUsesMocks}: {lastUsesMocks: LastUsedType[]}) {
    return (
        <FlatList
        data={lastUsesMocks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listText}>Fecha: {item.lastUsed}</Text>
            <Text style={styles.listText}>Ruta: {item.route}</Text>
            <Text style={styles.listText}>Costo: ${item.cost.toFixed(2)}</Text>
          </View>
        )}
      />
    )
}

const styles = StyleSheet.create({
    listItem: {
        width: 320,
        padding: 12,
        backgroundColor: "#f9f9f9",
        borderRadius: 8,
        marginBottom: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
      },
      listText: {
        fontSize: 14,
        color: "black",
      }
})
