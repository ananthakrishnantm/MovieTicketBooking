import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LatestMovies from "./Components/LatestMovies";
import NavBar from "./Components/Navbar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Components/Home";
import MovieSearch from "./Components/SearchBar";
import SearchResults from "./Components/SearchResults";
import MovieDetails from "./Components/MovieDetails";
import BookingScreen from "./Components/BookingScreen";
import Toast from "react-native-toast-message";
import BookingDetails from "./Components/BookingDetails";
// Assuming both files are in the same directory

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MovieSearch" component={MovieSearch} />
        <Stack.Screen name="SearchResults" component={SearchResults} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
        <Stack.Screen name="BookingScreen" component={BookingScreen} />
        <Stack.Screen name="BookingDetails" component={BookingDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
