import React from "react";
import { View, Text, Image, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const ContentScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={{
            uri:
              "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
          }}
          style={styles.img}
        />
        <Text style={{ fontSize: 22, marginTop: 15, marginLeft: 30 }}>
          Stay With Me
        </Text>
        <View style={styles.details}>
          <View>
            <Text
              style={{ marginHorizontal: 5, marginLeft: 30, color: "gray" }}
            >
              Sam Doeni
            </Text>
          </View>

          <View style={styles.icons}>
            <Feather
              name="download"
              size={23}
              color="gray"
              style={{ marginHorizontal: 5 }}
            />
            <SimpleLineIcons
              name="options-vertical"
              size={20}
              color="gray"
              style={{ marginHorizontal: 5 }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  img: {
    width: 300,
    height: 300,
    alignSelf: "center",
    marginTop: 30,
    borderRadius: 50,
  },
  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    marginRight: 20,
  },
});

export default ContentScreen;
