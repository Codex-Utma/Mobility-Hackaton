import { Auth0Provider} from 'react-native-auth0';
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <Auth0Provider domain={`${process.env.EXPO_PUBLIC_AUTH0_DOMAIN}`} clientId={`${process.env.EXPO_PUBLIC_AUTH0_CLIENT_ID}`}>
      <SafeAreaProvider>
        <StatusBar />
        <Stack
          screenOptions={{
            headerShown: false
          }}
        />
      </SafeAreaProvider>
    </Auth0Provider>
  );
}
