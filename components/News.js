import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function News(props) {


  return (
    <TouchableOpacity style={styles.container} onPress={() => props.selectNews(props)}>
      <Text style={styles.title}>{props.data.title}</Text>
      <Image
        style={styles.newsImage}
        source={{
          uri: props.data.urlToImage,
        }}
      />
      <Text style={{fontSize: 18, fontFamily: 'American Typewriter', color: 'white', paddingTop: 10}}>{props.data.source.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 30
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Cochin",
    color: 'white'
  },
  newsImage: {
    width: "100%",
    height: 250,
    marginTop: 14,
  },
  description: {
    fontSize: 18,
    marginTop: 14,
    color: 'white'
  },
  
});
