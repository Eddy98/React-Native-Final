import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";

import News from "./News";

class NewsFeed extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={this.props.dataNews}
          renderItem={({ item }) => (
            <News data={item} selectNews={this.props.selectNews} />
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

export default NewsFeed;
