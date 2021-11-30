import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
// import { htmlToText } from "html-to-text";
// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
// import parse from 'html-react-parser';
import HTML from "react-native-render-html";
// import WebView from "react-native-webview";

const tagstyles = {
  body: {
    color: "white",
  },
  p: {
    color: "white",
  },
};

const Detailscreen = ({ route, navigation }) => {
  const movie = route.params;

  return (
    <ScrollView style={styles.mainbackground}>
     
      <Image
        style={styles.movieimage}
        source={{ uri: movie.show.image.original }}
      />
      <Text style={styles.moviename}>{movie.show.name}</Text>
      <View style={styles.aboutmoviecontainer}>
        <Text style={styles.rating}>Rating {movie.show.rating.average}</Text>
        {console.log(movie.show.geners)}
        <Text style={styles.languagetext}> {movie.show.language}</Text>
        <Text style={styles.languagetext}>Runtime: {movie.show.runtime}</Text>
      </View>
      <TouchableOpacity style={styles.playanddownload}>
        <Text style={styles.buttontext}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.playanddownload}>
        <Text style={styles.buttontext}>Download</Text>
      </TouchableOpacity>
      <View style={styles.summary}>
        <HTML
          tagsStyles={tagstyles}
          source={{ html: movie.show.summary }}
          contentWidth={300}
        />
      </View>
      <Text style={styles.episodesheading}>Related Episodes</Text>
      <View style={styles.episodecontainer}>
        <TouchableOpacity style={styles.episode}
        // onPress={() => navigation.navigate('Details', movie)}
        >
          <Text style={styles.episodetext}> Previous Episode </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.episode}>
          <Text style={styles.episodetext}> Next Episode </Text>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  );
};

export default Detailscreen;

const styles = StyleSheet.create({
  episodetext:{
    color:'white'
  },
  episode:{
    borderRadius:4,
    margin:5,
    backgroundColor:'rgba(60,60,60,0.8)'
  },
  episodecontainer: {
    flexDirection: "row",
  },
  episodesheading: {
    marginLeft: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  summary: {
    justifyContent: "center",
    width: "95%",
    marginHorizontal: 5,
  },

  buttontext: {
    alignSelf: "center",
    fontWeight: "bold",
  },
  playanddownload: {
    width: "100%",
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    margin: 2,
    color: "white",
    backgroundColor: "white",
  },
  languagetext: {
    flex: 2,
    color: "rgba(255,255,255,1)",
    fontSize: 14,
  },
  aboutmoviecontainer: {
    flexDirection: "row",
    width: "100%",
    margin: 3,
  },
  rating: {
    flex: 1,
    color: "rgba(20,224,23,1)",
    fontWeight: "bold",
  },
  movieimage: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
  },
  moviename: {
    marginTop: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 23,
  },
  mainbackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.9)",
  },
});
