import React, {Component} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

import moment from "moment";
import Constants from "./Constants";
import DateTimePicker from "@react-native-community/datetimepicker";

export default class DatePicker extends Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            showDatePicker:false
        }

    }

    onChange = (event, selectedDate) => {
        console.log('date = ' + selectedDate)
        console.log("curentdate1 : " + this.state.date)
        const currentDate = selectedDate || this.state.date;
        this.setState({date:currentDate,showDatePicker:!this.state.showDatePicker});
        this.props.bill.date = moment(this.state.date).format('DD/MM/YYYY')
        console.log("bills : " + this.props.bill.date)
        console.log("curentdate : " + this.state.date)
    };

    render() {

        return (
            <View style={styles.inputContainer}>

                <TextInput
                    style={styles.input}
                    placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                    underlineColorAndroid={'transparent'}
                    returnKeyType={'go'}
                    value={moment(this.state.date).format('DD-MM-YYYY')}
                    onChangeText={ (text)=> this.setState({date:text}) }
                />
                <TouchableOpacity style={styles.inputIcon}
                                  onPress={ ()=> this.setState({showDatePicker: !this.state.showDatePicker})}>
                    <Icon name={'ios-calendar'} size={26} color={'rgba(255, 255, 255, 0.7)'}/>
                </TouchableOpacity>

                {this.state.showDatePicker ?
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={this.state.date}
                        mode={'date'}
                        is24Hour={true}
                        display="default"
                        onChange={this.onChange}
                    />
                    : <View/>

                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    }
});

