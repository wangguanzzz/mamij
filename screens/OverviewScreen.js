import React from "react";

import { Text, StyleSheet, FlatList, View } from "react-native";
import { useSelector } from "react-redux";

import ProductItem from "../components/Shop/ProductItem";
import { SearchBar } from "react-native-elements";
import Colors from "../constants/Colors";

const OverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);
  const selectHandler = title => {
    props.navigation.navigate("Product", { title: title });
  };

  return (
    <View>
      <View>
        <SearchBar
          containerStyle={{ backgroundColor: Colors.primary }}
          placeholder="Type Here..."
          onChangeText={() => {}}
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
            onSelect={selectHandler.bind(this, itemData.item.title)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default OverviewScreen;
