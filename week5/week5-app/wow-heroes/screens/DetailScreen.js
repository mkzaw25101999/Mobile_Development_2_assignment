import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  Card,
  Text,
  Divider,
  Appbar,
  Chip,
  useTheme,
} from "react-native-paper";

export default function DetailScreen({ route, navigation }) {
  const { post } = route.params;
  const theme = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Post Details" />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.container}>
        <Text
          variant="headlineSmall"
          style={[styles.title, { color: theme.colors.primary }]}
        >
          {post.title}
        </Text>

        <Card style={styles.card}>
          <Card.Content>
            <Text variant="bodyMedium" style={styles.body}>
              {post.body}
            </Text>
          </Card.Content>
        </Card>

        <View style={styles.tagRow}>
          {post.tags.map((tag, index) => (
            <Chip key={index} style={styles.chip}>
              {tag}
            </Chip>
          ))}
        </View>

        <Divider style={styles.divider} />

        <Text variant="labelLarge" style={styles.label}>
          Reactions
        </Text>
        <Text style={styles.value}>
          Likes {post.reactions.likes} Dislikes {post.reactions.dislikes}
        </Text>

        <Text variant="labelLarge" style={styles.label}>
          Views
        </Text>
        <Text style={styles.value}>{post.views}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontWeight: "bold", marginBottom: 16 },
  card: { marginBottom: 16 },
  body: { lineHeight: 22 },
  tagRow: { flexDirection: "row", flexWrap: "wrap", marginBottom: 10 },
  chip: { marginRight: 8, marginBottom: 8 },
  divider: { marginVertical: 12 },
  value: { fontSize: 16, marginBottom: 12 },
  label: { fontWeight: "bold", marginTop: 4 },
});
