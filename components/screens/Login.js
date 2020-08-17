import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

import bgImage from '../../assets/images/background.png'

import Logo from '../common/Logo'
import {getUserByLogin} from '../../utils/FCArsapi'
import Constants from '../common/Constants'
import CryptoJS from "react-native-crypto-js";
import {required} from "../common/Validation";

export default class Login extends Component{
  constructor(props) {
    super(props)
    this.login = ""
    this.pass =  ""
    this.state = {
      errorLogin:"",
      showPass: false,
      error: ""
    }
  }

  checkLogin(){
   getUserByLogin(this.login, this.pass)
       .then((response) => response.json())
       .then((responseJson) => {
         if(responseJson.status === Constants.HTTPStatus.NOTFOUND
         || CryptoJS.AES.decrypt(this.pass, Constants.EncryptKey).toString() !== CryptoJS.AES.decrypt(responseJson.pass, Constants.EncryptKey).toString()){
           this.setState({error: 'Le login/pass entré ne correspondent à aucun utilisateur validé.'})
         }else{
           this.setState({error: ''})
           this.props.navigation.navigate('Home', {userFca : responseJson})
         }
       })
       .catch((error) => {
         console.log("verifyAccess error : " + error)
         this.props.navigation.navigate('TechnicalDifficulties')
       });
  }

  validLogin(){
    if(required(this.login)) {
      this.setState({errorLogin: ""})
      this.passInput.focus()
    } else {
      this.setState({errorLogin: "Veuillez entrer votre nom d'utilisateur."})
    }
  }

  validPass(){
    required(this.pass)
        ? this.setState({error: ""})
        : this.setState({error: "Veuillez entrer votre mot de passe."})
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
                returnKeyType={'next'}
                onSubmitEditing={() => this.validLogin()}
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
                returnKeyType={'go'}
                ref={(input) => this.passInput = input}
                onSubmitEditing={() => this.validPass()}
                onChangeText={ (text)=> this.pass=CryptoJS.AES.encrypt(text, Constants.EncryptKey).toString() }
                secureTextEntry={!this.state.showPass}
            />
            <TouchableOpacity style={styles.btnEye}
                              onPress={ ()=> this.setState({showPass: !this.state.showPass})}>
              <Icon name={this.state.showPass ? 'ios-eye-off' : 'ios-eye'} size={26} color={'rgba(255, 255, 255, 0.7)'}/>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.btnLogin} onPress={() => this.checkLogin()}>
            <Text style={styles.text}>Connexion</Text>
          </TouchableOpacity>

          <Text style={styles.errorText}>{this.state.error}</Text>

          <Text style={styles.registerText} onPress={() => this.props.navigation.push('RegisterHome')}>
            Toujours pas inscrit au FCA, fait ta demande ici
          </Text>
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
    width: Constants.windowDimensions.width - 55,
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
    width: Constants.windowDimensions.width - 55,
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
  errorText:{
    textAlign: 'center',
    color: 'red'
  },
  registerText: {
    color : 'white',
    fontSize: 16,
    fontWeight : '500',
    marginTop : 10,
    opacity : 0.5
  }

});