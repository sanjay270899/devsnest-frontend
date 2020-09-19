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
            href="https://docs.google.com/forms/d/1FDUajSVjIgG-7hBBl5ekOpHxurVi-DvqQ1AcbwiJpuI/edit?ts=5f4a681a"
            target="_blank"
            className="btnx hero__cta"
          >
            apply now
          </a>
        </div>
      </section>
      {/* <section className="stories">
        <div className="stories__left-side">
          <div className="headingx stories__heading">Student Speaks</div>
          <div className="descpx stories__descp">
          <p>
            The mentors here don't teach you solutions, they teach you how to think towards it. 
            The self-assessment chart on the website and weekly targets along with 
            guest lectures on weekends from industry experts keep me motivated.  
            </p>
          <p>
            I was an average student but here I realized I m capable of far better things. 
            My productivity grew multiple folds from day 1 itself. 
            Joining this is one of the best decisions of my life. 
            Thank you Devsnest!
            </p>
          </div>
          <div className="stories__cta">Priya Mishra</div>
        </div>
        <div className="stories__right-side">
          <img src="./priya.png" />
        </div>
      </section> */}
      <section className="stories">
        <div className="stories__left-side">
          <div className="headingx stories__heading">Student Speaks</div>
          <div className="descpx stories__descp">
            <p>
              The curriculum here is very exhaustive helping me be a better
              developer. The Mock Interviews feedbacks from Industry experts and
              continous guidance have helped me become better at giving
              interviews.
            </p>
            <p>
              The best thing which I felt about this program was the 1:1
              mentorship sessions from Vedansh Sir and Sai maam. It has been
              only 3 months since I have joined this program and I already have
              2 offers of 8LPA each. I will be joining one of them next week
            </p>
          </div>
          <div className="stories__cta">Abhishek Rai( dailyprophet.ai )</div>
        </div>
        <div className="stories__right-side">
          <img src="./abhishek.png" />
        </div>
      </section>
      {/* <section className="stories">
        <div className="stories__left-side">
          <div className="headingx stories__heading">Student Speaks</div>
          <div className="descpx stories__descp">
          <p>
          Devsnest is by all measures the best investment I have made in my last 4 years. 
          Within past few months, 
          I'm surprised to see the positive changes not only in my web dev and CS skills 
          but within myself as an individual as well.
          </p>
          <p> 
          Truly, I owe it all to Devnest's program and I would wholeheartedly recommend it to anybody considering it, 
          especially those with a desire to improve and strengthen their capabilities, as a fully fledge software engineer, everyday.
          </p>  
          </div>
          <div className="stories__cta">Vashudev Dhamma</div>
        </div>
        <div className="stories__right-side">
          <img src="./vashu.png" />
        </div>
      </section> */}
      <section className="curriculum">
        <div className="headingx curriculum__heading">Curriculum</div>
        <div className="curriculum__container">
          <div className="curriculum__unit">
            <div className="curriculum__icon">
              <img src="./curr0.svg" alt="curr" />
            </div>
            <div className="curriculum__purple">Week 1-10</div>
            <div className="curriculum__orange">Kickstart</div>
            <div className="curriculum__descp">
              <p>Basics of Programming and Logical Thinking </p>
              <p>
                Deep dive into Algorithms and Data Structures using 150+
                Problems
              </p>
            </div>
          </div>
          <div className="curriculum__unit">
            <div className="curriculum__icon">
              <img src="./curr1.svg" alt="curr" />
            </div>
            <div className="curriculum__purple">Week 11-22</div>
            <div className="curriculum__orange">Web 10x</div>
            <div className="curriculum__descp">
              <p>Basics of Web using HTML, CSS, JS and GIT</p>
              <p>
                Backend Development using NodeJS, Mysql and Docker followed by
                4+ industry grade Projects
              </p>
              <p>
                Frontend Development using ReactJS and Redux followed by 4+
                industry grade Projects
              </p>
            </div>
          </div>
          <div className="curriculum__unit">
            <div className="curriculum__icon">
              <img src="./curr2.svg" alt="curr" />
            </div>
            <div className="curriculum__purple">Week 23-28</div>
            <div className="curriculum__orange">Deep Dive</div>
            <div className="curriculum__descp">
              <p>Understanding CS Fundamentals and diving into Sytem Design</p>
              <p>Building a Major Capstone Project</p>
            </div>
          </div>
          <div className="curriculum__unit">
            <div className="curriculum__icon">
              <img src="./curr3.svg" alt="curr" />
            </div>
            <div className="curriculum__purple">Week 29-32</div>
            <div className="curriculum__orange">Land a Job</div>
            <div className="curriculum__descp">
              <p>
                Career Counselling sessions and polishing your Resume and Cover
                Letter
              </p>
              <p>10 + Mock Interviews by Industry Experts</p>
              <p>Interviews and Offers</p>
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
                <img src="./unique1.svg" alt="" />
              </div>
              <div className="unique__right-side">
                <div className="unique__right-side__heading">
                  Personalized guidance and support
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
                <img src="./unique2.svg" alt="" />
              </div>
              <div className="unique__right-side">
                <div className="unique__right-side__heading">
                  Project driven curricululum
                </div>
                <div className="unique__right-side__descp">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia
                </div>
              </div>
            </div>

            <div className="unique__unit colx">
              <div className="unique__left-side">
                <img src="./unique3.svg" alt="" />
              </div>
              <div className="unique__right-side">
                <div className="unique__right-side__heading">
                  Sessions and Mock interviews by industry experts
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
                <img src="./unique4.svg" alt="" />
              </div>
              <div className="unique__right-side">
                <div className="unique__right-side__heading">
                  Enhancement classes to match student's pace
                </div>
                <div className="unique__right-side__descp">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia
                </div>
              </div>
            </div>

            <div className="unique__unit colx">
              <div className="unique__left-side">
                <img src="./unique5.svg" alt="" />
              </div>
              <div className="unique__right-side">
                <div className="unique__right-side__heading">
                  Career Counselling & soft skills sessions
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
      </section>

      <section className="team">
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
