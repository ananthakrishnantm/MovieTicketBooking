import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const StaticCard = ({ title, year, imageUrl }) => {
  const navigation = useNavigation();
  const handleDetailsPress = () => {
    navigation.navigate("MovieDetails", {
      title,
      year,
      imageUrl,
      // Add additional details as needed
    });
    console.log("Details button pressed");
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>Year: {year}</Text>
        {/* Additional details can be added here */}
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.poster}
          source={{ uri: imageUrl }}
          resizeMode="cover"
        />
      </View>
      <TouchableOpacity
        style={styles.detailsButton}
        onPress={handleDetailsPress}
      >
        <Text style={styles.detailsButtonText}>Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    margin: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  imageContainer: {
    width: 100,
    height: 150,
    overflow: "hidden",
  },
  poster: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  detailsButton: {
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3498db",
  },
  detailsButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default StaticCard;
