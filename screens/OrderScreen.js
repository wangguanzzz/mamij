import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SearchBar, Icon, Button } from "react-native-elements";

const OrderScreen = props => {
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
    height: 20,
    flexDirection: "row"
  },
  categoryButton: {
    flex: 1
  }
});

export default OrderScreen;
