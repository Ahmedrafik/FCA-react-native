import React, {Component} from 'react';
import {Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import logo from '../assets/images/logo.png'
import organigram from '../assets/slideshow/organigramm.png'
import bfm from '../assets/slideshow/bfm.png'
import bottles from '../assets/slideshow/pastis.png'
import promenade from '../assets/slideshow/promenade.png'
import plusUn from '../assets/slideshow/plusUn.png'
import bgImage from "../assets/images/background.png";
import help from "../assets/button/help.png"

const windowDimensions = Dimensions.get("window");

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
          title:"Promenade",
          image: promenade,
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
    this.props.navigation.navigate(titlePage)
  }

  render() {
    console.log(this.userFca)
    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>

        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Bonjour {this.userFca.firstname}</Text>
            </View>
            <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logo}/>
            </View>
          </View>
          <View  style={styles.slideshowContainer}>
            <Carousel style={{flex: 1 , alignItems: 'center', justifyContent: 'center'}}
                layout={"default"}
                ref={ref => this.carousel = ref}
                data={this.state.carouselItems}
                sliderWidth={windowDimensions.width}
                itemWidth={windowDimensions.width}
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
  headerContainer: {
    flex: 1,
    paddingTop: 25,
    flexDirection: 'row',
    backgroundColor: '#eaeaa7'
  },
  slideshowContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slideshowImage: {
    resizeMode: 'contain',
    height: windowDimensions.height/3
  },
  helpContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  helpImage: {
    resizeMode: 'contain',
    height: windowDimensions.height/4
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