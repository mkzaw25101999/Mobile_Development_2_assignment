import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

export default function HeroCard({ hero, onPress }) {
  return (
    <Card style={styles.card} onPress={onPress}>
      <Card.Content>
        <Text variant="titleMedium">{hero.name}</Text>
        <Text variant="bodySmall">
          {hero.title} . {hero.faction}
        </Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
  },
});
