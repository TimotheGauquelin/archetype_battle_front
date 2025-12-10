import apiClient from '../../api';
import { LoginResponse, LogProps } from '../../interfaces/auth/Login.interface';
import { URL_BACK_LOGIN } from '../../utils/urls/urlBack';
import { URL_FRONT_HOME } from '../../utils/urls/urlFront';
import { setUser } from '../../redux/slice/userSlice';
import { AxiosResponse } from 'axios';

/**
 * Log in a user.
 * @param {object} user - User object.
 * @param {function} dispatch - Dispatch function.
 * @param {function} navigate - Navigation function.
 * @param {function} setError - Function to set the error.
 * @param {function} setIsLoading - Function to set the loading state.
 * @returns {Promise<void>} - Promise indicating the completion of the operation.
 */

export const logIn = async (
  user: LogProps,
  dispatch: any,
  navigate: any,
  toast: any,
  setError: any,
  setIsLoading: any
): Promise<void> => {
  console.log('logIn service', user);
  await apiClient
    .post(URL_BACK_LOGIN, user)
    .then((response: AxiosResponse<LoginResponse>) => {
      console.log('response', response);
      if (response.status === 200) {
        const token = response.data.data.token;

        dispatch(
          setUser({
            isAuthenticated: true,
            id: response.data.data.user.id,
            username: response.data.data.user.username,
            email: response.data.data.user.email,
            roles: response.data.data.user.roles,
            token: token,
          })
        );

        toast.success(response.data.message);
        navigate(URL_FRONT_HOME);
      }
    })
    .catch(error => {
      setIsLoading(false);
      if (error.response && error.response.data) {
        if (error.response.status === 429) {
          setError(error.response.data);
        } else {
          setError(error.response.data.message);
        }
      } else {
        setError(
          'Une erreur est survenue lors de la connexion. Veuillez réessayer.'
        );
      }
    })
    .finally(() => {
      setIsLoading(false);
    });
};
