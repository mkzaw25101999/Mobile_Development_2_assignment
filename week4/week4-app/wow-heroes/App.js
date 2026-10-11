import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";

// my screens
import HomeScreen from "./screens/HomeScreen.js";
import ListScreen from "./screens/ListScreen.js";
import DetailScreen from "./screens/DetailScreen.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "World of Warcraft Heroes" }}
          />

          <Stack.Screen
            name="List"
            component={ListScreen}
            options={{ title: "Heroes List" }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{ title: "Hero Details" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
