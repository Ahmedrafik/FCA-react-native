import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import logo from '../assets/images/logo.png'

class Home extends Component{
  constructor(props) {
    super(props)
  }

  render() {

    return (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Bonjour Captain</Text>
            </View>
            <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logo}/>
            </View>
          </View>
          <View style={styles.slideshowContainer}>

          </View>
          <View style={styles.helpContainer}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    flex: 1,
    paddingTop: 25,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  slideshowContainer: {
    flex: 5,
    backgroundColor: 'green'
  },
  helpContainer: {
    flex: 3,
    backgroundColor: 'blue'
  },
  titleContainer:{
    flex: 3,
    alignItems: 'flex-start',
    justifyContent:'center'
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  logoContainer:{
    flex: 1,
    alignItems: 'flex-end',
    justifyContent:'center'
  },
  logo:{
    width: 40,
    height: 40
  }
});

export default Home