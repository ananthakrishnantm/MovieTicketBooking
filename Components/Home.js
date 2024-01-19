import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import LatestMovies from "./LatestMovies";
import NavBar from "./Navbar";
import { useRoute } from "@react-navigation/native";
import { showToast } from "./Toast";

const Home = () => {
  const route = useRoute();
  useEffect(() => {
    if (route.params?.showToast) {
      const seatNumber = route.params.seatNumber;
      showToast("info", "Booking Confirmed", `Your seat number: ${seatNumber}`); // Update with your actual seat number
    }
  }, [route.params?.showToast]);
  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.content}>
        <Text style={styles.header}>My Movie App</Text>
        <LatestMovies />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 0,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
  },
});

export default Home;
