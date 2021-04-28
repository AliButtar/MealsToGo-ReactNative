import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route, navigation }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchfastExpanded, setLunchfastExpanded] = useState(false);
  const [dinnerfastExpanded, setDinnerfastExpanded] = useState(false);
  const [drinksfastExpanded, setDrinksfastExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Section>
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          >
            <List.Item title="Eggs Benedict" />
            <List.Item title="Classic Breakfast" />
          </List.Accordion>
          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            expanded={lunchfastExpanded}
            onPress={() => setLunchfastExpanded(!lunchfastExpanded)}
          >
            <List.Item title="Burger w/ Fries" />
            <List.Item title="Steak Sandwich" />
            <List.Item title="Mushroom Soup" />
          </List.Accordion>
          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-variant" />}
            expanded={dinnerfastExpanded}
            onPress={() => setDinnerfastExpanded(!dinnerfastExpanded)}
          >
            <List.Item title="Spaghetti Bolognese" />
            <List.Item title="Veal Cutlet with Chicken Mushrooms" />
            <List.Item title="Steak Fries" />
          </List.Accordion>
          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="cup" />}
            expanded={drinksfastExpanded}
            onPress={() => setDrinksfastExpanded(!drinksfastExpanded)}
          >
            <List.Item title="Coffee" />
            <List.Item title="Tea" />
            <List.Item title="Modelo" />
            <List.Item title="Coke" />
            <List.Item title="Fanta" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};
