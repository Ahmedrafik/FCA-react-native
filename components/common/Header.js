import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import logo from '../../assets/images/logo.png'


export default class Header extends Component{
  constructor(props) {
    super(props);

  }
  render() {

    return (
          <View style={styles.headerContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{this.props.title}</Text>
            </View>
            <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logo}/>
            </View>
          </View>
            );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    paddingTop: 25,
    flexDirection: 'row',
    backgroundColor: '#eaeaa7'
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
