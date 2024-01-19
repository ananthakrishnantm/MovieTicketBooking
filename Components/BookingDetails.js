import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BookingDetails = ({ route }) => {
  const { movieTitle, name, email, phone, seatNumber, ticketNumber } =
    route.params;
  const navigation = useNavigation();

  const handleHomePress = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingStyle}>Booking Details</Text>
      <Text>Movie: {movieTitle}</Text>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Phone: {phone}</Text>
      <Text>Seat Number: {seatNumber}</Text>
      <Text>Ticket Number: {ticketNumber}</Text>

      <TouchableOpacity style={styles.homeButton} onPress={handleHomePress}>
        <Text style={styles.homeButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  headingStyle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  homeButton: {
    marginTop: 20,
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 10,
  },
  homeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default BookingDetails;
