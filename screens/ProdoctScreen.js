import React from "react";
import { useSelector } from "react-redux";
import { TouchableOpacity, View, ScrollView, StyleSheet } from "react-native";
import { Image, Text, Button, Header, Icon } from "react-native-elements";

const GoBack = props => {
  const { onClick } = props;
  return (
    <TouchableOpacity onPress={onClick}>
      <Icon name="arrow-back" color="white" />
    </TouchableOpacity>
  );
};
const ProductScreen = props => {
  const id = props.navigation.getParam("id");
  const selectedProduct = useSelector(state =>
    state.products.availableProducts.find(ele => ele.id === id)
  );
  return (
    <View>
      <Header
        placement="left"
        leftComponent={
          <GoBack
            onClick={() => {
              props.navigation.goBack();
            }}
          />
        }
        centerComponent={<Text>{selectedProduct.title}</Text>}
      />
      <ScrollView>
        <Image
          containerStyle={styles.image}
          source={{ uri: selectedProduct.imageUrl }}
        />
        <View>
          <Button
            title="Add to Cart"
            onPress={() => {
              dispatch(cartActions.addToCart(selectedProduct));
            }}
          />
        </View>
        <Text>${selectedProduct.price.toFixed(2)}</Text>
        <Text> {selectedProduct.description}</Text>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
    fontFamily: "open-sans-bold"
  },
  actions: { marginVertical: 10, alignItems: "center" },
  description: {
    marginHorizontal: 20,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "open-sans"
  }
});
export default ProductScreen;
