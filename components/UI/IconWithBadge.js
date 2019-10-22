import React from "react";

import { View, Text } from "react-native";
import { Icon } from "react-native-elements";

export const IconWithBadge = props => {
  const { name, badgeCount, color, size } = props;
  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <Icon name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            position: "absolute",
            right: -6,
            top: -3,
            backgroundColor: "red",
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
};

export const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let iconName;
  //   if (routeName === "Home")
  if (routeName === "Messages") {
    iconName = "message";
  } else if (routeName === "Community") {
    iconName = "pregnant-woman";
  } else if (routeName === "Orders") {
    iconName = "book";
  } else if (routeName === "User") {
    iconName = "face";
  } else {
    iconName = "favorite-border";
  }

  return <IconWithBadge name={iconName} size={25} color={tintColor} />;
};
