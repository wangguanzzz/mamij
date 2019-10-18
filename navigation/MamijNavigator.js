import React from "react";

import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import CommunityScreen from "../screens/CommunityScreen";
import MessageScreen from "../screens/MessageScreen";
import OrderScreen from "../screens/OrderScreen";
import UserScreen from "../screens/UserScreen";
import OverviewScreen from "../screens/OverviewScreen";
import { getTabBarIcon } from "../components/UI/IconWithBadge";
import Colors from "../constants/Colors";

const TabNavigator = createBottomTabNavigator(
  {
    Overview: {
      screen: OverviewScreen
    },
    Community: CommunityScreen,
    Messages: MessageScreen,
    Orders: OrderScreen,
    User: UserScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor)
    }),
    tabBarOptions: {
      activeTintColor: Colors.primary,
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(TabNavigator);
