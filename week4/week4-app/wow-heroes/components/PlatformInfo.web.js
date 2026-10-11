import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

export default function PlatformInfo() {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="titleMedium" style={styles.heading}>
          Web Version
        </Text>
        <Text style={styles.text}>
          You are viewing the web build running in a browser.
        </Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { margin: 16, backgroundColor: "#f3e5f5" },
  heading: { color: "#1a1a1a", fontWeight: "bold" },
  text: { color: "#1a1a1a" },
});
