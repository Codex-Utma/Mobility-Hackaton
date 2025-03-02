import { bus_routes } from '@/assets/maps/bus_routes';

import { FeatureCollection } from 'geojson';
import MapView, { Geojson } from "react-native-maps";

import { useState } from "react";
import { View, StyleSheet } from "react-native";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import RouteSelector from '@/components/Mobile/Route/RouteSelector';

export default function Map() {

  const [route, setRoute] = useState<FeatureCollection | null>(null);

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
        {
          route && (
            <Geojson
              geojson={route}
              strokeColor="#5D99F3"
              strokeWidth={5}
              markerComponent={<MaterialCommunityIcons name="bus-multiple" size={32} color="black" />}
            />
          )
        }
      </MapView>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        {
          bus_routes.map((bus_route, index) => (
            <RouteSelector key={index} route={bus_route.route} setRoute={setRoute} />
          ))
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "90%"
  }
});
