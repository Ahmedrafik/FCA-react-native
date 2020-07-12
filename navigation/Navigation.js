import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from "../pages/Login";
import Home from "../pages/Home";
import Organigramme from "../pages/Organigramme";
import Bfm from "../pages/Bfm";
import Bottles from "../pages/Bottles";
import Promenade from "../pages/Promenade";
import PlusUn from "../pages/PlusUn";
import RegisterHome from "../pages/register/RegisterHome";
import RegisterName from "../pages/register/RegisterName";
import RegisterMail from "../pages/register/RegisterMail";
import RegisterLogin from "../pages/register/RegisterLogin";
import RegisterPass from "../pages/register/RegisterPass";
import RegisterValidation from "../pages/register/RegisterValidation";

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="RegisterHome" headerMode="none">
                <Stack.Screen name="Login" component={Login} />
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
                <Stack.Screen name="Promenade" component={Promenade} />
                <Stack.Screen name="PlusUn" component={PlusUn} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}