import CardSaved from "@/components/Mobile/Card/CardSaved";
import { BarcodeScanningResult, CameraView } from "expo-camera";
import { useEffect, useState } from "react";
import { Button, Pressable, StyleSheet, View } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Tarjeta() {

  const [code, setCode] = useState<string | null>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  useEffect(() => {
    const getCode = async () => {
      const savedCode = await AsyncStorage.getItem('code');
      if (savedCode) {
        setCode(savedCode);
        return;
      }
      setIsCameraOpen(true);
    };
    getCode();
  }, [])

  const barcodeResult = async (result: BarcodeScanningResult) => {
    if (!result.raw) {
      return;
    }
    setCode(result.raw);
    await AsyncStorage.setItem('code', result.raw);
    alert(`Barcode scanned: ${result.raw}`);
    setIsCameraOpen(false);
  };

  if(isCameraOpen) {
    return (
      <CameraView
      facing="back"
      style={styles.camera}
      barcodeScannerSettings={{
        barcodeTypes: ["code128", "code39"],
      }}
      onBarcodeScanned={barcodeResult}
    />
    );
  }

  if(!code) {
    return (
      <View
        style={styles.container}
      >
        <Button title="Agregar tarjeta" onPress={() => setIsCameraOpen(true)} />
      </View>
    );
  }

  return (
    <>
      <Pressable onPress={() => setIsCameraOpen(true)}>
        <View style={styles.container}>
          <Button title="Escanear tarjeta" onPress={() => setIsCameraOpen(true)} />
        </View>
      </Pressable>
      <CardSaved code={code} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 48,
    alignItems: "center",
  },
  camera: {
    flex: 1,
  },
});
