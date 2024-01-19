import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import StaticCard from "./StaticCard";

const SearchResults = ({ route }) => {
  const { results } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => (
          <StaticCard
            key={styles.resultItem}
            title={item.Title}
            Year={item.Year}
            imageUrl={item.Poster}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  resultItem: {
    marginVertical: 10,
  },
});

export default SearchResults;
