import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import MovieSearch from "./SearchBar";

const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <View style={styles.navBar}>
      <StatusBar backgroundColor="#3498db" barStyle="light-content" />
      <Text style={styles.logo}>Your App Name</Text>
      <TouchableOpacity style={styles.navButton} onPress={toggleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      {showSearch && <MovieSearch />}
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#3498db", // Change the background color as needed
    margin: 0, // Adjust marginTop based on status bar height
  },
  logo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  navButton: {
    marginLeft: 10,
  },
  buttonText: {
    color: "#fff",
  },
});

export default NavBar;
