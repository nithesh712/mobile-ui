import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ListScreen from "./src/screens/ListScreen";
import ContentScreen from "./src/screens/ContentScreen";
import HomeScreen from "./src/screens/HomeScreen";
import Profile from "./src/screens/Profile";
import ActivityScreen from "./src/screens/ActivityScreen";

// const HomeScreen = () => {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// };

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    NowPlaying: ContentScreen,
    Profile: Profile,
    Activity: ActivityScreen,
  },
  {
    initialRouteName: "Profile",
  }
);

export default createAppContainer(AppNavigator);
