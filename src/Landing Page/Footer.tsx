import React from 'react';
import '../CSS/Landingpage.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

export default function Footer() {
  return (
    <div className="footer">
      <div className=" container-fluid text-md-left Ft">
        <div className=" container">
          <div>
            <div className="row">
              <div className="col-md-4">
                <ul className="list-unstyled ">
                  <li>
                    <a href="#">CONTACT</a>
                  </li>
                  <li>
                    <a href="#">+91-886-XXX-XX</a>
                  </li>
                  <li>
                    <a href="#">contact-admin@devsnest.in</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-unstyled ">
                  <li>
                    <a href="#">ABOUT US </a>
                  </li>
                  <li>
                    <a href="#">BLOG </a>
                  </li>

                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">PRIVACY POLICY </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-unstyled ">
                  <div className="row">
                    <div className="col">
                      <li>
                        <LinkedInIcon
                          style={{ color: '#FFF', fontSize: '50px' }}
                        />
                      </li>
                    </div>

                    <div className="col">
                      <TwitterIcon
                        style={{ color: '#FFF', fontSize: '50px' }}
                      />
                    </div>

                    <div className="col">
                      <FacebookIcon
                        style={{ color: '#FFF', fontSize: '50px' }}
                      />
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
