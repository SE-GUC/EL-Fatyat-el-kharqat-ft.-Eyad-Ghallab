import { LOGOUT } from '../actions/actionTypes'

const initialState = {
    isLoggedIn: false,
    loggedUser: {}
}

export default function(state = initialState, action) {
        switch(action.type) {
        
            case LOGOUT: 
            return {
                ...state,
                isLoggedIn: false,
                loggedUser: {}
            }
            default: return state
        }
}