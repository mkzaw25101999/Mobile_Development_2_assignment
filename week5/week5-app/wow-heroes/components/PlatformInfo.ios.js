import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

export default function PlatformInfo() {
  return (
    <Card style={styles.card} mode="outlined">
      <Card.Content>
        <Text variant="titleMedium" style={styles.heading}>
          iOS Version
        </Text>
        <Text style={styles.text}>
          You are using the iOS build, with an Apple-style layout.
        </Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { margin: 16, backgroundColor: "#e3f2fd" },
  heading: { color: "#1a1a1a", fontWeight: "bold" },
  text: { color: "#1a1a1a" },
});
