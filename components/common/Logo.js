import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import logo from '../../assets/images/logo.png'


class Logo extends Component{
  render() {

    return (
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo}/>
            <Text style={styles.logoText}>Fuzy Club Apero</Text>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width:120,
    height:120
  },
  logoText: {
    color : 'white',
    fontSize: 20,
    fontWeight : '500',
    marginTop : 10,
    opacity : 0.5
  }
});

export default Logo