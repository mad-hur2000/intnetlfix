import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const Searchscreen = ({ navigation }) => {
  const [search, setSearch] = useState("");

  const [term, setTerm] = useState("");

  const Onsearch = (term) => {
    setTerm(term);
  };
  const [moviedata, setMoviedata] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=" + term)
      .then((response) => response.json())
      .then((json) => setMoviedata(json))
      .catch((error) => console.error(error));
  }, [term]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="md-arrow-back"
          color="tomato"
          size={32}
          onPress={() => navigation.goBack()}
        />
        <TextInput
          value={search}
          style={styles.input}
          onChangeText={(text) => setSearch(text)}
        ></TextInput>
        <TouchableOpacity>
          <Ionicons
            name="md-search"
            size={32}
            color="tomato"
            onPress={() => Onsearch(search)}
          />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {moviedata.map((movie) => (
            <TouchableOpacity
              style={styles.touchableofmovie}
              onPress={() => navigation.navigate("Details", movie)}
            >
              <Image
                key={movie.show.id}
                style={styles.moviecard}
                source={{ uri: movie.show.image.original }}
              />
              <Text style={styles.moviename}>{movie.show.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Searchscreen;

const styles = StyleSheet.create({
  results: {
    height: 100,
    width: "100%",
    backgroundColor: "rgba(22,44,55,0.6)",
  },
  input: {
    marginLeft: 20,
    width: "70%",
    borderBottomWidth: 0.5,
    fontSize: 18,
    borderBottomColor: "tomato",
    color: "white",
  },
  header: {
    justifyContent: "space-around",

    //   justifyContent:'center',
    alignItems: "center",
    // backgroundColor: "rgba(22,44,55,0.5)",
    marginTop: 5,
    height: 54,
    borderRadius: 5,
    width: "100%",
    flexDirection: "row",
  },
  container: {
    marginTop: 30,
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.9)",
  },
  moviename: {
    width: "100%",
    alignSelf: "flex-start",
    marginLeft: 5,
    fontWeight: "bold",
    color: "white",
  },
  moviecard: {
    height: 170,
    width: 110,
    borderRadius: 6,
    // margin: 2,
    backgroundColor: "rgba(223,45,45,0.9)",
  },
  touchableofmovie: {
    height: 220,
    width: 110,
    borderRadius: 6,
    margin: 2,
    backgroundColor: "rgba(19,19,19,0.6)",
  },
});
