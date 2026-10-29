import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text, Button, Appbar, useTheme } from "react-native-paper";
import * as Linking from "expo-linking";

export default function LinkingScreen({ navigation }) {
  const theme = useTheme();
  const phoneNumber = "+358401234567";
  const website = "https://www.gmail.com";
  const email = "example@gmail.com";

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Linking" />
      </Appbar.Header>

      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium" style={styles.name}>
              Contact Card
            </Text>
            <Text style={styles.info}>Phone: {phoneNumber}</Text>
            <Text style={styles.info}>Website: {website}</Text>
            <Text style={styles.info}>Email: {email}</Text>
          </Card.Content>
        </Card>

        <Button
          mode="contained"
          icon="phone"
          style={styles.button}
          onPress={() => Linking.openURL("tel:" + phoneNumber)}
        >
          Call
        </Button>
        <Button
          mode="contained"
          icon="message"
          style={styles.button}
          onPress={() => Linking.openURL("sms:" + phoneNumber)}
        >
          Send SMS
        </Button>
        <Button
          mode="contained"
          icon="web"
          style={styles.button}
          onPress={() => Linking.openURL(website)}
        >
          Open Website
        </Button>
        <Button
          mode="contained"
          icon="email"
          style={styles.button}
          onPress={() => Linking.openURL("mailto:" + email)}
        >
          Send Email
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: { marginBottom: 20 },
  name: { fontWeight: "bold", marginBottom: 8 },
  info: { fontSize: 15, marginBottom: 4 },
  button: { marginBottom: 12 },
});
