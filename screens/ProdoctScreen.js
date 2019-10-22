import React from "react";

import { TouchableOpacity } from "react-native";
import { Image, Text, Button } from "react-native-elements";
import { Header, Icon } from "react-native-elements";
const GoBack = props => {
  const { onClick } = props;
  return (
    <TouchableOpacity onPress={onClick}>
      <Icon name="arrow-back" color="white" />
    </TouchableOpacity>
  );
};
const ProductScreen = props => {
  return (
    <Header
      placement="left"
      leftComponent={
        <GoBack
          onClick={() => {
            props.navigation.goBack();
          }}
        />
      }
    />
  );
};

export default ProductScreen;
