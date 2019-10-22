import React from "react";

import { Text, StyleSheet, FlatList, View } from "react-native";
import { useSelector } from "react-redux";
import { Header } from "react-native-elements";
import ProductItem from "../components/Shop/ProductItem";
import { SearchBar } from "react-native-elements";

const OverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);

  return (
    <View>
      <View>
        <SearchBar placeholder="Type Here..." onChangeText={() => {}} />
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
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default OverviewScreen;
