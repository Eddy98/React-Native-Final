import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { color } from "react-native-reanimated";

export default function CategorySelect(props) {
    
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.categoryContainer} onPress={() => {props.route.params("Top Headlines")}}>
        <Text style={[styles.category, {color: 'white'}]}>Top Headlines</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryContainer} onPress={() => {props.route.params("Business")}}>
        <Text style={[styles.category, {color: 'red'}]}>Business</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryContainer} onPress={() => {props.route.params("Entertainment")}}>
        <Text style={[styles.category, {color: 'yellow'}]}>Entertainment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryContainer} onPress={() => {props.route.params("Health")}}>
        <Text style={[styles.category, {color: 'orange'}]}>Health</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryContainer} onPress={() => {props.route.params("Science")}}>
        <Text style={[styles.category, {color: 'green'}]}>Science</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryContainer} onPress={() => {props.route.params("Sports")}}>
        <Text style={[styles.category, {color: '#0390fc'}]}>Sports</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryContainer} onPress={() => {props.route.params("Technology")}}>
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
