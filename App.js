import React, {useState, useEffect} from "react";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk";
import Reducers from "./src/Reducers";

import {NavigationContainer} from '@react-navigation/native';

import Routes from "./routes/Stack";

let store = createStore(Reducers, applyMiddleware(ReduxThunk));

const Navigation = () => {
  return(
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}

const App = () => {
  return(
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App;