import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

function Profile({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: "#FFF" }}>
      <View style={styles.headerIcons}>
        <AntDesign name="menuunfold" size={24} color="black" />
        <MaterialIcons name="notifications-none" size={27} color="black" />
      </View>
      <View style={styles.profile}>
        <Image
          style={styles.profileImage}
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2018/08/04/10/23/man-3583424_1280.jpg",
          }}
        />
        <View style={styles.profileName}>
          <Text style={{ fontSize: 12, color: "gray", padding: 2 }}>
            Good Morning
          </Text>
          <Text style={{ fontSize: 25, padding: 2 }}>Nithesh</Text>
          <Button
            title="Activity Page"
            onPress={() => navigation.navigate("Activity")}
          />
        </View>
      </View>
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
            <Text style={styles.cardTopRight}>28 Aug</Text>
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
      <View style={styles.bottomCard}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            marginHorizontal: 10,
          }}
        >
          <Text style={{ color: "gray" }}>25</Text>
          <Text style={{ color: "gray" }}>26</Text>
          <Text style={{ color: "gray" }}>27</Text>
          <Text
            style={{
              color: "black",
              backgroundColor: "lightgray",
              borderRadius: 5,
              padding: 5,
            }}
          >
            28,Friday
          </Text>
          <Text style={{ color: "gray" }}>29</Text>
          <Text style={{ color: "gray" }}>30</Text>
          <Text style={{ color: "gray" }}>31</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={{ display: "flex", flexDirection: "row", margin: 25 }}>
            <Entypo name="trophy" size={30} color="black" />
            <Text
              style={{
                fontSize: 15,
                alignSelf: "center",
                paddingLeft: 8,
                fontWeight: "bold",
              }}
            >
              Limit
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: 20,
              marginTop: 10,
              marginLeft: 100,
            }}
          >
            <Text style={{ fontSize: 25 }}>$45.23</Text>
            <Text style={{ fontSize: 12, color: "gray" }}>Per day</Text>
          </View>
        </View>
        <View>
          <Image
            style={{ width: 320, height: 150, backgroundColor: "#fff" }}
            source={{
              uri:
                "https://cdn0.iconfinder.com/data/icons/financial-diagrams-1/100/barupvertical-512.png",
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

Profile.navigationOptions = () => {
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
  profile: {
    display: "flex",
    flexDirection: "row",
  },
  profileImage: {
    width: 90,
    height: 120,
  },
  profileName: {
    display: "flex",
    justifyContent: "flex-end",
    paddingBottom: 10,
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
    borderWidth: 1,
    borderRadius: 10,
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
  bottomCard: {
    width: 320,
    height: 250,
    marginHorizontal: 18,
    marginBottom: 30,
    borderRadius: 20,
  },
});

export default Profile;
