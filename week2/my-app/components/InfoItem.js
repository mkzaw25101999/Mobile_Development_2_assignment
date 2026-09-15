import React from "react";
import { Text, StyleSheet } from "react-native";

export default function InfoItem({ label, value }) {
  return (
    <Text style={styles.info}>
      {label}: {value}
    </Text>
  );
}

const styles = StyleSheet.create({
  info: { fontSize: 16, color: "#111010" },
});
