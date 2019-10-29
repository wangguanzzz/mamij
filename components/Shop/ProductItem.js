import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Text, Avatar } from "react-native-elements";

const ProductItem = props => {
  const { imageUrl, title, description, price, onSelect, avatarUrl } = props;

  return (
    <TouchableOpacity onPress={onSelect} style={{ flex: 1 }}>
      <Card
        image={{ uri: imageUrl }}
        imageProps={styles.image}
        containerStyle={styles.card}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
        <View style={{ flexDirection: "row" }}>
          <Avatar rounded source={{ uri: avatarUrl }} />
          <Text style={styles.org}>{description}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { flex: 1, margin: 5, borderRadius: 15 },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden"
  },
  title: { fontSize: 15 },
  price: { color: "red", fontSize: 20 },
  org: { fontSize: 10, marginLeft: 5 }
});

export default ProductItem;
