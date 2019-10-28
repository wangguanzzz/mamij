import React from "react";
import { View, ImageBackground, StyleSheet, Dimensions } from "react-native";
import { ListItem } from "react-native-elements";
const { width, height } = Dimensions.get("window");

const PowerCard = props => {
  const { imageUrl, title, description } = props;
  return (
    <ListItem
      //   component={TouchableScale}
      friction={90}
      tension={100}
      activeScale={0.95}
      leftAvatar={{ rounded: true, source: { uri: imageUrl } }}
      //   linearGradientProps={{
      //     colors: l.linearGradientColors,
      //     start: [1, 0],
      //     end: [0.2, 0],
      //   }}
      //   ViewComponent={LinearGradient}
      title={title}
      titleStyle={styles.cardTitle}
      subtitleStyle={styles.subtitle}
      subtitle={description}
      chevronColor="black"
      chevron
      containerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: height / 12,
    width: "80%",
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8
  },
  cardTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 10
  },
  cardSubtitle: { color: "black" }
});

export default PowerCard;
