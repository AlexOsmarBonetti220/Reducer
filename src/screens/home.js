import React from "react";

import {View, Text, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
    return(
        <View>
            <TouchableOpacity onPress={()=>{
                navigation.navigate("Login");
            }}>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                navigation.navigate("Cadastro");
            }}>
                <Text>Cadastro</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;