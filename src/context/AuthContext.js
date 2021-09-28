import createDataContext from './createDataContext'
import api from '../api/api';


const authReducer = (state, action) => {
    switch (action.type) {
      case 'add_error':
        return { ...state, errorMessage: action.payload };
      case 'signin':
        return { errorMessage: '', token: action.payload.token,user:action.payload.userData };
      case 'signout':
        return { token: null, errorMessage: '' };
      default:
        return state;
    }
  };
  
  
  const signup = (dispatch) => async ({ email, password },history) => {
    try {
      const response = await api.post('auth/register', {
        email,
        password,
      },{headers: {'Access-Control-Allow-Origin': '*'}});
      window.localStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data });
      history.push('/home')
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign up',
      });
    }
  };
  
  const signin = (dispatch) => async ({ email, password },history) => {
    try {
      const response = await api
        .post('auth/login',{ email, password })
        .catch((err) => {
          console.log(err);
        });
      window.localStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data });
      history.push('/home')
    } catch (err) {
      console.log(err);
      dispatch({
        type: 'add_error',
        payload: 'Something went wrong with sign in',
      });
    }
  };
  
  const signout = (dispatch) => async (history) => {
    window.localStorage.removeItem('token');
    dispatch({ type: 'signout' });
    history.push("/login")
  };
  
  export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { token: null, errorMessage: '' }
  );