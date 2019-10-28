import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon, Button, PricingCard, Text } from "react-native-elements";
import PowerCard from "../components/Shop/PowerCard";
import UserHeaderLeft from "../components/Shop/UserHeaderLeft";
import CARDS from "../data/dummy-cards";

const UserScreen = props => {
  return (
    <View>
      <View style={styles.cardsContainer}>
        <View style={styles.buttonContainer}>
          <UserHeaderLeft
            iconName="home"
            iconType="font-awesome"
            headerTitle="卡"
          />
          <Button title="查看全部" type="clear" />
        </View>
        {CARDS.map(c => (
          <PowerCard
            key={c.id}
            imageUrl={c.imageUrl}
            title={c.title}
            description={c.description}
          />
        ))}
      </View>
      <View style={styles.cardsContainer}>
        <View style={styles.buttonContainer}>
          <Icon name="menu" size={25} type="entypo" />
          <Button title="查看全部" type="clear" />
        </View>
        <PricingCard
          color="red"
          title="水晶卡"
          price="5"
          info={["1 User", "Basic Support", "All Core Features"]}
          button={{ title: "积分明细", icon: "flight-takeoff" }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {},
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    height: 25,
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default UserScreen;
