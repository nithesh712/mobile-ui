import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

function List({ name, time, money, imageUrl }) {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Image
          style={{ width: 50, height: 50, borderRadius: 15 }}
          source={imageUrl}
        />
      </View>
      <View>
        <Text
          style={{ paddingHorizontal: 10, fontSize: 20, fontWeight: "bold" }}
        >
          {name}
        </Text>
        <Text style={{ paddingHorizontal: 10, fontSize: 11, color: "gray" }}>
          {time}
        </Text>
      </View>
      <View>
        <Text
          style={{
            marginLeft: 50,
            fontWeight: "bold",
            fontSize: 15,
            alignSelf: "flex-end",
          }}
        >
          {money}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    borderColor: "lightgray",
    display: "flex",
    flexDirection: "row",
    padding: 7,
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 5,
  },
});

export default List;
