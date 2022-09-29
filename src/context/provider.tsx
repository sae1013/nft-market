import React from 'react';
import {haltContext} from './context';



interface haltLoginContextType {
    isHaltLogin:boolean,
    isHaltLoginHandler:(arg:boolean)=>void
}
const loginHaltReducer = (state,action) => {

    if(action.type === 'halt'){
        return {
            ...state,
            isHaltLogin:action.payload
        }

    }
}

const defaultState = {
    isHaltLogin:false
}

const Provider = (props) => {
    const [haltLoginState,dispatchLoginHaltAction] = React.useReducer(loginHaltReducer,defaultState);

    const haltLoginHandler = (flag) => {
        dispatchLoginHaltAction({
            type:'halt',
            payload:flag
        })
    }

    const haltContextStore = {
        isHaltLogin:haltLoginState.isHaltLogin,
        haltLoginHandler
    }

    return (
        <haltContext.Provider value = {haltContextStore}>
            {props.children}
        </haltContext.Provider>

    )

}

export default Provider
