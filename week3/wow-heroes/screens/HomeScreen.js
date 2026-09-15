import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Appbar } from "react-native-paper";

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
        <Button mode="contained" onPress={() => navigation.navigate("List")}>
          View Heroes
        </Button>
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
