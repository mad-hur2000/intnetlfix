import React from "react";
import { Button, TouchableOpacity } from "react-native";
import Moviescreen from "./Moviescreen";
import Detailscreen from "./Detailscreen";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const Moviestack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Movie"
        component={Moviescreen}
        options={{
          headerTintColor: "red",
          headerStyle: {
            backgroundColor: "rgba(1,1,1,0.7)",
          },

          title: "Movies",
          headerRight: () => (
            <TouchableOpacity>
              <Ionicons
                name="search-sharp"
                color="tomato"
                style={{
                  marginRight: 10,
                  marginTop: 4,
                }}
                size={32}
                onPress={() => navigation.navigate("Search")}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Details"
        component={Detailscreen}
        options={{
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={32}
              onPress={() => navigation.goBack()}
              color="tomato"
            />
          ),
          headerTintColor: "tomato",
          headerStyle: {
            backgroundColor: "rgba(1,1,1,0.7)",
          },
          title: "details",
        }}
      />
       </Stack.Navigator>
  );
};

export default Moviestack;
