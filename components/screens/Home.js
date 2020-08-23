import React, {Component} from 'react';
import {Image, ImageBackground, StyleSheet, TouchableOpacity, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import Header from '../common/Header'
import organigram from '../../assets/slideshow/organigramm.png'
import bfm from '../../assets/slideshow/bfm.png'
import bottles from '../../assets/slideshow/pastis.png'
import plusUn from '../../assets/slideshow/plusUn.png'
import bgImage from "../../assets/images/background.png";
import help from "../../assets/button/help.png"
import Constants from "../common/Constants"

class Home extends Component{
  constructor(props) {
    super(props)
    this.state = {
      activeIndex:0,
      carouselItems: [
        {
          title:"Organigramme",
          image: organigram,
        },
        {
          title:"Bfm",
          image: bfm,
        },
        {
          title:"Bottles",
          image: bottles,
        },
        {
          title:"PlusUn",
          image: plusUn,
        },
      ]
    }
    this.userFca = this.props.route.params.userFca
  }

  _renderItem({item}){
    return (
        <View style={{
          alignItems: 'center',
          borderRadius: 5,
          padding: 50,
          marginLeft: 25,
          marginRight: 25, }}>
          <TouchableOpacity activeOpacity = { .5 } onPress={() => this.goOnPage(item.title)}>
            <Image source={item.image} style={styles.slideshowImage}/>
          </TouchableOpacity>
        </View>

    )
  }

  goOnPage(titlePage) {
    console.log("Go on page " + titlePage)
    this.props.navigation.navigate(titlePage, {userFca : this.userFca})
  }

  render() {
    console.log(this.userFca)
    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.container}>
          <Header title={'Bonjour ' + this.userFca.firstname}/>

          <View  style={styles.slideshowContainer}>
            <Carousel style={{flex: 1 , alignItems: 'center', justifyContent: 'center'}}
                layout={"default"}
                ref={ref => this.carousel = ref}
                data={this.state.carouselItems}
                sliderWidth={Constants.windowDimensions.width}
                itemWidth={Constants.windowDimensions.width}
                renderItem={this._renderItem.bind(this)}
                onSnapToItem = { index => this.setState({activeIndex:index}) } />
          </View>
          <View style={styles.helpContainer}>
            <TouchableOpacity activeOpacity = { .5 } onPress={() => this.goOnPage('toto')}>
              <Image source={help} style={styles.helpImage}/>
            </TouchableOpacity>
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
  },
  slideshowContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slideshowImage: {
    resizeMode: 'contain',
    height: Constants.windowDimensions.height/3
  },
  helpContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  helpImage: {
    resizeMode: 'contain',
    height: Constants.windowDimensions.height/4
  }
});

export default Home