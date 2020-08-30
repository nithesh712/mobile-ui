import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import List from "../components/List";

function ActivityScreen({ navigation }) {
  return (
    <View>
      <View style={styles.headerIcons}>
        <Button title="<" onPress={() => navigation.navigate("Profile")} />
        <MaterialIcons name="notifications-none" size={27} color="black" />
      </View>
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginHorizontal: 30,
          marginTop: 30,
        }}
      >
        My Activity
      </Text>
      <View style={styles.card}>
        <View style={styles.cardTop}>
          <View>
            <Text style={{ fontSize: 25, color: "#fff", margin: 10 }}>
              VISA
            </Text>
            <Text style={{ fontSize: 20, color: "#fff", marginLeft: 10 }}>
              159-564-784-451
            </Text>
          </View>
          <View>
            <Text style={styles.cardTopRight}>Nithesh</Text>
          </View>
        </View>
        <View style={styles.cardBottom}>
          <View>
            <Text style={{ color: "#f2f2f2", fontSize: 15 }}>
              Wallet Balance
            </Text>
            <Text style={{ color: "#fff", fontSize: 30 }}>$1280.35</Text>
          </View>
          <Image
            style={{ width: 70, height: 40, alignSelf: "center" }}
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1024px-MasterCard_Logo.svg.png",
            }}
          />
        </View>
      </View>
      <View style={styles.activityBottm}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Today</Text>
          <Text
            style={{
              borderWidth: 2,
              borderColor: "gray",
              alignSelf: "center",
              marginHorizontal: 10,
              borderRadius: 10,
              padding: 5,
              marginVertical: 10,
            }}
          >
            28 Aug
          </Text>
        </View>
        <List
          name="Shoping"
          time="3:41 pm"
          money="-50.3"
          imageUrl={{
            uri:
              "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
          }}
        />
        <List
          name="Taxi"
          time="2:10 pm"
          money="-8.3"
          imageUrl={{
            uri:
              "https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg",
          }}
        />
      </View>
    </View>
  );
}

ActivityScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  headerIcons: {
    margin: 20,
    marginTop: 40,
    marginBottom: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    width: 320,
    height: 200,
    marginVertical: 20,
    marginHorizontal: 18,
    borderRadius: 20,
    backgroundColor: "#586776",
  },
  cardTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardTopRight: {
    margin: 25,
    color: "#fff",
    padding: 5,
    fontSize: 12,
    borderColor: "#fff",
  },
  cardBottom: {
    display: "flex",
    flexDirection: "row",
    margin: 25,
    marginTop: 40,
    justifyContent: "space-between",
  },
  activityBottm: {
    alignSelf: "center",
    width: 320,
    height: 340,
    borderColor: "red",
    borderWidth: 1,
  },
});

export default ActivityScreen;
