import React, { useEffect, useState } from "react";
import axios from "axios";
import StaticCard from "./StaticCard";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LatestMovies = () => {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const response = await axios.get(
          "http://www.omdbapi.com/?s=movie&apikey=9fb68997"
        );
        if (response.data.Search) {
          setMovies(response.data.Search);
        }
      } catch (error) {
        console.error("Error fetching movies data:", error);
      }
    };

    fetchMoviesData();
  }, []);

  return (
    <FlatList
      data={movies}
      keyExtractor={(movie) => movie.imdbID}
      renderItem={({ item: movie }) => (
        <StaticCard
          key={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          imageUrl={movie.Poster}
          navigation={navigation}
        />
      )}
    />
  );
};

export default LatestMovies;
