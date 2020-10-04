import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './landing.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function Landing() {
  return (
    <div className="landing-v2">
      <section className="nav-bar">
        <div className="nav-bar__left-side">
          <div className="nav-bar__logo-container">
            <img src="./logo.png" />
          </div>
        </div>
        <div className="nav-bar__right-side">
          <a
            href="https://docs.google.com/forms/d/1FDUajSVjIgG-7hBBl5ekOpHxurVi-DvqQ1AcbwiJpuI/edit?ts=5f4a681a"
            target="_blank"
            className="nav-item"
          >
            Apply
          </a>
          <a href="#team" className="nav-item">
            Team
          </a>
          <a href="#curriculum" className="nav-item">
            Curriculum
          </a>
        </div>
      </section>
      <section className="hero rowx">
        <div className="hero__left-side colx">
          <div className="hero__heading">The Tech. school of Future</div>
          <div className="descpx hero__descp">
            We aim to make young India financially self-sustainable by providing
            equal opportunity for all.
          </div>
          <a
            href="https://docs.google.com/forms/d/1FDUajSVjIgG-7hBBl5ekOpHxurVi-DvqQ1AcbwiJpuI/edit?ts=5f4a681a"
            target="_blank"
            className="btnx hero__cta"
          >
            apply now
          </a>
        </div>
        <div className="hero__right-side colx">
          <img src="./hero.svg" alt="hero" />
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
                  Live Classes Everyday
                </div>
                <div className="unique__right-side__descp">
                  It’s COVID, we know you can't even meet your next door
                  neighbours. But we do bring a fun class-like experience
                  virtually.
                </div>
              </div>
            </div>

            <div className="unique__unit colx">
              <div className="unique__left-side">
                <img src="./unique1.svg" alt="" />
              </div>
              <div className="unique__right-side">
                <div className="unique__right-side__heading">
                  Personalized Guidance
                </div>
                <div className="unique__right-side__descp">
                  Who doesn't like attention? We make sure to have 1:1 and
                  mentoring sessions with every students to make their journey
                  with us hassle free.
                </div>
              </div>
            </div>
          </div>

          <div className="rowx">
            <div className="unique__unit colx">
              <div className="unique__left-side">
                <img src="./unique2.svg" alt="" />
              </div>
              <div className="unique__right-side">
                <div className="unique__right-side__heading">
                  Project Driven Curricululum
                </div>
                <div className="unique__right-side__descp">
                  Ain't reading whole of Cormen a nightmare? Only Sheldon can
                  handle so much of theory. We provide Intensive hands on
                  training through 10+ projects
                </div>
              </div>
            </div>

            <div className="unique__unit colx">
              <div className="unique__left-side">
                <img src="./unique3.svg" alt="" />
              </div>
              <div className="unique__right-side">
                <div className="unique__right-side__heading">Learn a Tech</div>
                <div className="unique__right-side__descp">
                  General Knowledge is important, and so is staying updated with
                  technology. So we have our “Cool Tech Talks” every sunday by
                  industry experts on trending technologies.
                </div>
              </div>
            </div>
          </div>
          <div className="rowx">
            <div className="unique__unit colx">
              <div className="unique__left-side">
                <img src="./unique4.svg" alt="" />
              </div>
              <div className="unique__right-side">
                <div className="unique__right-side__heading">
                  Enhancement Classes
                </div>
                <div className="unique__right-side__descp">
                  We understand everyone has their own pace of learning, and
                  everyday you can’t be Batman. Enhancement program help us to
                  pull you up to the same level incase you are lagging
                </div>
              </div>
            </div>

            <div className="unique__unit colx">
              <div className="unique__left-side">
                <img src="./unique5.svg" alt="" />
              </div>
              <div className="unique__right-side">
                <div className="unique__right-side__heading">
                  Mock Interviews By Industry
                </div>
                <div className="unique__right-side__descp">
                  Interviews can be intriguing and you don't want you to rely on
                  curd on your 1st interview. We want to end this stage fear, by
                  having mock "live like" interviews by mentors from FAANG type
                  companies.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="curriculum" className="curriculum">
        <div className="headingx curriculum__heading">Curriculum</div>
        <div className="curriculum__container">
          <div className="curriculum__unit">
            <div className="curriculum__left-side">
              <div className="curriculum__icon">
                <img src="./curr0.svg" alt="curr" />
              </div>
            </div>

            <div className="curriculum__right-side">
              <div className="curriculum__purple">Week 1-10</div>
              <div className="curriculum__orange">Kickstart</div>
              <div className="curriculum__descp">
                <ul>
                  <li>
                    Basics of Programming and Logical Thinking. Deep dive into
                    Algorithms and Data Structures using 150+ Problems.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="curriculum__unit">
            <div className="curriculum__left-side">
              <div className="curriculum__icon">
                <img src="./curr1.svg" alt="curr" />
              </div>
            </div>
            <div className="curriculum__right-side">
              <div className="curriculum__purple">Week 11-22</div>
              <div className="curriculum__orange">Web 10x</div>
              <div className="curriculum__descp">
                <ul>
                  <li>Basics of Web using HTML, CSS, JS and GIT.</li>
                  <li>
                    Backend Development using NodeJS, Mysql and Docker followed
                    by 4+ industry grade Projects
                  </li>
                  <li>
                    Frontend Development using ReactJS and Redux followed by 4+
                    industry grade Projects
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="curriculum__unit">
            <div className="curriculum__left-side">
              <div className="curriculum__icon">
                <img src="./curr2.svg" alt="curr" />
              </div>
            </div>

            <div className="curriculum__right-side">
              <div className="curriculum__purple">Week 23-28</div>
              <div className="curriculum__orange">Deep Dive</div>
              <div className="curriculum__descp">
                <ul>
                  <li>
                    Understanding CS Fundamentals and diving into Sytem Design
                  </li>
                  <li>Building a Major Capstone Project</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="curriculum__unit">
            <div className="curriculum__left-side">
              <div className="curriculum__icon">
                <img src="./curr3.svg" alt="curr" />
              </div>
            </div>
            <div className="curriculum__right-side">
              <div className="curriculum__purple">Week 29-32</div>
              <div className="curriculum__orange">Land a Job</div>
              <div className="curriculum__descp">
                <ul>
                  <li>
                    Career Counselling sessions and polishing your Resume and
                    Cover Letter
                  </li>
                  <li>10 + Mock Interviews by Industry Experts</li>
                  <li>Interviews and Offers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Carousel>
        <Carousel.Item>
          <section className="stories">
            <div className="stories__left-side">
              <div className="headingx stories__heading">Student Speaks</div>
              <div className="descpx stories__descp">
                <p>
                  The curriculum here is very exhaustive helping me be a better
                  developer. The Mock Interviews feedbacks from Industry experts
                  and continous guidance have helped me become better at giving
                  interviews.
                </p>
                <p>
                  The best thing which I felt about this program was the 1:1
                  mentorship sessions from Vedansh Sir and Sai maam. It has been
                  only 3 months since I have joined this program and I already
                  have 2 offers of 8LPA each. I will be joining one of them next
                  week
                </p>
              </div>
              <div className="stories__cta">Abhishek Rai</div>
            </div>
            <div className="stories__right-side">
              <img src="./abhishek.png" />
            </div>
          </section>
        </Carousel.Item>
        <Carousel.Item>
          <section className="stories">
            <div className="stories__left-side">
              <div className="headingx stories__heading">Student Speaks</div>
              <div className="descpx stories__descp">
                <p>
                  The mentors here don't teach you solutions, they teach you how
                  to think towards it. The self-assessment chart on the website
                  and weekly targets along with guest lectures on weekends from
                  industry experts keep me motivated.
                </p>
                <p>
                  I was an average student but here I realized I m capable of
                  far better things. My productivity grew multiple folds from
                  day 1 itself. Joining this is one of the best decisions of my
                  life. Thank you Devsnest!
                </p>
              </div>
              <div className="stories__cta">Priya Mishra</div>
            </div>
            <div className="stories__right-side">
              <img src="./priya.png" />
            </div>
          </section>
        </Carousel.Item>
        <Carousel.Item>
          <section className="stories">
            <div className="stories__left-side">
              <div className="headingx stories__heading">Student Speaks</div>
              <div className="stories__descp">
                <p>
                  Devsnest is by all measures the best investment I have made in
                  my last 4 years. Within past few months, I'm surprised to see
                  the positive changes not only in my web dev and CS skills but
                  within myself as an individual as well.
                </p>
                <p>
                  Truly, I owe it all to Devnest's program and I would
                  wholeheartedly recommend it to anybody considering it,
                  especially those with a desire to improve and strengthen their
                  capabilities, as a fully fledge software engineer, everyday.
                </p>
              </div>
              <div className="stories__cta">Vashudev Dhamma</div>
            </div>
            <div className="stories__right-side">
              <img src="./vashu.png" />
            </div>
          </section>
        </Carousel.Item>
      </Carousel>

      <section className="plan">
        <div className="headingx plan__heading">
          Start now with the our flexible plans
        </div>

        <div className="plan__container">
          <div className="plan__unit">
            <img src="./plan0.png" />
          </div>
          <div className="plan__unit">
            <img src="./plan1.png" />
          </div>
        </div>
      </section>
      <section className="cool">
        <div className="cool__container">
          <div className="cool__left-side">
            <img src="./cool.svg" alt="cool" />
          </div>
          <div className="cool__right-side">
            <div className="headingx cool__heading">Sounds Cool?</div>
            <div className="descpx cool__descp">
              get started with #desvsnest to experience the best version of
              yourself.
            </div>
            <a
              href="https://docs.google.com/forms/d/1FDUajSVjIgG-7hBBl5ekOpHxurVi-DvqQ1AcbwiJpuI/edit?ts=5f4a681a"
              target="_blank"
              className="btnx cool__cta"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      <section id="team" className="team">
        <div className="headingx team__heading">Meet our team</div>
        <div className="team__container">
          <div className="team__unit">
            <img src="./team0.png" />
            <div className="team__name">Vedansh</div>
            <div className="team__title">Hackerrank</div>
          </div>
          <div className="team__unit">
            <img src="./team1.png" />
            <div className="team__name">Sai </div>
            <div className="team__title">Ex Amazon</div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__container">
          <div className="footer__left-side">
            <div className="footer__logo"></div>
            <div className="footer__descp">
              We aim to make young India financially self-sustainable by
              providing equal opportunity for all.
            </div>
          </div>
          <div className="footer__right-side">
            Contact us <span className="footer__email">admin@devsnest.in</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
