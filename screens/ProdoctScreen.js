import React from "react";
import { useSelector } from "react-redux";
import { View, ScrollView, StyleSheet } from "react-native";
import { Image, Text, Button, Header } from "react-native-elements";
import HeaderGoBack from "../components/UI/HeaderGoBack";

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
          <HeaderGoBack
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
