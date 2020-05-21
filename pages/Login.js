import React, {Component} from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

import bgImage from '../assets/images/background.png'

import Logo from '../components/Logo'

const {width: WIDTH } = Dimensions.get('window')

class Login extends Component{
  constructor(props) {
    super(props)
    this.login = ""
    this.pass =  ""
    this.state = {
      showPass: false
    }
  }

  log(){
    console.log("login = " + this.login)
    console.log("password = " + this.pass)
  }


  render() {

    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
         <Logo/>
          <View style={styles.inputContainer}>
            <Icon name={'ios-person'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon}/>
            <TextInput
                style={styles.input}
                placeholder={'E-mail / Login'}
                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                underlineColorAndroid={'transparent'}
                onChangeText={ (text)=> this.login=text }
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon name={'ios-lock'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon}/>
            <TextInput
                style={styles.input}
                placeholder={'Mot de passe'}
                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                underlineColorAndroid={'transparent'}
                onChangeText={ (text)=> this.pass=text }
                secureTextEntry={!this.state.showPass}
            />
            <TouchableOpacity style={styles.btnEye}
                              onPress={ ()=> this.setState({showPass: !this.state.showPass})}>
              <Icon name={this.state.showPass ? 'ios-eye-off' : 'ios-eye'} size={26} color={'rgba(255, 255, 255, 0.7)'}/>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.btnLogin} onPress={() => this.log()}>
            <Text style={styles.text}>Connexion</Text>
          </TouchableOpacity>

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
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50
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

export default Login