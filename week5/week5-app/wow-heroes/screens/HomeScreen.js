import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Button, Appbar, useTheme } from "react-native-paper";
import PlatformInfo from "../components/PlatformInfo";

export default function HomeScreen({ navigation }) {
  const theme = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Appbar.Header>
        <Appbar.Content title="World of Warcraft Heroes" />
      </Appbar.Header>

      <View style={styles.container}>
        <Text style={[styles.title, { color: theme.colors.primary }]}>
          Welcome to World of Warcraft Heroes Showcase
        </Text>
        <Text
          style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}
        >
          Legends of Azeroth
        </Text>
        <Text style={{ marginBottom: 20, color: theme.colors.onSurface }}>
          We're running on {Platform.OS}
        </Text>
        <Button mode="contained" onPress={() => navigation.navigate("List")}>
          View Heroes
        </Button>
        <Button
          mode="outlined"
          style={{ marginTop: 10 }}
          onPress={() => navigation.navigate("Linking")}
        >
          Linking Demo
        </Button>
        <Button
          mode="outlined"
          style={{ marginTop: 10 }}
          onPress={() => navigation.navigate("Sensors")}
        >
          Sensors Demo
        </Button>
        <Button
          mode="outlined"
          style={{ marginTop: 10 }}
          onPress={() => navigation.navigate("Location")}
        >
          Location Demo
        </Button>
        <PlatformInfo />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: Platform.select({ android: 80, ios: 40, default: 60 }),
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
});
