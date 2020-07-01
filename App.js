import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import TopHeadlines from "./screens/TopHeadlines";
import NewsPage from "./screens/NewsPage";
import CategoryPage from "./screens/CategorySelect";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//circledowno
function App() {
  const [category, setCategory] = useState("");

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="Home"
            options={{
              headerTitle: (props) => <Header />,
            }}
          >
            {(props) => <TopHeadlines {...props} category={category} />}
          </Stack.Screen>
          <Stack.Screen name="News" component={NewsPage} />
          <Stack.Screen name="Category" component={CategoryPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

function Header() {
  return (
    <View>
      <Text style={styles.titleText}>{"Top Headlines"}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 40,
  },
  titleText: {
    fontSize: 29,
    fontWeight: "bold",
    color: "#0390fc",
  },
});

export default App;
