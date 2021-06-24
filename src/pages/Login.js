import '../assets/css/login.scss';

import React, { useCallback, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import bg from '../assets/images/login/bg.png';
import googleIcon from '../assets/images/login/google.svg';
import left from '../assets/images/login/Group 17.svg';
import right from '../assets/images/login/Group 65.svg';
import axios from '../config/axios.config';
import { API_ENDPOINTS } from '../constants/api';
import { login, updateUser, useLoginState } from '../redux';
import myLog from '../utils/myLog';

function Login() {
  const history = useHistory();
  const loginState = useLoginState();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const onGoogleLogin = useCallback(
    async (data) => {
      setIsLoading(true);
      try {
        myLog('id_token:', data.tokenObj.id_token);
        const loginResponse = await axios.post(`${API_ENDPOINTS.LOGIN}`, {
          type: 'google',
          code: data.tokenObj.id_token,
          googleId: data.profileObj.googleId,
        });
        dispatch(
          login({
            ...loginResponse.data.data.attributes,
            authorization: loginResponse.headers['authorization'],
          })
        );
        const userResponse = await axios.get(API_ENDPOINTS.CURRENT_USER);
        dispatch(updateUser(userResponse.data.data.attributes));
        history.push('/');
        toast.success('Successfully signed in!');
      } catch (e) {
        console.error(e.message);
        setHasError(true);
        toast.error('An error occurred!');
      }
      setIsLoading(false);
    },
    [dispatch, history]
  );

  if (!loginState.isLoading && !isLoading && loginState.loggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="login-main row align-items-stretch">
        <div className="login-left d-flex flex-column px-4 col-md-3">
          <div
            className="text-light my-5 mx-3 mb-auto"
            style={{ fontSize: '1.2em' }}
          >
            Education which makes you financially independent.
          </div>
          <img
            src={left}
            alt="discord shield and hammer"
            className="mt-4 mx-auto"
            style={{ maxWidth: 250, width: '100%' }}
          />
        </div>

        <div className="col-md-6 d-flex flex-column py-4">
          <h2 className="h3 font-weight-bold text-primary-dark text-center mx-4 my-4">
            Welcome to DEVSNEST!
          </h2>

          <div className="ml-4 mr-3 my-4">
            <h3 className="h6 mt-2">
              #1: Be a part of your discord community,{' '}
              <a
                href="https://discord.gg/E8YcJpGJKB"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join us!
              </a>
            </h3>
            <p className="h6 text-muted ml-4 mt-3 mb-4">
              If {"you're"} already a part of our team proceed to step #2
            </p>
            <h3 className="h6 mt-2">#2: Login/Signup via google</h3>
          </div>

          <div className="login-btns">
            {hasError ? (
              <p className="py-1 text-danger text-center m-0">
                Something went wrong, Reach out to us at support@devsnest.in
              </p>
            ) : (
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                onSuccess={onGoogleLogin}
                onFailure={() => {}}
                render={(props) => (
                  <button
                    className="btn py-2 d-flex align-items-center mx-auto my-2 rounded-lg"
                    style={{
                      boxShadow: '0px 0px 20px #00000033',
                    }}
                    onClick={props.onClick}
                    disabled={props.disabled || isLoading}
                  >
                    {props.disabled || isLoading ? (
                      <div
                        className="spinner-border text-dark spinner-border-sm"
                        role="status"
                      />
                    ) : (
                      <img
                        src={googleIcon}
                        alt="google-icon"
                        height="25px"
                        width="25px"
                      />
                    )}
                    <span className="text-muted font-weight-bold ml-3">
                      Login with Google
                    </span>
                  </button>
                )}
              />
            )}
          </div>
        </div>

        <div className="col-md-3 d-flex align-items-center justify-content-center">
          <img
            src={right}
            alt="people building together"
            className="img-fluid my-5"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
