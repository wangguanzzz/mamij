import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text, Button, Icon, Image } from "react-native-elements";

const ProductItem = props => {
  const { imageUrl, title, description } = props;

  return (
    <Card title={title} containerStyle={styles.card}>
      <View style={styles.cardContext}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: imageUrl }}
        />
        <Text>{description}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { flex: 1, margin: 5 },
  image: { width: "100%", height: 200 },
  cardContext: { justifyContent: "center" }
});

export default ProductItem;
