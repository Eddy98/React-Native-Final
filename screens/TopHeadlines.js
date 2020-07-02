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
      headerTitle: (props) => <Header title={"Top Headlines"}/>,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.category !== this.state.category) {
      this.props.navigation.setOptions({ headerTitle: (props) => <Header title={this.state.category}/> })
      if (this.state.category !== "Top Headlines")
        this._fetchNewsCategory(this.state.category);
      else this._fetchNews();
    }
  }

  _fetchNewsCategory = async (cat) => {
    this.props.fetchNewsCategory(cat);
  };

  _fetchNews = async () => {
    this.props.fetchHeadlines();
  };

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
        <NewsFeed selectNews={this.handleSelectNews} dataNews={this.props.dataNews}/>
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
  titleText: {
    fontSize: 29,
    fontWeight: "bold",
    color: "#0390fc",
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

function Header({title}) {
  return (
    <View>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
}
