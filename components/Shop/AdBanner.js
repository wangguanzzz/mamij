import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import SwiperFlatList from "react-native-swiper-flatlist";
import { Text } from "react-native-elements";
import BannerItem from "./BannerItem";

import ADS from "../../data/dummy-ads";

const AdBanner = props => {
  return (
    <SwiperFlatList
      autoplay
      autoplayDelay={2}
      autoplayLoop
      // index={2}
      showPagination
      style={styles.swiperContainer}
    >
      {props.children}
    </SwiperFlatList>
  );
};

const styles = StyleSheet.create({
  swiperContainer: { width: "100%", height: 180 }
});

export default AdBanner;
