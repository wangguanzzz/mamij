import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import CommunityScreen from "../screens/CommunityScreen";
import MessageScreen from "../screens/MessageScreen";
import OrderScreen from "../screens/OrderScreen";
import UserScreen from "../screens/UserScreen";
import OverviewScreen from "../screens/OverviewScreen";

const TabNavigator = createBottomTabNavigator({
  Overview: OverviewScreen,
  Community: CommunityScreen,
  Messages: MessageScreen,
  Orders: OrderScreen,
  User: UserScreen
});

export default createAppContainer(TabNavigator);
