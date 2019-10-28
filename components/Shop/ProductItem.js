import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Text, Button, Icon, Image } from "react-native-elements";

const ProductItem = props => {
  const { imageUrl, title, description, price, onSelect } = props;

  return (
    <Card
      image={{ uri: imageUrl, overflow: "hidden", borderTopRightRadius: 10 }}
      imageProps={{ borderRadius: 10, overflow: "hidden" }}
      containerStyle={styles.card}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { flex: 1, margin: 5, borderRadius: 15 },
  title: { fontSize: 15 },
  price: { color: "red", fontSize: 25 }
});

export default ProductItem;
