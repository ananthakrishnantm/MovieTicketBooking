// BookingScreen.js

import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Toast from "react-native-toast-message";

const BookingScreen = ({ route }) => {
  const { movieTitle } = route.params;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();

  const handleBookNow = () => {
    // Perform booking logic here
    const seatNumber = generateRandomSeatNumber();

    // Display toast with confirmation message
    Toast.show({
      type: "success",
      text1: "Booking Confirmed",
      text2: `Your seat number: ${seatNumber}`,
    });

    // For simplicity, log the details to the console
    console.log("Booking Details:", {
      movieTitle,
      name,
      email,
      phone,
      seatNumber,
    });

    // Navigate to the details page with the entered details
    navigation.navigate("BookingDetails", {
      movieTitle,
      name,
      email,
      phone,
      seatNumber,
      ticketNumber: generateRandomTicketNumber(), // Add a random ticket number
    });
  };

  const generateRandomSeatNumber = () => {
    // Generate a random seat number
    return Math.floor(Math.random() * 100) + 1;
  };
  const generateRandomTicketNumber = () => {
    // Generate a random ticket number
    return Math.floor(Math.random() * 1000) + 1;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingStyle}>Booking Details</Text>
      <Text>Movie: {movieTitle}</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={(text) => setPhone(text)}
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={styles.bookNowButton} onPress={handleBookNow}>
        <Text style={styles.bookNowButtonText}>Confirm Booking</Text>
      </TouchableOpacity>

      <Toast ref={(ref) => Toast.setRef(ref)} />
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
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "80%",
  },
  bookNowButton: {
    width: "80%",
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

export default BookingScreen;
