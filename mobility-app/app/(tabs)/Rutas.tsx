import { route_50 } from "@/assets/maps/Ruta50";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Geojson } from "react-native-maps";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Map() {
    const [origin, setOrigin] = useState({
        latitude: 21.883311,
        longitude: -102.292611
    });

    return (
        <View>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: origin.latitude,
                    longitude: origin.longitude,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04
                }}
            >
                <Geojson
                    geojson={route_50}
                    strokeColor="#5D99F3"
                    strokeWidth={5}
                    markerComponent={<MaterialCommunityIcons name="bus-multiple" size={32} color="black" />}
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: "90%"
    }
});
