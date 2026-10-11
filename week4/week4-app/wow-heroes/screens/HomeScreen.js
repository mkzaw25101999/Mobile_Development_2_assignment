import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Button, Appbar } from "react-native-paper";
import PlatformInfo from "../components/PlatformInfo";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="World of Warcraft Heroes" />
      </Appbar.Header>

      <View style={styles.container}>
        <Text style={styles.title}>
          Welcome to World of Warcraft Heroes Showcase
        </Text>
        <Text style={styles.subtitle}>Legends of Azeroth</Text>
        <Text style={{ marginBottom: 20 }}>We're running on {Platform.OS}</Text>
        <Button mode="contained" onPress={() => navigation.navigate("List")}>
          View Heroes
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
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },
});
