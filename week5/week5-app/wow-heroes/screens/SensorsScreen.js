import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text, Appbar, useTheme } from "react-native-paper";
import { Accelerometer } from "expo-sensors";

export default function SensorsScreen({ navigation }) {
  const theme = useTheme();
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    Accelerometer.setUpdateInterval(500);
    const subscription = Accelerometer.addListener((accelerometerData) => {
      setData(accelerometerData);
    });

    return () => subscription.remove();
  }, []);

  const round = (n) => Math.round(n * 100) / 100;

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Accelerometer" />
      </Appbar.Header>

      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium" style={styles.heading}>
              Accelerometer Data
            </Text>
            <Text style={styles.value}>X: {round(data.x)}</Text>
            <Text style={styles.value}>Y: {round(data.y)}</Text>
            <Text style={styles.value}>Z: {round(data.z)}</Text>
          </Card.Content>
        </Card>

        <Text style={styles.hint}>
          Move or tilt your phone to see the values change.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: { marginBottom: 20 },
  heading: { fontWeight: "bold", marginBottom: 12 },
  value: { fontSize: 22, marginBottom: 6 },
  hint: { textAlign: "center", opacity: 0.7 },
});
