import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Text, Button, Icon, Image } from "react-native-elements";

const ProductItem = props => {
  const { imageUrl, title, description, price, onSelect } = props;

  return (
    <Card title={title} containerStyle={styles.card}>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={onSelect}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: imageUrl }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.controlPanel}>
        <Text>{price.toFixed(2)}</Text>
        <Icon name="add" />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { flex: 1, margin: 5 },
  image: { width: "100%", height: 200 },
  imageContainer: { justifyContent: "center", marginBottom: 5 },
  controlPanel: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default ProductItem;
