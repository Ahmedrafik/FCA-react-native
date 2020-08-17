import React, {Component} from 'react';
import {Dimensions, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import bgImage from '../../../assets/images/background.png'
import Logo from "../../common/Logo";

const {width: WIDTH } = Dimensions.get('window')

export default class RegisterValidation extends Component{
  constructor(props) {
    super(props)
    this.state = {
      showPass: false,
      showConfirmPass: false,
    }
    this.userFca = this.props.route.params.userFca
  }

  render() {

    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
          <StatusBar hidden={true}/>
          <View style={styles.registerLogo}>
            <Logo/>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>Votre demande a été prise en compte </Text>
            <Text style={styles.text1}>Vous recevrez un email dès qu'elle sera traiter par l'administrateur du FCA</Text>
          </View>

          <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.btnLogin} onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.text}>Retourner à l'authentification</Text>
            </TouchableOpacity>
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
    justifyContent:'center'
  },
  text1:{
    marginTop: 20,
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center'
  },
  inputContainer:{
    marginTop: 10
  },
  input:{
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25
  },
  inputIcon:{
    position: 'absolute',
    top: 8,
    left: 37
  },
  btnEye:{
    position: 'absolute',
    top: 8,
    right: 37
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
  }

});
