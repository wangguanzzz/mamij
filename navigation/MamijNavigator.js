import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import CommunityScreen from "../screens/CommunityScreen";
import MessageScreen from "../screens/MessageScreen";
import OrderScreen from "../screens/OrderScreen";
import UserScreen from "../screens/UserScreen";
import OverviewScreen from "../screens/OverviewScreen";
import AuthScreen from "../screens/AuthScreen";
import StartupScreen from "../screens/StartupScreen";
import ProductScreen from "../screens/ProdoctScreen";
import { getTabBarIcon } from "../components/UI/IconWithBadge";
import Colors from "../constants/Colors";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primary
  },
  headerTintColor: "white"
};

const OrderStack = createStackNavigator({
  Orders: OrderScreen
});

const UserStack = createStackNavigator({
  User: UserScreen
});

const AuthStack = createStackNavigator(
  {
    Auth: AuthScreen
  },
  { defaultNavigationOptions: defaultNavOptions }
);

const OverviewStack = createStackNavigator(
  {
    Overview: OverviewScreen,
    Product: ProductScreen
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const OrdersNavigator = createSwitchNavigator({
  Startup: StartupScreen,
  Auth: AuthStack,
  Orders: OrderStack
});

const UserNavigator = createSwitchNavigator({
  Startup: StartupScreen,
  Auth: AuthStack,
  User: UserStack
});

const AppNavigator = createBottomTabNavigator(
  {
    Overview: OverviewStack,

    // Community: CommunityScreen,
    // Messages: MessageScreen,
    Orders: OrdersNavigator,
    User: UserNavigator
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

export default createAppContainer(AppNavigator);
