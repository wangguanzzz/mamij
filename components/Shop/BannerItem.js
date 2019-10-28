import React from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions
} from "react-native";
import { Image } from "react-native-elements";

const { width } = Dimensions.get("window");

const BannerItem = props => {
  const { imageUrl, height, onPress } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: width,
    height: 300
  }
});
export default BannerItem;
