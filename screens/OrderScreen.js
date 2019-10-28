import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SearchBar, Icon, Button } from "react-native-elements";
import OrderItem from "../components/Shop/OrderItem";

import ORDERS from "../data/dummy-orders";

const OrderScreen = props => {
  const selectHandler = id => {
    // props.navigation.navigate();
    console.log(`${id} is selected`);
  };
  return (
    <View>
      <View style={styles.headerContainer}>
        <SearchBar
          placeholder="搜索预订"
          onChangeText={() => {}}
          platform="ios"
        />
      </View>

      <View style={styles.categoryContainer}>
        <View style={styles.categoryButton}>
          <Button title="全部" type="clear" />
        </View>
        <View style={styles.categoryButton}>
          <Button title="进行中" type="clear" />
        </View>
        <View style={styles.categoryButton}>
          <Button title="完成" type="clear" />
        </View>
      </View>
      <FlatList
        data={ORDERS}
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <OrderItem
            onPress={selectHandler.bind(this, itemData.item.id)}
            title={itemData.item.title}
            orgId={itemData.item.orgId}
            imageUrl={itemData.item.imageUrl}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  categoryContainer: {
    width: "100%",
    height: 40,
    flexDirection: "row"
  },
  categoryButton: {
    flex: 1
  }
});

export default OrderScreen;
