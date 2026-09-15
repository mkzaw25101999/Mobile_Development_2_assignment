import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import {PaperProvider, Button} from 'react-native-paper';
import MovieCard from "./components/MovieCard";

const initialMovies = [
  { title: "The Shawshank Redemption", year: 1994, rating: 9.3 },
  { title: "The Godfather", year: 1972, rating: 9.2 },
  { title: "The Dark Knight", year: 2008, rating: 9.0 },
  { title: "Pulp Fiction", year: 1994, rating: 8.9 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    rating: 8.9,
  },
  { title: "Forrest Gump", year: 1994, rating: 8.8 },
];

export default function App() {
  const [movies, setMovies] = React.useState(initialMovies);

  const addMovies = () => {
    const newMovies = { title: "Inception", year: 2010, rating: 8.8 };
    setMovies([...movies, newMovies]);
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Movie List</Text>
        <Pressable style={styles.button} onPress={addMovies}>
          <Text style={styles.buttonText}>Add Movie</Text>
        </Pressable>
        <Text style={styles.count}>Total Movies: {movies.length}</Text>
        <ScrollView>
          {movies.map((movie, index) => (
            <MovieCard
              key={index}
              title={movie.title}
              year={movie.year}
              rating={movie.rating}
            />
          ))}
        </ScrollView>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#f08686",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  count: {
    fontSize: 16,
    marginBottom: 10,
  },
});
