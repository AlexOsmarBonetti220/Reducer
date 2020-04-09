import React from "react";
import {connect} from "react-redux";
import {editEmail, editPassword, cadastrar} from "../actions/AuthActions";

import {View, TouchableOpacity, TextInput, Text} from 'react-native';

const Cadastro = (props, {navigation}) => {
    return(
        <View>
            <View>
                <TextInput value={props.email} placeholder="Email" onChangeText={(t)=>props.editEmail(t)} />
                <TextInput value={props.senha} placeholder="Senha" secureTextEntry={true} onChangeText={(t)=>props.editPassword(t)} />
            </View>
            <View>
                <TouchableOpacity onPress={()=>props.cadastrar(props.email, props.senha)}> 
                    <Text>Cadastrar</Text>
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

const CadastroConnect = connect(mapStateToProps, {editEmail, editPassword, cadastrar})(Cadastro);
export default CadastroConnect;