import React, { Component } from 'react'
import { ScrollView, Text, Image, StyleSheet } from 'react-native'

export default class NewsPage extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: this.props.route.params.data.urlToImage }}
        />
        <Text style={styles.title}>{this.props.route.params.data.title}</Text>
        <Text style={styles.content}>
          {this.props.route.params.data.content}
        </Text>
        <Text style={styles.source}>
          {this.props.route.params.data.source.name}
        </Text>
        <Text style={styles.author}>{this.props.route.params.data.author}</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  container: {
    padding: 18,
    backgroundColor: 'black',
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    color: 'white',
    paddingTop: 10,
  },
  content: {
    color: 'white',
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 13,
  },
  source: {
    fontSize: 18,
    fontFamily: 'American Typewriter',
    color: 'white',
    paddingTop: 10,
  },
  author: {
    fontSize: 16,
    fontFamily: 'American Typewriter',
    color: 'white',
    paddingTop: 10,
    marginBottom: 70,
  },
})
