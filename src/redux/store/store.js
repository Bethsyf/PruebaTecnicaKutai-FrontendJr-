import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducers } from "../reducers/loginReducer";
import { registerReducer } from "../reducers/registerReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({    
    login: loginReducers,
    register: registerReducer,   
})

export const store= createStore(
    reducers,
        composeEnhancers(
        applyMiddleware(thunk)
    )
)