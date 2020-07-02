import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";
import { connect } from "react-redux";

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
          keyExtractor={(item) => item.title}
        />
      </View>
    );
  }
}

export default NewsFeed;
