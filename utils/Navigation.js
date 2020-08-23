import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TechnicalDifficulties from "../components/screens/TechnicalDifficulties";
import Login from "../components/screens/Login";
import Home from "../components/screens/Home";
import Organigramme from "../components/screens/Organigramme";
import Bfm from "../components/screens/Bfm";
import Bottles from "../components/screens/bills/Bottles";
import PlusUn from "../components/screens/PlusUn";
import RegisterHome from "../components/screens/register/RegisterHome";
import RegisterName from "../components/screens/register/RegisterName";
import RegisterMail from "../components/screens/register/RegisterMail";
import RegisterLogin from "../components/screens/register/RegisterLogin";
import RegisterPass from "../components/screens/register/RegisterPass";
import RegisterValidation from "../components/screens/register/RegisterValidation";
import addBottle from "../components/screens/bills/AddBottle";
import addBill from "../components/screens/bills/AddBill"

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" headerMode="none">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="TechnicalDifficulties" component={TechnicalDifficulties} />
                <Stack.Screen name="RegisterHome" component={RegisterHome} />
                <Stack.Screen name="RegisterName" component={RegisterName} />
                <Stack.Screen name="RegisterMail" component={RegisterMail} />
                <Stack.Screen name="RegisterLogin" component={RegisterLogin} />
                <Stack.Screen name="RegisterPass" component={RegisterPass} />
                <Stack.Screen name="RegisterValidation" component={RegisterValidation} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Organigramme" component={Organigramme} />
                <Stack.Screen name="Bfm" component={Bfm} />
                <Stack.Screen name="Bottles" component={Bottles} />
                <Stack.Screen name="PlusUn" component={PlusUn} />
                <Stack.Screen name="addBottle" component={addBottle} />
                <Stack.Screen name="addBill" component={addBill} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}