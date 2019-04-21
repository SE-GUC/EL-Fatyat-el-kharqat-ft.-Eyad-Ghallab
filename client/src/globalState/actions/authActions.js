import { LOGIN, LOGOUT } from './actionTypes';

export const login = () => dispatch => {
	dispatch({
		type: LOGIN,
		payload: {
			username: 'Ammar',
			email: 'email',
		},
	});
};

export const logout = () => dispatch => {
	dispatch({ type: LOGOUT });
};


