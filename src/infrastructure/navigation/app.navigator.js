import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { MapsScreen } from "../../features/map/screens/maps.screen";
import { RestaurantNavigator } from "./restaurants.navigator";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant",
  Maps: "google-maps",
  Settings: "settings",
};

const tabBarIcon = (iconName) => ({ focused, size, color }) => {
  if (iconName === "google-maps") {
    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
  } else {
    return (
      <Ionicons
        name={focused ? iconName : `${iconName}-outline`}
        size={size}
        color={color}
      />
    );
  }
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: tabBarIcon(iconName),
  };
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
        <Tab.Screen name="Maps" component={MapsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
