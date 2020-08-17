import React, {Component} from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import bgImage from "../../assets/images/background.png";
import Header from "../common/Header";
import Constants from "../common/Constants"
import orgChart from "../../assets/slideshow/organigramm.png"


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

            <View style={styles.orgContainer}>
                <Image source={orgChart}/>
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
    orgContainer: {
        flex: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Organigramme