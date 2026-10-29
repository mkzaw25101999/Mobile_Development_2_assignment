import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  Card,
  Text,
  Button,
  Appbar,
  ActivityIndicator,
  useTheme,
} from "react-native-paper";
import * as Location from "expo-location";
import * as Linking from "expo-linking";

export default function LocationScreen({ navigation }) {
  const theme = useTheme();
  const [status, setStatus] = useState("Location not requested yet.");
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  const getLocation = async () => {
    setLoading(true);
    setLocation(null);

    const { status: permission } =
      await Location.requestForegroundPermissionsAsync();

    if (permission !== "granted") {
      setStatus("Location permission denied.");
      setLoading(false);
      return;
    }

    try {
      setStatus("Getting location...");
      const current = await Location.getCurrentPositionAsync({});
      setLocation(current.coords);
      setStatus("Location received.");
    } catch (err) {
      setStatus("Could not get location: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Location" />
      </Appbar.Header>

      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium" style={styles.heading}>
              Device Location
            </Text>
            <Text style={styles.status}>{status}</Text>

            {loading && <ActivityIndicator style={{ marginTop: 12 }} />}

            {location && (
              <View style={{ marginTop: 12 }}>
                <Text style={styles.value}>Latitude: {location.latitude}</Text>
                <Text style={styles.value}>
                  Longitude: {location.longitude}
                </Text>
              </View>
            )}
          </Card.Content>
        </Card>

        <Button mode="contained" icon="map-marker" onPress={getLocation}>
          Use my location
        </Button>
        {location && (
          <Button
            mode="outlined"
            icon="map"
            style={{ marginTop: 12 }}
            onPress={() =>
              Linking.openURL(
                `https://www.google.com/maps?q=${location.latitude},${location.longitude}`,
              )
            }
          >
            Open in Maps
          </Button>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: { marginBottom: 20 },
  heading: { fontWeight: "bold", marginBottom: 10 },
  status: { fontSize: 16 },
  value: { fontSize: 16, marginBottom: 6 },
});
