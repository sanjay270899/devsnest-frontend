import React, { useState } from 'react';
import classNames from 'classnames';
import { NavHashLink } from 'react-router-hash-link';

function Nav(props) {
  const { faqs } = props;
  const [showNav, setShowNav] = useState(false);

  const headLine = faqs ? (
    <h1 className="hero__heading">
      Please go through the <span className="color-purple ">FAQs.</span>
    </h1>
  ) : (
    <h1 className="hero__heading">
      Education which makes you financially{' '}
      <span className="color-purple ">independent.</span>
    </h1>
  );

  const subHeading =
    'Building a platform of peer learning enabling students to learn → grow → develop projects together';
  return (
    <section className="hero rowx dark">
      <div className="main-nav">
        <div className="main-nav__nav_container">
          <div className="main-nav__nav_left">
            <NavHashLink to="/">
              <div className="logo-container"></div>
            </NavHashLink>
          </div>
          <div className="main-nav__nav_right">
            <a
              href="https://docs.google.com/forms/d/1FDUajSVjIgG-7hBBl5ekOpHxurVi-DvqQ1AcbwiJpuI/edit?ts=5f4a681a"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item"
            >
              Apply
            </a>
            <NavHashLink to="/#mentors" className="nav-item">
              Mentors
            </NavHashLink>
            <NavHashLink to="/faqs#read" className="nav-item">
              FAQs
            </NavHashLink>
            <NavHashLink to="/#curriculum" className="nav-item">
              Curriculum
            </NavHashLink>
          </div>
        </div>
      </div>
      <div className="hero__left-side colx">
        <img src="./hero2.jpg" alt="hero" />
      </div>
      <div className="hero__right-side colx">
        <div className="nav-bar">
          <div className="nav-bar__bar-container">
            <img
              alt="icon"
              onClick={() => setShowNav(!showNav)}
              className="nav-bar__hamburger"
              src="./bars.svg"
            />
          </div>
        </div>
        <div className="content">
          {headLine}
          <div className="descpx hero__descp">{subHeading}</div>
        </div>
      </div>
    </section>
  );
}

export default Nav;
