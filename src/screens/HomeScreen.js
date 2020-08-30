import React from "react";
import { Text, View, Button } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Page</Text>
      <Button
        title="Profile Page"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

export default HomeScreen;
