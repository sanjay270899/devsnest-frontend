import React from 'react';
import bg from '../assets/images/login/bg.png';
import right from '../assets/images/login/Group 65.svg';
import left from '../assets/images/login/Group 17.svg';
const Login = () => {
  return (
    <div className="login" style={{ backgroundImage: `url(${bg})` }}>
      <div className="login-main">
        <div className="login-left">
          <div className="login-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </div>
          <img src={`${left}`} alt="Group 17" />
        </div>
        <div className="login-mid">
          <h2 className="login-header">Welcome to DEVSNEST!</h2>
          <div className="mid">
            <h3 className="login-text">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <p className="login-text-pad">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <h3 className="login-text">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <a href="/hehe" className="login-btn">
            Login
          </a>
        </div>
        <div className="login-right">
          <img src={`${right}`} alt="Group 65.svg" />
        </div>
      </div>
    </div>
  );
};

export default Login;
