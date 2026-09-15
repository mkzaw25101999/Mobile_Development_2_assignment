import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

// components
import HeroCard from "../components/HeroCard.js";

// data
import HeroData from "../data/HeroData.json";
import { FlatList } from "react-native";

export default function ListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Heroes List" />
      </Appbar.Header>
      <FlatList
        data={HeroData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HeroCard
            hero={item}
            onPress={() => navigation.navigate("Detail", { hero: item })}
          />
        )}
        contentContainerStyle={{ padding: 12 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
