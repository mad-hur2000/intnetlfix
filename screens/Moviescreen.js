import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import Movielist from "./Movielist";

const Moviescreen = ({navigation}) => {
  return (
    <ScrollView style={styles.mainbackground}>
      <Movielist term="all" navigation={navigation} />
      <Movielist term="marvel" navigation={navigation}/>
      <Movielist term="some" navigation={navigation} />
    </ScrollView>
  );
};

export default Moviescreen;

const styles = StyleSheet.create({
  mainbackground: {
    backgroundColor: "rgba(0,0,0,0.9)",

    flex: 1,
  },
});
