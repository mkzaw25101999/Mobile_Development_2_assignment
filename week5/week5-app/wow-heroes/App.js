import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider, MD3DarkTheme } from "react-native-paper";

import HomeScreen from "./screens/HomeScreen";
import ListScreen from "./screens/ListScreen";
import DetailScreen from "./screens/DetailScreen";
import LinkingScreen from "./screens/LinkingScreen";
import SensorsScreen from "./screens/SensorsScreen";
import LocationScreen from "./screens/LocationScreen";

const Stack = createNativeStackNavigator();

const wowTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#f8b700",
    onPrimary: "#1a1206",
    background: "#120d08",
    surface: "#1e1710",
    onSurface: "#f5e9d0",
    surfaceVariant: "#2a2016",
    onSurfaceVariant: "#d8c7a0",
  },
};

export default function App() {
  return (
    <PaperProvider theme={wowTheme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="List" component={ListScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen name="Linking" component={LinkingScreen} />
          <Stack.Screen name="Sensors" component={SensorsScreen} />
          <Stack.Screen name="Location" component={LocationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
