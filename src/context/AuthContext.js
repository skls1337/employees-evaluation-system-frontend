import createDataContext from './createDataContext'
import api from '../api/api';

const authReducer = (state, action) => {
    switch (action.type) {
      case 'add_error':
        return { ...state, errorMessage: action.payload };
      case 'signin':
        return { errorMessage: '', token: action.payload };
      case 'signout':
        return { token: null, errorMessage: '' };
      default:
        return state;
    }
  };
  
  
  const signup = (dispatch) => async ({ email, password }) => {
    try {
      const response = await api.post('api/auth/register', {
        email,
        password,
      },{headers: {'Access-Control-Allow-Origin': '*'}});
      window.localStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token });
      console.log(response.data.data.role);
  
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign up',
      });
    }
  };
  
  const signin = (dispatch) => async ({ email, password }) => {
    try {
      console.log(email,password);
      const response = await api
        .post('api/auth/login',{ email, password })
        .catch((err) => {
          console.log(err);
        });
      window.localStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token });
     
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign in',
      });
    }
  };
  
  const signout = (dispatch) => async () => {
    window.localStorage.removeItem('token');
    dispatch({ type: 'signout' });
  };
  
  export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { token: null, errorMessage: '' }
  );