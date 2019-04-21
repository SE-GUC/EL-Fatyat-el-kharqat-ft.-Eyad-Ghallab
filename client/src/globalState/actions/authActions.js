import { LOGOUT } from './actionTypes';
import { Component } from 'react';
class authActions extends Component{
	
}

export const logout = () => dispatch => {
	dispatch({ type: LOGOUT });
};


export default authActions;
