// import modules
import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

// signin function
export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData); // check whether it needs to be form or formData

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

// signup function
export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData); // check whether it needs to be form or formData

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};