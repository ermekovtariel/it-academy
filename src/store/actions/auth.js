import axios from 'axios';
import { url } from '../../utils';

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
      console.log(res.data.data);
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
