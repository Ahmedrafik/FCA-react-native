import React, {Component} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import bgImage from "../../assets/images/background.png";
import Header from "../common/Header";

class Organigramme extends Component{
  constructor(props) {
    super(props);
    this.userFca = this.props.route.params.userFca
   }
  render() {
    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
          <View style={styles.container}>
            <Header title={'Organigramme'}/>


          </View>
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
  container: {
    flex: 1,
  }
});

export default Organigramme