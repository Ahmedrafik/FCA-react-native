import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Organigramme from "../pages/Organigramme";
import Bfm from "../pages/Bfm";
import Bottles from "../pages/Bottles";
import Promenade from "../pages/Promenade";
import PlusUn from "../pages/PlusUn";

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" headerMode="none">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
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