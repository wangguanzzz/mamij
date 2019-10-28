import React, { useEffect } from "react";

import {
  StyleSheet,
  FlatList,
  View,
  ScrollView,
  Dimensions
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import ProductItem from "../components/Shop/ProductItem";
import { SearchBar, Icon, Header, Image } from "react-native-elements";
import AdBanner from "../components/Shop/AdBanner";
import LocationPicker from "../components/UI/LocationPicker";

import * as productsActions from "../store/actions/product";
import Colors from "../constants/Colors";
import BannerItem from "../components/Shop/BannerItem";

const { width, height } = Dimensions.get("window");

import ADS from "../data/dummy-ads";

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
        <LocationPicker />
        <View></View>
        <SearchBar
          placeholder="搜索"
          onChangeText={() => {}}
          platform="ios"
          containerStyle={{
            backgroundColor: Colors.primary,
            width: 350
            // height: 30
          }}
          round={true}
          cancelButtonProps={{ color: "white" }}
        />
      </Header>

      <ScrollView>
        <AdBanner>
          {ADS.map(ad => (
            <BannerItem
              key={ad.id}
              height={300}
              imageUrl={ad.imageUrl}
              onPress={() => {
                console.log(`${ad.prodId} is clicked`);
              }}
            />
          ))}
        </AdBanner>
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

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    width: width,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default OverviewScreen;
