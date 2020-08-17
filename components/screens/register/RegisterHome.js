import React, {Component} from 'react';
import {Dimensions, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import bgImage from '../../../assets/images/background.png'
import Logo from "../../common/Logo";

const {width: WIDTH } = Dimensions.get('window')

export default class RegisterHome extends Component{
  constructor(props) {
    super(props)
    this.state = {
      showPass: false,
      showConfirmPass: false,
    }
    this.userFca = {
      lastname: "",
      firstname: "",
      login: "",
      email: "",
      pass: "",
      confirmPass: ""
    }
  }

  render() {

    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
          <StatusBar hidden={true}/>
          <View style={styles.registerLogo}>
            <Logo/>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>Demandez à rejoindre le FCA</Text>
            <Text  style={styles.text2}>Nous vous aiderons à créer un compte en quelques étapes</Text>
          </View>

          <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.btnLogin} onPress={() => this.props.navigation.push('RegisterName')}>
              <Text style={styles.text}>Suivant</Text>
            </TouchableOpacity>

            <Text style={styles.registerText} onPress={() => this.props.navigation.push('Login')}>
              Vous avez déjà un compte ?
            </Text>
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
  registerLogo:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer:{
    flex: 2,
    alignItems: 'center',
  },
  text1:{
    marginTop: 20,
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 18,
    marginBottom: 15
  },
  text2:{
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 15
  },
  footerContainer:{
    flex: 2,
    alignItems: 'center',
  },
  btnLogin:{
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    backgroundColor: "#432577",
    justifyContent: 'center',
    marginTop: 20
  },
  text:{
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center'
  },
  registerText: {
    color : 'white',
    fontSize: 16,
    fontWeight : '500',
    marginTop : 10,
    opacity : 0.7
  }

});