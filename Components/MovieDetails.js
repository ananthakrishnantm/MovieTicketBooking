import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const MovieDetails = ({ route }) => {
  const { title, year, imageUrl } = route.params;
  const navigation = useNavigation();

  const handleBookNow = () => {
    navigation.navigate("BookingScreen", {
      movieTitle: title,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingStyle}>Movie Details</Text>
      <Image source={{ uri: imageUrl }} style={styles.poster} />
      <Text>Title: {title}</Text>
      <Text>Year: {year}</Text>

      <TouchableOpacity style={styles.bookNowButton} onPress={handleBookNow}>
        <Text style={styles.bookNowButtonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 50,
  },

  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  poster: {
    width: 300, // Adjust the width as needed
    height: 450, // Adjust the height as needed
    resizeMode: "cover",
    marginBottom: 10,
  },
  bookNowButton: {
    position: "absolute",
    bottom: 20,
    width: "80%", // Adjust the width as needed
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 10,
  },
  bookNowButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default MovieDetails;
