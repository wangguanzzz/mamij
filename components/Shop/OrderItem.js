import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";

const OrderItem = props => {
  const { title, orgId, imageUrl, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <ListItem
        title={title}
        subtitle={orgId}
        leftAvatar={{ title: title, source: { uri: imageUrl }, rounded: false }}
        chevron
        bottomDivider
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default OrderItem;
