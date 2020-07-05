import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text} from 'react-native';

import bgImage from '../assets/images/background.png'


class Home extends Component{
  constructor(props) {
    super(props)
  }

  render() {

    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
          <Text style={styles.text}>Welcome to the Home page {this.props.route.params.firstname}</Text>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color : 'white',
    fontSize: 20,
    fontWeight : '500',
    marginTop : 10,
    opacity : 0.5
  }
});

export default Home