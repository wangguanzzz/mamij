import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import SwiperFlatList from "react-native-swiper-flatlist";
import { Text } from "react-native-elements";

const { width, height } = Dimensions.get("window");

const AdBanner = props => {
  return (
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
  );
};

const styles = StyleSheet.create({
  swiperContainer: { width: "100%", height: 180 },
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

export default AdBanner;
