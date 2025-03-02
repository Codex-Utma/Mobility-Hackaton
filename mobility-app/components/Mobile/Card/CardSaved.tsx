import { StyleSheet, View } from "react-native";
import CardData from "./CardData";
import CardLastUses from "./CardLastUses";
import { cardDataMock, lastUsesMocks } from "@/mocks/card";

export default function CardSaved({code}: {code: string}) {

    const cardData = cardDataMock.find(card => card.id === code);
    if (!cardData) {
        return <View />;
    }

    return (
        <View style={styles.container}>
        <CardData cardData={cardData} />
        <CardLastUses lastUsesMocks={lastUsesMocks} />
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
      padding: 16,
      alignItems: "center",
    }
  });
