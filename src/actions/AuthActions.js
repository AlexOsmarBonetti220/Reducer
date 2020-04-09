export const editEmail = (email) => {
    return{
        type:"editEmail",
        payload:{
            email:email
        }
    }
}

export const editPassword = (password) => {
    return {
        type:"editPassword",
        payload:{
            senha:password
        }
    }
}

export const cadastrar = (email, senha) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, senha)
        //Sucesso
        .then(()=>{
            dispatch({
                type:"cadastroSucesso"
            })
        })
        .catch((error)=>{
            dispatch({
                type:"cadastroErro",
                payload:{
                    erro:error.code
                }
            })
        })
    }
}