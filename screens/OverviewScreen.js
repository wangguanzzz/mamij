import React, { useEffect } from "react";

import { Text, StyleSheet, FlatList, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import ProductItem from "../components/Shop/ProductItem";
import { SearchBar } from "react-native-elements";
import Colors from "../constants/Colors";
import * as productsActions from "../store/actions/product";

const OverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);
  const selectHandler = id => {
    props.navigation.navigate("Product", { id: id });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsActions.setProducts());
  }, [dispatch]);

  return (
    <View>
      <View>
        <SearchBar
          // containerStyle={{ backgroundColor: Colors.primary }}
          placeholder="Type Here..."
          onChangeText={() => {}}
          platform="ios"
        />
      </View>
      <FlatList
        numColumns={2}
        data={products}
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <ProductItem
            imageUrl={itemData.item.imageUrl}
            title={itemData.item.title}
            description={itemData.item.description}
            price={itemData.item.price}
            onSelect={selectHandler.bind(this, itemData.item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default OverviewScreen;
