const initialState = {
    email:"alexosmarbonetti@gmail.com",
    senha:""
}
const AuthReducer = (state = [], action) => {
    if(state.length === 0)
        return initialState;
    
    if(action.type === "editEmail")
        return {...state, email:action.payload.email};
    
    if(action.type === "editPassword")
        return {...state, senha:action.payload.senha};

    if(action.type === "cadastroSucesso")
        alert("Cadastrou com sucesso");
    
    if(action.type === "cadastroErro")
        alert("Erro ao cadastrar: " + action.payload.erro);
    return state;
}

export default AuthReducer;