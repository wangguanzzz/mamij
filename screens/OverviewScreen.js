import React, { useEffect } from "react";

import {
  Text,
  StyleSheet,
  FlatList,
  View,
  ScrollView,
  ColorPropType
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import ProductItem from "../components/Shop/ProductItem";
import { SearchBar, Icon, Header } from "react-native-elements";
import AdBanner from "../components/Shop/AdBanner";

import * as productsActions from "../store/actions/product";
import Colors from "../constants/Colors";

const OverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);
  const selectHandler = id => {
    props.navigation.navigate("Product", { id: id });
  };

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(productsActions.setProducts());
  // }, [dispatch]);

  return (
    <View>
      <Header>
        <Icon name="map-marker" type="font-awesome" color="#86939e" size={25} />
        <View></View>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={() => {}}
          platform="ios"
          containerStyle={{ backgroundColor: Colors.primary, width: 300 }}
        />
      </Header>

      <ScrollView>
        <AdBanner />
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default OverviewScreen;
