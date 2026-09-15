import React from "react";
import { Card, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import InfoItem from "./InfoItem";

export default function MovieCard({ title, year, rating }) {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.title}>{title}</Text>
        <InfoItem label="Year" value={year} />
        <InfoItem label="Rating" value={rating} />
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { width: "90%", marginVertical: 6, backgroundColor: "#f1b1b1", borderRadius: 8, },
    title: { fontSize: 18, fontWeight: "bold", marginBottom: 4, color: "#111010" },
});
