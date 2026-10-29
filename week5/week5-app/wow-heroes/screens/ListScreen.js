import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import {
  Card,
  Text,
  ActivityIndicator,
  Button,
  Searchbar,
  useTheme,
} from "react-native-paper";

export default function ListScreen({ navigation }) {
  const theme = useTheme();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://dummyjson.com/posts");
      if (!response.ok) {
        throw new Error("HTTP error: " + response.status);
      }
      const data = await response.json();
      setPosts(data.posts);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const text = search.toLowerCase();
    return (
      post.title.toLowerCase().includes(text) ||
      post.body.toLowerCase().includes(text)
    );
  });

  if (loading) {
    return (
      <View
        style={[styles.center, { backgroundColor: theme.colors.background }]}
      >
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 10 }}>Loading posts...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={[styles.center, { backgroundColor: theme.colors.background }]}
      >
        <Text style={styles.errorText}>Something went wrong.</Text>
        <Text style={styles.errorDetail}>{error}</Text>
        <Button mode="contained" onPress={fetchPosts} style={{ marginTop: 16 }}>
          Retry
        </Button>
      </View>
    );
  }

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Searchbar
        placeholder="Search posts..."
        value={search}
        onChangeText={setSearch}
        style={styles.searchbar}
      />

      {filteredPosts.length === 0 ? (
        <View style={styles.center}>
          <Text>No posts match your search.</Text>
        </View>
      ) : (
        <FlatList
          data={filteredPosts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              style={styles.card}
              onPress={() => navigation.navigate("Detail", { post: item })}
            >
              <Card.Content>
                <Text variant="titleMedium">{item.title}</Text>
                <Text variant="bodySmall" numberOfLines={2}>
                  {item.body}
                </Text>
                <Text variant="labelSmall" style={styles.meta}>
                  Likes {item.reactions.likes} Views {item.views}
                </Text>
              </Card.Content>
            </Card>
          )}
          contentContainerStyle={{ padding: 12 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: { marginBottom: 10 },
  meta: { marginTop: 6, opacity: 0.7 },
  errorText: { fontSize: 18, fontWeight: "bold" },
  errorDetail: { color: "#ff6b6b", marginTop: 6, textAlign: "center" },
  searchbar: { margin: 12 },
});
