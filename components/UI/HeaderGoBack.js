import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const HeaderGoBack = props => {
  const { onClick } = props;
  return (
    <TouchableOpacity onPress={onClick}>
      <Icon name="arrow-back" color="white" />
    </TouchableOpacity>
  );
};

export default HeaderGoBack;
