import React, {Component} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

import technicalDifficulties from '../assets/images/technicalDifficulties.png'

export default class TechnicalDifficulties extends Component{

  render() {
    return (
        <View style={styles.container}>
          <ImageBackground source={technicalDifficulties} style={styles.backgroundContainer} imageStyle={styles.image}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#70aec7',
  },
  backgroundContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    resizeMode : 'contain'
  }
});

