import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, Alert, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import * as locationAction from "../../store/actions/locaiton";
import { useDispatch } from "react-redux";

const LocationPicker = props => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getLocationHandler();
  }, dispatch);
  const verfifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.LOCATION);
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient permissions",
        "you need to grant locaiton permission to use this app",
        [{ text: "okay" }]
      );
      return false;
    }
    return true;
  };
  const getLocationHandler = async () => {
    const hasPermission = await verfifyPermissions();
    if (!hasPermission) {
      return;
    }
    try {
      const location = await Location.getCurrentPositionAsync({
        timeout: 10000
      });
      dispatch(locationAction.setLocation());
      console.log(location);
      setIsLoading(false);
    } catch (err) {
      Alert("Could not fetch locatoin", "try again", [{ text: "okay" }]);
    }
  };
  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Icon name="map-marker" type="font-awesome" color="white" size={25} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default LocationPicker;
