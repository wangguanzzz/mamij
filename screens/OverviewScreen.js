import React, { useEffect } from "react";

import {
  Text,
  StyleSheet,
  FlatList,
  View,
  Dimensions,
  ScrollView
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import ProductItem from "../components/Shop/ProductItem";
import { SearchBar, Icon } from "react-native-elements";
import SwiperFlatList from "react-native-swiper-flatlist";
import Colors from "../constants/Colors";
import * as productsActions from "../store/actions/product";

const { width, height } = Dimensions.get("window");

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
      <View style={styles.headerContainer}>
        <View style={styles.mapLocator}>
          <Icon
            name="map-marker"
            type="font-awesome"
            color="#86939e"
            size={25}
          />
        </View>
        <View style={styles.searchContainer}>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={() => {}}
            platform="ios"
          />
        </View>
      </View>
      <ScrollView>
        <SwiperFlatList
          autoplay
          autoplayDelay={2}
          autoplayLoop
          index={2}
          showPagination
          style={styles.swiperContainer}
        >
          <View style={{ ...styles.slide, backgroundColor: "pink" }}>
            <Text style={{ flex: 1 }}>slide1</Text>
          </View>
          <View style={{ ...styles.slide, backgroundColor: "blue" }}>
            <Text style={{ flex: 1 }}>slide2</Text>
          </View>
          <View style={{ ...styles.slide, backgroundColor: "red" }}></View>
        </SwiperFlatList>

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
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  mapLocator: {
    flex: 2
  },
  searchContainer: {
    flex: 8
  },
  swiperContainer: { width: "100%", height: 300 },
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
