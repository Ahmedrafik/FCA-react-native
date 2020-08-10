import React, {Component} from 'react';
import {
  Dimensions,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import CryptoJS from "react-native-crypto-js";

import bgImage from '../../assets/images/background.png'
import Logo from "../../components/Logo";
import {saveUser} from "../../api/FCArsapi";
import Constants from "../../components/Constants"
import {required} from "../../components/Validation";


const {width: WIDTH } = Dimensions.get('window')

export default class RegisterPass extends Component{
  constructor(props) {
    super(props)
    this.state = {
      showPass: false,
      showConfirmPass: false,
      error: ""
    }
    this.userFca = this.props.route.params.userFca
  }

  validPage(){
    this.validPass()
    this.validConfirmPass()
    this.state.error === ""
        ? this.validUser(this.userFca)
        : null
  }

  validPass(){
    if(required(this.userFca.pass)) {
      this.setState({error: ""})
      this.confirmPassInput.focus()
    } else {
      this.setState({error: "Veuillez entrer un mot de passe."})
    }
  }

  validConfirmPass(){
    if(required(this.userFca.confirmPass)
        && CryptoJS.AES.decrypt(this.userFca.pass, Constants.EncryptKey).toString() === CryptoJS.AES.decrypt(this.userFca.confirmPass, Constants.EncryptKey).toString()) {
      this.setState({error: ""})
    } else {
      this.setState({error: "Veuillez entrer des mots de passe identique."})
    }
  }

  setPass(pass) {
    this.userFca.pass = CryptoJS.AES.encrypt(pass, Constants.EncryptKey).toString()
    console.log(this.userFca)
  }

  setConfirmPass(confirmPass) {
    this.userFca.confirmPass = CryptoJS.AES.encrypt(confirmPass, Constants.EncryptKey).toString()
    console.log(this.userFca)
  }

  validUser(userFca){
    saveUser(userFca)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({error: ''})
            this.props.navigation.navigate('RegisterValidation', responseJson)
            console.log('200 : ' + JSON.stringify(responseJson))
        })
        .catch((error) => {
          console.log("verifyAccess error : " + error)
          this.props.navigation.navigate('TechnicalDifficulties')
        });
  }


  render() {

    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
          <StatusBar hidden={true}/>
          <View style={styles.registerLogo}>
            <Logo/>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>Choisissez un mot de passe</Text>
            <View style={styles.inputContainer}>
              <Icon name={'ios-lock'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon}/>
              <TextInput
                  style={styles.input}
                  placeholder={'Mot de passe'}
                  placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                  underlineColorAndroid={'transparent'}
                  returnKeyType={'next'}
                  onSubmitEditing={() => this.validPass()}
                  onChangeText={ (text)=> this.setPass(text) }
                  secureTextEntry={!this.state.showPass}
              />

              <TouchableOpacity style={styles.btnEye}
                                onPress={ ()=> this.setState({showPass: !this.state.showPass})}>
                <Icon name={this.state.showPass ? 'ios-eye-off' : 'ios-eye'} size={26} color={'rgba(255, 255, 255, 0.7)'}/>
              </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
              <Icon name={'ios-lock'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon}/>
              <TextInput
                  style={styles.input}
                  placeholder={'Confirmation du mot de passe'}
                  placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                  underlineColorAndroid={'transparent'}
                  returnKeyType={'go'}
                  ref={(input) => this.confirmPassInput = input}
                  onSubmitEditing={() => this.validConfirmPass()}
                  onChangeText={ (text)=> this.setConfirmPass(text) }
                  secureTextEntry={!this.state.showConfirmPass}
              />

              <TouchableOpacity style={styles.btnEye}
                                onPress={ ()=> this.setState({showConfirmPass: !this.state.showConfirmPass})}>
                <Icon name={this.state.showConfirmPass ? 'ios-eye-off' : 'ios-eye'} size={26} color={'rgba(255, 255, 255, 0.7)'}/>
              </TouchableOpacity>
            </View>

            <Text style={styles.errorText}>{this.state.error}</Text>

          </View>

          <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.btnLogin} onPress={() => this.validPage()}>
              <Text style={styles.text}>Suivant</Text>
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
  },
  text1:{
    marginTop: 20,
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 18,
    marginBottom: 15
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
  errorText:{
    textAlign: 'center',
    color: 'red'
  },
  text:{
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center'
  }

});
