import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <>
            <Tabs
                screenOptions={{
                    headerShown: false
                }}
            >
                <Tabs.Screen name="Perfil" options={{
                    title: "Perfil",
                }} />
                <Tabs.Screen name="Actual" options={{
                    title: "Actual"
                }} />
                <Tabs.Screen name="Tarjeta" options={{
                    title: "Tarjeta",
                }} />
                <Tabs.Screen name="Rutas" options={{
                    title: "Rutas"
                }} />
                <Tabs.Screen name="Transbordos" options={{
                    title: "Transbordos"
                }} />
            </Tabs>
        </>
    )
}
