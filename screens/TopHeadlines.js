import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Icon } from "react-native-elements";

import { fetchHeadlines, fetchNewsCategory } from "../redux/actions";

import NewsFeed from "../components/NewsFeed";

class TopHeadlines extends Component {
  state = {
    category: "",
  };

  handleSelectNews = (News) => {
    this.props.navigation.push("News", News);
  };

  handleSelectCategory = (cat) => {
    this.setState({ category: cat });
    this.props.navigation.goBack();
  };

  componentDidMount() {
    this._fetchNews();

    this.props.navigation.setOptions({
      headerRight: () => (
        <View>
          <Icon
            name="dns"
            reverse
            style={{ margin: -4 }}
            onPress={() => {
              this.props.navigation.push("Category", this.handleSelectCategory);
            }}
          />
        </View>
      ),
    });
  }

  _fetchNewsCategory = async (cat) => {
    this.props.fetchNewsCategory(cat);
  };

  _fetchNews = async () => {
    this.props.fetchHeadlines();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.category !== this.state.category) {
      if (this.state.category !== "")
        this._fetchNewsCategory(this.state.category);
      else this._fetchNews();
    }
  }

  render() {
    if (this.props.loading) {
      return (
        <View style={styles.container}>
          <Text>Loading</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <NewsFeed selectNews={this.handleSelectNews} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "black",
    flex: 1
  },
});

//14e6d07b4041489095417aaca58cdd5e

const mapStateToProps = (state) => ({
  err: state.error,
  dataNews: state.data,
  loading: state.loading,
});

export default connect(mapStateToProps, { fetchHeadlines, fetchNewsCategory })(
  TopHeadlines
);
