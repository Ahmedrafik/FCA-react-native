import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Bfm extends Component{

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Bonjour Captain, bienvenue sur Bfm</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default Bfm