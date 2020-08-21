import React, {Component} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import bgImage from "../../../assets/images/background.png";
import Header from "../../common/Header";
import Constants from "../../common/Constants";

export default class Bottles extends Component{
  constructor(props) {
    super(props);
    this.userFca = this.props.route.params.userFca
  }

  addBill() {
    this.props.navigation.navigate('addBill', {userFca : this.userFca})
  }

  render() {
    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
          <View style={styles.container}>
            <Header title={'Ajouter une bouteille'}/>

            <View>

            </View>
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
    width: Constants.windowDimensions.width
  },
  chartContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  chartHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: 10
  },
  chartHeaderTitleContainer:{
    flex: 3,
    alignItems: 'flex-start',
    justifyContent:'center'
  },
  chartTitle:{
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  },
  addchartContainer:{
    flex: 1,
    alignItems: 'flex-end',
    justifyContent:'center'
  },
  logo:{
    width: 40,
    height: 40
  },
  pieChart:{
    flex:9
  }
});


