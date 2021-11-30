import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  View,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

const Movielist = ({ term , navigation }) => {
  const [moviedata, setMoviedata] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=" + term)
      .then((response) => response.json())
      .then((json) => setMoviedata(json))
      .catch((error) => console.error(error));
  }, []);
  // console.log(moviedata);

  return (
    <View style={styles.innerbackground}>
      <View style={styles.headingcontainer}>
        <Text style={styles.heading}>{term.toUpperCase()}</Text>
      </View>
      <ScrollView horizontal style={{ marginLeft: 2 }}>
        {/* {console.log(moviedata)} */}
        {moviedata.map((movie) => (
          <TouchableOpacity style={styles.touchableofmovie}
          onPress={()=> navigation.navigate('Details' , movie)}
        >
            <Image
              key={movie.show.id}
              style={styles.moviecard}
              source={{ uri: movie.show.image.original }}
            />
            <Text style={styles.moviename}>{movie.show.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Movielist;

const styles = StyleSheet.create({
  headingcontainer: {
    height: 30,
    width: "100%",
    marginBottom: 5,
    marginTop: 10,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 22,
    color: "white",
    marginLeft: 5,
    // marginTop:10,
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
    backgroundColor: "rgba(223,45,45,0.4)",
  },
  touchableofmovie: {
    height: 220,
    width: 110,
    borderRadius: 6,
    margin: 2,
    backgroundColor: "rgba(19,19,19,0.6)",
  },
  mainbackground: {
    backgroundColor: "rgba(0,0,0,0.9)",
    // marginLeft:2,
    flex: 1,
  },
  innerbackground: {
    // backgroundColor: "rgba(0,0,0,0.9)",
    marginBottom: 15,
  },
});
