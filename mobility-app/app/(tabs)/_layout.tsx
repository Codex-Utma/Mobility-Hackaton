import { Tabs } from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabsLayout() {
    return (
        <>
            <Tabs
                screenOptions={{
                    headerShown: false
                }}
            >
                <Tabs.Screen name="Rutas" options={{
                    title: "Rutas",
                    tabBarIcon: ({ color }) => <FontAwesome5 name="route" size={24} color="black" />
                }} />
                <Tabs.Screen name="Actual" options={{
                    title: "Actual",
                    tabBarIcon: ({ color }) => <FontAwesome5 name="bus" size={24} color="black" />
                }} />
                <Tabs.Screen name="Tarjeta" options={{
                    title: "Tarjeta",
                    tabBarIcon: ({ color }) => <FontAwesome5 name="address-card" size={24} color="black" />
                }} />
                <Tabs.Screen name="Transbordos" options={{
                    title: "Transbordos",
                    tabBarIcon: ({ color }) => <MaterialIcons name="transfer-within-a-station" size={24} color="black" />
                }} />
                <Tabs.Screen name="Perfil" options={{
                    title: "Perfil",
                    tabBarIcon: ({ color }) => <FontAwesome5 name="user-circle" size={24} color="black" />
                }} />
            </Tabs>
        </>
    )
}
