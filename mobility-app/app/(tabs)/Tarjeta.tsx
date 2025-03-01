import { View, StyleSheet } from "react-native";
import CardData from "@/components/Mobile/Card/CardData";

import { cardDataMock } from "@/mocks/card";
import { lastUsesMocks } from "@/mocks/card";
import CardLastUses from "@/components/Mobile/Card/CardLastUses";

export default function Tarjeta() {
  return (
    <View style={styles.container}>
      <CardData cardData={cardDataMock} />
      <CardLastUses lastUsesMocks={lastUsesMocks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
  }
});
