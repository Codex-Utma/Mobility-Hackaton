import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, Text, View } from "react-native";

import { FeatureCollection } from 'geojson';

export default function RouteSelector({route, setRoute}: {route: FeatureCollection, setRoute: (route: FeatureCollection) => void}) {
    return (
        <Pressable onPress={() => setRoute(route)}>
            <View>
                <Text>Ruta 20</Text>
                <MaterialCommunityIcons name="bus-multiple" size={32} color="black" />
            </View>
        </Pressable>
    )
}
