import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Card, Text, Divider, Appbar } from "react-native-paper";

export default function DetailScreen({ route, navigation }) {
  const { hero } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Hero Details" />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.container}>
        <Text variant="headlineMedium" style={styles.name}>
          {hero.name}
        </Text>
        <Text variant="titleMedium" style={styles.title}>
          {hero.title}
        </Text>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="labelLarge">Faction</Text>
            <Text style={styles.value}>{hero.faction}</Text>
            <Divider style={styles.divider} />

            <Text variant="labelLarge">Class</Text>
            <Text style={styles.value}>{hero.class}</Text>
            <Divider style={styles.divider} />

            <Text variant="labelLarge">Role</Text>
            <Text style={styles.value}>{hero.role}</Text>
            <Divider style={styles.divider} />
          </Card.Content>
        </Card>

        <Text variant="titleMedium" style={styles.sectionTitle}>
          Description
        </Text>
        <Text style={styles.description}>{hero.description}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  name: {
    fontWeight: "bold",
    marginBottom: 4,
    color: "#1a1a1a",
  },
  title: {
    color: "#1a1a1a",
    marginBottom: 16,
  },
  card: {
    marginBottom: 20,
  },
  value: {
    fontSize: 16,
    marginBottom: 8,
  },
  divider: {
    marginVertical: 6,
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: 8,
    color: "#1a1a1a",
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    color: "#1a1a1a",
  },
});
