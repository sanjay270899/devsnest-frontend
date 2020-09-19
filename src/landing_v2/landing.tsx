import React from 'react';

import './landing.scss';

function Landing() {
  return (
    <div className="landing-v2">
      <section className="nav-bar">
        <div className="logo"></div>
        <div className="nav-group">
          <div className="nav-group__left-side">
            <div className="nav-group__logo-container">
              <span className="nav-group__logo">D</span>
              <span>EVS NEST</span>
            </div>
          </div>
          <div className="nav-group__right-side">
            <div className="nav-item">Apply</div>
            <div className="nav-item">Team</div>
            <div className="nav-item">Curriculum</div>
          </div>
        </div>
      </section>
      <section className="hero rowx">
        <div className="hero__left-side colx">
          <img src="./hero.svg" alt="hero" />
        </div>
        <div className="hero__right-side colx">
          <div className="hero__heading">Revamp learning</div>
          <div className="hero__descp">
            We aim to make young India financially self-sustainable by providing
            equal opportunity for all.
          </div>
          <a
            href="https://www.google.com"
            target="_blank"
            className="btnx hero__cta"
          >
            apply now
          </a>
        </div>
      </section>
      <section className="stories">
        <div className="stories__left-side">
          <div className="headingx stories__heading">Success stories</div>
          <div className="descpx stories__descp">
            Goorou is, by all measures, the best investment I have made in my
            college life. Within past few weeks, I'm surprised to see the
            positive changes not only in my web dev and CS skills but within
            myself as an individual as well.
          </div>
          <div className="stories__cta">Srestha Mishra (CRED)</div>
        </div>
        <div className="stories__right-side">
          <img src="./story.svg" />
        </div>
      </section>
      <section className="curriculum">
        <div className="headingx curriculum__heading">Curriculum</div>
        <div className="curriculum__container">
          <div className="curriculum__unit">
            <div className="curriculum__icon">
              <img src="./curr0.svg" alt="curr" />
            </div>
            <div className="curriculum__purple">Week 0-8</div>
            <div className="curriculum__orange">Kickstart</div>
            <div className="curriculum__descp">
              basics of web, html, css version control, git backend developement
              basics of NodeJS building & deploying APIs. project in NodeJS
              frontend development basics of ReactJS integrating APIs project in
              ReactJS
            </div>
          </div>
          <div className="curriculum__unit">
            <div className="curriculum__icon">
              <img src="./curr0.svg" alt="curr" />
            </div>
            <div className="curriculum__purple">Week 0-8</div>
            <div className="curriculum__orange">Kickstart</div>
            <div className="curriculum__descp">
              basics of web, html, css version control, git backend developement
              basics of NodeJS building & deploying APIs project in NodeJS
              frontend development basics of ReactJS integrating APIs project in
              ReactJS
            </div>
          </div>
          <div className="curriculum__unit">
            <div className="curriculum__icon">
              <img src="./curr0.svg" alt="curr" />
            </div>
            <div className="curriculum__purple">Week 0-8</div>
            <div className="curriculum__orange">Kickstart</div>
            <div className="curriculum__descp">
              basics of web, html, css version control, git backend developement
              basics of NodeJS building & deploying APIs project in NodeJS
              frontend development basics of ReactJS integrating APIs project in
              ReactJS
            </div>
          </div>
          <div className="curriculum__unit">
            <div className="curriculum__icon">
              <img src="./curr0.svg" alt="curr" />
            </div>
            <div className="curriculum__purple">Week 0-8</div>
            <div className="curriculum__orange">Kickstart</div>
            <div className="curriculum__descp">
              basics of web, html, css version control, git backend developement
              basics of NodeJS building & deploying APIs project in NodeJS
              frontend development basics of ReactJS integrating APIs project in
              ReactJS
            </div>
          </div>
        </div>
      </section>
      <section className="unique">
        <div className="headingx unique__heading">What makes us unique</div>
        <div className="unique__container">
          <div className="rowx">
            <div className="unique__unit colx">
              <div className="unique__left-side">
                <img src="./unique0.svg" alt="" />
              </div>
              <div className="unique__right-side">
                <div className="unique__right-side__heading">
                  Live classes everyday
                </div>
                <div className="unique__right-side__descp">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia
                </div>
              </div>
            </div>

            <div className="unique__unit colx">
              <div className="unique__left-side">
                <img src="./unique0.svg" alt="" />
              </div>
              <div className="unique__right-side">
                <div className="unique__right-side__heading">
                  Live classes everyday
                </div>
                <div className="unique__right-side__descp">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia
                </div>
              </div>
            </div>
          </div>

          <div className="rowx">
            <div className="unique__unit colx">
              <div className="unique__left-side">
                <img src="./unique0.svg" alt="" />
              </div>
              <div className="unique__right-side">
                <div className="unique__right-side__heading">
                  Live classes everyday
                </div>
                <div className="unique__right-side__descp">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia
                </div>
              </div>
            </div>

            <div className="unique__unit colx">
              <div className="unique__left-side">
                <img src="./unique0.svg" alt="" />
              </div>
              <div className="unique__right-side">
                <div className="unique__right-side__heading">
                  Live classes everyday
                </div>
                <div className="unique__right-side__descp">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia
                </div>
              </div>
            </div>
          </div>
          <div className="rowx">
            <div className="unique__unit colx">
              <div className="unique__left-side">
                <img src="./unique0.svg" alt="" />
              </div>
              <div className="unique__right-side">
                <div className="unique__right-side__heading">
                  Live classes everyday
                </div>
                <div className="unique__right-side__descp">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia
                </div>
              </div>
            </div>

            <div className="unique__unit colx">
              <div className="unique__left-side">
                <img src="./unique0.svg" alt="" />
              </div>
              <div className="unique__right-side">
                <div className="unique__right-side__heading">
                  Live classes everyday
                </div>
                <div className="unique__right-side__descp">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="plan">
        <div className="headingx plan__heading">
          Start now with the our flexible plans
        </div>

        <div className="plan__container">
          <div className="unique__unit">
            <img src="./plan0.png" />
          </div>
          <div className="unique__unit">
            <img src="./plan1.png" />
          </div>
        </div>
      </section>
      <section className="cool">
        <div className="cool__left-side">
          <img src="./cool.svg" alt="cool" />
        </div>
        <div className="cool__right-side">
          <div className="headingx cool__heading">Sounds Cool?</div>
          <div className="cool__descp">
            get started with #goorou to experience the best version of yourself.
          </div>
          <div className="btnx cool__cta">Apply Now</div>
        </div>
      </section>

      <section className="team">
        <div className="headingx team__heading">Meet our team</div>
        <div className="team__container">
          <div className="team__unit">
            <img src="./team0.png" />
            <div className="team__name">Vedansh Garg</div>
            <div className="team__title">Founder & CEO</div>
          </div>
          <div className="team__unit">
            <img src="./team0.png" />
            <div className="team__name">Vedansh Garg</div>
            <div className="team__title">Founder & CEO</div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__left-side">
          <div className="footer__logo"></div>
          <div className="footer__descp">
            We aim to make young India financially self-sustainable by providing
            equal opportunity for all.
          </div>
        </div>
        <div className="footer__right-side">
          Contact us <span className="footer__email">admin@devsnest.in</span>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
