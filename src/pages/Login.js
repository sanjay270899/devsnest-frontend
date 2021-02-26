import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/login.scss';

import bg from '../assets/images/login/bg.png';
import right from '../assets/images/login/Group 65.svg';
import left from '../assets/images/login/Group 17.svg';

function Login() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="login-main row align-items-strech">
        <div className="login-left d-flex flex-column px-4 col-md-3">
          <div
            className="text-light my-5 mx-3 mb-auto"
            style={{ fontSize: '0.95em' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </div>
          <img
            src={left}
            alt="discord sheild and hammer"
            className="mt-4 mx-auto"
            style={{ maxWidth: 250, width: '100%' }}
          />
        </div>

        <div className="col-md-6 d-flex flex-column py-4">
          <h2 className="h3 font-weight-bold text-primary-dark text-center mx-4 my-4">
            Welcome to DEVSNEST!
          </h2>

          <div className="ml-4 mr-3 my-4">
            <h3 className="h6 mt-2">#1 : Join Our Discord Server</h3>
            <p className="h6 text-muted ml-4 mt-2 mb-4">
              If you're already a part of our team proceed to step #2
            </p>
            <h3 className="h6 mt-2">#2 : Login or Authorisation via Discord</h3>
          </div>

          <Link
            to="/api/v1/auth/discord"
            className="btn py-05 mx-auto my-3 login-btn"
          >
            Login
          </Link>
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
