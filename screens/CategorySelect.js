import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { color } from "react-native-reanimated";

export default function CategorySelect(props) {
    
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.categoryContainer} onPress={() => {props.route.params("")}}>
        <Text style={[styles.category, {color: 'white'}]}>Top Headlines</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryContainer} onPress={() => {props.route.params("business")}}>
        <Text style={[styles.category, {color: 'red'}]}>Business</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryContainer} onPress={() => {props.route.params("entertainment")}}>
        <Text style={[styles.category, {color: 'yellow'}]}>Entertainment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryContainer} onPress={() => {props.route.params("health")}}>
        <Text style={[styles.category, {color: 'orange'}]}>Health</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryContainer} onPress={() => {props.route.params("science")}}>
        <Text style={[styles.category, {color: 'green'}]}>Science</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryContainer} onPress={() => {props.route.params("sports")}}>
        <Text style={[styles.category, {color: '#0390fc'}]}>Sports</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryContainer} onPress={() => {props.route.params("technology")}}>
        <Text style={[styles.category, {color: '#9990fc'}]}>Technology</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  category: {
    fontSize: 28,
  },
  categoryContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  container: {
    padding: 18,
    flex: 1,
    backgroundColor: "black",
  },
});
