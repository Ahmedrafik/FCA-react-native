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

import bgImage from '../../../assets/images/background.png'
import Logo from "../../common/Logo";

import {required} from "../../common/Validation"

const {width: WIDTH } = Dimensions.get('window')

export default class RegisterLogin extends Component{
  constructor(props) {
    super(props)
    this.state = {
      error: ''
    }
    this.userFca = this.props.route.params.userFca
  }

  validPage(){
    this.validLogin()
    this.state.error === ""
        ? this.props.navigation.navigate('RegisterPass', {userFca : this.userFca})
        : null
  }

  validLogin(){
    required(this.userFca.login)
        ? this.setState({error: ""})
        : this.setState({error: "Veuillez entrer nom d'utilisateur."})
  }


  setLogin(login) {
    this.userFca.login = login
    console.log(this.userFca)
  }

  render() {

    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
          <StatusBar hidden={true}/>
          <View style={styles.registerLogo}>
            <Logo/>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text1}>Choisissez un nom d'utilisateur </Text>
            <View style={styles.inputContainer}>
              <Icon name={'ios-person'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon}/>
              <TextInput
                  style={styles.input}
                  placeholder={'Login'}
                  placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                  underlineColorAndroid={'transparent'}
                  onSubmitEditing={() => this.validLogin()}
                  onChangeText={ (text)=> this.setLogin(text) }
              />
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
  errorText:{
    textAlign: 'center',
    color: 'red'
  }

});
