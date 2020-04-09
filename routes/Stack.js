import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Home from "../src/screens/home";
import Cadastro from "../src/screens/cadastro";
import Login from '../src/screens/login';

const Stack = createStackNavigator();

const myStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
        </Stack.Navigator>
    )
}

export default myStack;