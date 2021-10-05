import axios from 'axios';
import { url } from '../../utils';
import { Redirect } from 'react-router-dom';

export const authAction = (dispatch) => async () => {
  return await axios
    .get(`${url}auth/me`, {
      withCredentials: true,
    })
    .then((res) => {
      try {
        dispatch({
          type: 'AUTH',
          payload: res.data,
        });
        dispatch({
          type: 'AUTH_SUCCESS',
          payload: true,
        });
        <Redirect to='/home' />;
        return res.data;
      } catch (error) {
        dispatch({
          type: 'AUTH_ERROR',
          payload: false,
        });
      }
    });
};

export const authActionButton = (data) => async (dispatch) => {
  return await axios.post(`${url}auth/login`, data).then((res) => {
    try {
      localStorage.setItem('it-academy', JSON.stringify(res.data.data.userId));
      dispatch({
        type: 'AUTH',
        payload: res.data,
      });
      dispatch({
        type: 'AUTH_SUCCESS',
        payload: true,
      });
      return res.data;
    } catch (error) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: false,
      });
    }
  });
};
