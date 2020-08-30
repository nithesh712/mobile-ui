import React from "react";
import { View, Text, Image, Button } from "react-native";

const ListScreen = ({ navigation }) => {
  return (
    <View>
      <Text>List Screen</Text>
      <Button
        title="Content Screen"
        onPress={() => navigation.navigate("NowPlaying")}
      />
    </View>
  );
};

ListScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

export default ListScreen;
