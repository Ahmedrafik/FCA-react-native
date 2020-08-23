import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import bgImage from "../../../assets/images/background.png";
import Header from "../../common/Header";
import Constants from "../../common/Constants";
import Icon from "react-native-vector-icons/Ionicons";
import {saveBill} from "../../../utils/FCArsapi/billApi";
import DatePicker from "../../common/DatePicker"

export default class Bottles extends Component{
  constructor(props) {
    super(props);
    this.userFca = this.props.route.params.userFca
    this.bill = {}
  }


  saveBill() {

    saveBill(this.bill)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({error: ''})
          this.props.navigation.navigate('Home', {userFca : this.userFca})
        })
        .catch((error) => {
          this.props.navigation.navigate('TechnicalDifficulties')
        });
  }

  render() {
    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
          <View style={styles.container}>
            <Header title={'Ajouter une note'}/>

            <View style={styles.formContainer}>
              <Text style={styles.text1}>Qui a payé la note ? </Text>
              <View style={styles.inputContainer}>
                <Icon name={'ios-person'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon}/>
                <TextInput
                    style={styles.input}
                    placeholder={'Login'}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underlineColorAndroid={'transparent'}
                    returnKeyType={'next'}
                    onSubmitEditing={() => this.quantityInput.focus()}
                    onChangeText={ (text)=> this.bill.payer=text }
                />
              </View>

              <Text style={styles.text1}>Pour quel montant ? </Text>
              <View style={styles.inputContainer}>
                <Icon name={'ios-beer'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon}/>
                <TextInput
                    style={styles.input}
                    placeholder={'xxxx'}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underlineColorAndroid={'transparent'}
                    returnKeyType={'next'}
                    ref={(input) => this.quantityInput = input}
                    onChangeText={ (text)=> this.bill.amount=text }
                />
              </View>

              <Text style={styles.text1}>A quelle date ?</Text>

              <DatePicker bill={this.bill} />


              <TouchableOpacity style={styles.btnSubmit} onPress={() => this.saveBill()}>
                <Text style={styles.text}>Enregistrer</Text>
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
    width: Constants.windowDimensions.width
  },
  formContainer: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    width: 40,
    height: 40
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
  text1:{
    marginTop: 20,
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 18,
    marginBottom: 15
  },
  btnSubmit:{
    width: Constants.windowDimensions.width - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    backgroundColor: "#432577",
    justifyContent: 'center',
    marginTop: 30
  },
  text:{
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center'
  }
});


