import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'

import { fetchSearchNews } from '../redux/actions'

import NewsFeed from '../components/NewsFeed'

class SearchNews extends Component {
  state = {
    search: '',
  }

  handleSelectNews = (News) => {
    this.props.navigation.push('News', News)
  }

  handleSearchChange = (value) => {
    this.setState({ search: value })
  }

  handleSubmit = () => {
    this.props.fetchSearchNews(this.state.search)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ paddingBottom: 10 }}>
          <Text style={styles.title}>Search</Text>
          <TextInput
            style={styles.input}
            onChangeText={this.handleSearchChange}
            onSubmitEditing={this.handleSubmit}
          />
        </View>
        <NewsFeed
          selectNews={this.handleSelectNews}
          dataNews={this.props.dataNews}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'black',
    flex: 1,
    paddingTop: 50,
  },
  input: {
    height: 35,
    borderColor: 'white',
    borderWidth: 2,
    color: 'black',
    backgroundColor: '#bbbdbf',
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    color: 'white',
    padding: 10,
  },
})

const mapStateToProps = (state) => ({
  err: state.error,
  dataNews: state.dataSearch,
  loading: state.loading,
})

export default connect(mapStateToProps, { fetchSearchNews })(SearchNews)
