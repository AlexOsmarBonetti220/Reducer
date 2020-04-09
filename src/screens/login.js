import React from "react";
import {connect} from "react-redux";
import {editEmail} from "../actions/AuthActions";
import {editPassword} from '../actions/AuthActions';

import {View, TouchableOpacity, TextInput, Text} from 'react-native';

const Login = (props, {navigation}) => {
    const entrar = () => {
        
    }
    return(
        <View>
            <View>
                <TextInput value={props.email} placeholder="Nome" onChangeText={(t)=>props.editEmail(t)} />
                <TextInput value={props.senha} placeholder="Senha" secureTextEntry={true} onChangeText={(t)=>props.editPassword(t)} />
            </View>
            <View>
                <TouchableOpacity onPress={entrar}> 
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => {
    return{
        email:state.auth.email,
        senha:state.auth.senha
    }
}

const LoginConnect = connect(mapStateToProps, {editEmail, editPassword})(Login);

export default LoginConnect;