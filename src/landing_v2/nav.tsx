import React, { useState } from 'react';
import classNames from 'classnames';

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

  const subHeading = faqs
    ? 'Please go through the FAQs and if you do not understand something please feel free to reach out to us at admin@devsnest.in'
    : 'A mentorship program designed to help you get your dream job. It evolves as per your needs to mold you into a kickass developer.';
  const buttonText = faqs ? 'Read FAQs' : 'Learn More';
  const buttonHash = faqs ? '#read' : '#unique';
  return (
    <section className="hero rowx dark">
      <div className="hero__left-side colx">
        <div className="hero__logo-container"></div>
        <img src="./hero2.jpg" alt="hero" />
      </div>
      <div className="hero__right-side colx">
        <div className="nav-bar">
          <div
            className={classNames('nav-bar__right-side', {
              'show-with-style': showNav,
            })}
          >
            <a
              href="https://docs.google.com/forms/d/1FDUajSVjIgG-7hBBl5ekOpHxurVi-DvqQ1AcbwiJpuI/edit?ts=5f4a681a"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item"
            >
              Apply
            </a>
            <a href="/#mentors" className="nav-item">
              Mentors
            </a>
            <a href="/faqs#read" className="nav-item">
              FAQs
            </a>
            <a href="/#curriculum" className="nav-item">
              Curriculum
            </a>
          </div>
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
          <a href={buttonHash} className="btnx btnx-primary">
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Nav;
