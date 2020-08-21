import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {PieChart, StackedBarChart} from "react-native-chart-kit";
import bgImage from "../../../assets/images/background.png";
import Header from "../../common/Header";
import Constants from "../../common/Constants";
import Icon from "react-native-vector-icons/Ionicons";

import {getBottleBills, getPromBills} from "../../../utils/FCArsapi/billApi"

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0,
  color: 'white',
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

export default class Bottles extends Component{
  constructor(props) {
    super(props);
    this.state = {
      bottlesData: [],
      promData: {
        labels: [],
        data: [],
        barColors: []
      }
    }
    this.userFca = this.props.route.params.userFca
  }

  componentDidMount() {
    this.loadBottles()
    this.loadPromBills()
  }

  loadBottles() {
    getBottleBills()
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({bottlesData: responseJson})
        })
        .catch(() => {
          this.props.navigation.navigate('TechnicalDifficulties')
        });
  }

  loadPromBills() {
    getPromBills()
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({promData: responseJson})
        })
        .catch(() => {
          this.props.navigation.navigate('TechnicalDifficulties')
        });
  }

  render() {
    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
          <View style={styles.container}>
            <Header title={'Pastis un jour, Pastis ...'}/>

            <View style={styles.chartContainer}>
              <View style={styles.chartHeaderContainer}>
                <View style={styles.chartHeaderTitleContainer}>
                  <Text style={styles.chartTitle}> Bouteilles </Text>
                </View>
                <TouchableOpacity style={styles.addchartContainer}
                                  onPress={ ()=> this.props.navigation.navigate('addBottle', {userFca : this.userFca})}>
                  <Icon name={'ios-add-circle'} size={26} color={'rgba(255, 255, 255, 0.7)'} />
                </TouchableOpacity>
              </View>

              <PieChart
                  data={this.state.bottlesData}
                  width={Constants.windowDimensions.width}
                  height={220}
                  chartConfig={chartConfig}
                  accessor="quantity"
                  backgroundColor="transparent"
                  paddingLeft="15"
                  absolute
                  style={styles.pieChart}
              />
            </View>

            <View style={styles.chartContainer}>
              <View style={styles.chartHeaderContainer}>
                <View style={styles.chartHeaderTitleContainer}>
                  <Text style={styles.chartTitle}> Promenade </Text>
                </View>
                <TouchableOpacity style={styles.addchartContainer}
                                  onPress={ ()=> this.props.navigation.navigate('addBill', {userFca : this.userFca})}>
                  <Icon name={'ios-add-circle'} size={26} color={'rgba(255, 255, 255, 0.7)'} />
                </TouchableOpacity>
              </View>

              <StackedBarChart
                  data={this.state.promData}
                  width={Constants.windowDimensions.width}
                  height={220}
                  chartConfig={chartConfig}
              />
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
  chartContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  chartHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: 10
  },
  chartHeaderTitleContainer:{
    flex: 3,
    alignItems: 'flex-start',
    justifyContent:'center'
  },
  chartTitle:{
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  },
  addchartContainer:{
    flex: 1,
    alignItems: 'flex-end',
    justifyContent:'center'
  },
  logo:{
    width: 40,
    height: 40
  },
  pieChart:{
    flex:9
  }
});


