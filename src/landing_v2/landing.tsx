import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import classNames from 'classnames';

import './landing.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const mentorsData = [
  {
    name: 'Vedansh Garg',
    company: 'Ex - HackerRank',
    img: './mentor_ved.jpg',
    linkedin: 'https://www.linkedin.com/in/vedanshgarg/',
    descp:
      'Vedansh was a Senior Engineer at Hackerrank. In the last 5 years, he scaled the HackerRank community from 500k to 10M Developers. He was also part of Navgurukul a Non Profit where he has worked on curriculum, jobs pipeline, and mentoring 100+ underprivileged students on software engineering.',
  },
  {
    name: 'Naman',
    company: 'HackerRank',
    img: './mentor_nam_f.jpg',
    linkedin: 'https://www.linkedin.com/in/naman03malhotra/',
    descp:
      'Naman Malhotra is a software enginner at HackerrRank with a strong focus on real-life problem solving and an open-source enthusiast.',
  },
  {
    name: 'Sai Ahladni Tripathy',
    company: 'Ex - Amazon',
    img: './mentor_sai.jpg',
    linkedin: 'https://www.linkedin.com/in/ahladini/',
    descp:
      'Sai was a software developer at Amazon. She is an Alumni of BITS Pilani. She has previously worked as a placement co-ordinator at BITS and understands the recruitment market really well. Apart from this Sai enjoys playing with her paw-friend.',
  },
];

function Landing() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="landing-v2">
      {/* <section className="nav-bar">
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
      </section> */}
      <section className="hero rowx dark">
        <div className="hero__left-side colx">
          <div className="hero__logo-container"></div>
          <img src="./hero2.png" alt="hero" />
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
              <a href="#mentors" className="nav-item">
                Mentors
              </a>
              <a href="#curriculum" className="nav-item">
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
            <div className="hero__heading">
              Education which makes you financially independent.
            </div>
            <div className="descpx hero__descp">
              A mentorship program designed to help you get your dream job. It
              evolves as per your needs to mold you into a kickass coder.
            </div>
            <a href="#unique" className="btnx btnx-primary">
              Learn More
            </a>
          </div>
        </div>
      </section>
      <section className="unique" id="unique">
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
                  Everyone is different and so are your talents and problems. We
                  nurture you through personalized attention into the best you.
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
                  Reading the whole Cormen is a nightmare, only Sheldon can
                  handle so much of theory. Our intensive hands on 10+ projects,
                  makes it exciting.
                </div>
              </div>
            </div>

            <div className="unique__unit colx">
              <div className="unique__left-side">
                <img src="./unique3.svg" alt="" />
              </div>
              <div className="unique__right-side">
                <div className="unique__right-side__heading">
                  Guest Tech Talk
                </div>
                <div className="unique__right-side__descp">
                  Our “Cool Tech Talks” by industry experts on trending
                  technologies keep you upgraded to the latest version.
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
                  We understand that you learn at your own pace. Our program
                  gives you that extra boost when you are down.
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
                  We end your stage fear of interviews, by having mock "live
                  like" interviews by mentors from FAANG type companies.
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
              <div className="curriculum__orange">
                Basic Programming and DSA
              </div>
              <div className="curriculum__descp">
                <ul>
                  <li>Learning python and Logical Thinking. </li>
                  <li>
                    Deep dive into Algorithms and Data Structures (150+
                    questions)
                  </li>
                  <li>Basics of Web using HTML, CSS, JS and GIT.</li>
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
              <div className="curriculum__purple">Week 11-17</div>
              <div className="curriculum__orange">WebDev - Backend</div>
              <div className="curriculum__descp">
                <ul>
                  <li>Understanding Rest using NodeJS and Express.</li>
                  <li>Building 3+ projects using Node, Mysql and Docker.</li>
                  <li>
                    Building and Deploying a full fledged industry grade backend
                    Web app.
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
              <div className="curriculum__purple">Week 18-24</div>
              <div className="curriculum__orange">WebDev - Frontend</div>
              <div className="curriculum__descp">
                <ul>
                  <li>Understanding fundamental concepts of JavaScript.</li>
                  <li>
                    Building 3+ projects using React, Redux, JS and Docker.
                  </li>
                  <li>
                    Building and Deploying a full fledged Industry grade
                    frontend Web app.
                  </li>
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
              <div className="curriculum__purple">Week 25-32</div>
              <div className="curriculum__orange">Interview Prep</div>
              <div className="curriculum__descp">
                <ul>
                  <li>System Design and CS Fundamentals</li>
                  <li>
                    Career Counselling sessions and polishing your Resume and
                    Cover Letter
                  </li>
                  <li>10 + Mock Interviews by Industry Experts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <div className="headingx mentors__heading">Meet your mentors</div>
        <Carousel>
          {mentorsData.map((mentor) => {
            const { name, company, descp, img, linkedin } = mentor;
            return (
              <Carousel.Item>
                <section id="mentors" className="mentors">
                  <div className="mentors__container">
                    <div className="mentors__left-side">
                      <img className="mentors__image" src={img} />
                    </div>
                    <div className="mentors__right-side">
                      <div className="mentors__name">{name}</div>
                      <div className="mentors__company">{company}</div>
                      <div className="mentors__descp">{descp}</div>
                      <div className="mentors__linkedin">
                        <a
                          href={linkedin}
                          target="__blank"
                          rel="noopener noreferrer"
                        >
                          <img className="linkedin" src="./linkedin.svg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      <section className="plan">
        <div className="headingx plan__heading">
          Start now with the our flexible plans
        </div>

        <div className="plan__container">
          <div className="plan__unit plan__active">
            <div className="plan__card-heading">Postpaid</div>
            <div className="plan__card-heading-main">
              Pay only when you get a job of min 5LPA
            </div>
            <div className="plan__card-main-cost">
              1,50,000 <span className="gst">+ GST</span>
            </div>
            <div className="plan__card-breakdown">BREAK DOWN</div>
            <div className="plan__card-breakdown-container">
              <div className="plan__card-breakdown-container__left-side">
                <div className="plan__card-breakdown-cost">20,000</div>
                <div className="plan__card-breakdown-for">Registration fee</div>
              </div>
              <div className="plan__card-breakdown-container__center">+</div>
              <div className="plan__card-breakdown-container__right-side">
                <div className="plan__card-breakdown-cost">1,30,000</div>
                <div className="plan__card-breakdown-for">
                  Tuition Fee (ISA)
                </div>
              </div>
            </div>
            <div className="plan__card-tnc">
              15% of your monthly salary capping upto 130000 if Job {' > '}
              5lpa.
            </div>
            <div className="plan__card-cta">
              <a
                href="https://docs.google.com/forms/d/1FDUajSVjIgG-7hBBl5ekOpHxurVi-DvqQ1AcbwiJpuI/edit?ts=5f4a681a"
                target="_blank"
                rel="noopener noreferrer"
                className="btnx btnx-primary block plan__card-cta"
              >
                Request Invite
              </a>
            </div>
          </div>
          <div className="plan__unit">
            <div className="plan__card-heading">Prepaid</div>
            <div className="plan__card-heading-main">
              Pay all upfront and nothing after placement
            </div>
            <div className="plan__card-main-cost">
              80,000 <span className="gst">+ GST</span>
            </div>
            <div className="plan__card-breakdown">BREAK DOWN</div>
            <div className="plan__card-breakdown-container">
              <div className="plan__card-breakdown-container__left-side">
                <div className="plan__card-breakdown-cost">20,000</div>
                <div className="plan__card-breakdown-for">Registration fee</div>
              </div>
              <div className="plan__card-breakdown-container__center">+</div>
              <div className="plan__card-breakdown-container__right-side">
                <div className="plan__card-breakdown-cost">60,000</div>
                <div className="plan__card-breakdown-for">Tuition Fee</div>
              </div>
            </div>
            <div className="plan__card-tnc">Save on cost by paying upfront</div>
            <div className="plan__card-cta">
              <a
                href="https://docs.google.com/forms/d/1FDUajSVjIgG-7hBBl5ekOpHxurVi-DvqQ1AcbwiJpuI/edit?ts=5f4a681a"
                target="_blank"
                rel="noopener noreferrer"
                className="btnx btnx-primary-outine block plan__card-cta"
              >
                Request Invite
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="cool">
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
      </section> */}

      <Carousel>
        <Carousel.Item>
          <section className="stories">
            {/* <div className="headingx stories__heading">Student Speaks</div> */}
            <div className="stories__container">
              <div className="stories__left-side">
                <img src="./abhishek.jpeg" />
              </div>
              <div className="stories__right-side">
                <div className="descpx stories__descp">
                  <p>
                    The curriculum here is very exhaustive helping me be a
                    better developer. The Mock Interviews feedbacks from
                    Industry experts and continous guidance have helped me
                    become better at giving interviews.
                  </p>
                  <p>
                    The best thing which I felt about this program was the 1:1
                    mentorship sessions from Vedansh Sir and Sai maam. It has
                    been only 3 months since I have joined this program and I
                    already have 2 offers of 8LPA each. I will be joining one of
                    them next week
                  </p>
                </div>
                <div className="stories__cta">Abhishek Rai</div>
              </div>
            </div>
          </section>
        </Carousel.Item>
        <Carousel.Item>
          <section className="stories">
            {/* <div className="headingx stories__heading">Student Speaks</div> */}
            <div className="stories__container">
              <div className="stories__left-side">
                <img src="./priya.png" />
              </div>

              <div className="stories__right-side">
                <div className="descpx stories__descp">
                  <p>
                    The mentors here don't teach you solutions, they teach you
                    how to think towards it. The self-assessment chart on the
                    website and weekly targets along with guest lectures on
                    weekends from industry experts keep me motivated.
                  </p>
                  <p>
                    I was an average student but here I realized I m capable of
                    far better things. My productivity grew multiple folds from
                    day 1 itself. Joining this is one of the best decisions of
                    my life. Thank you Devsnest!
                  </p>
                </div>
                <div className="stories__cta">Priya Mishra</div>
              </div>
            </div>
          </section>
        </Carousel.Item>
        <Carousel.Item>
          <section className="stories">
            {/* <div className="headingx stories__heading">Student Speaks</div> */}
            <div className="stories__container">
              <div className="stories__left-side">
                <img src="./vashu.png" />
              </div>
              <div className="stories__right-side">
                <div className="stories__descp">
                  <p>
                    Devsnest is by all measures the best investment I have made
                    in my last 4 years. Within past few months, I'm surprised to
                    see the positive changes not only in my web dev and CS
                    skills but within myself as an individual as well.
                  </p>
                  <p>
                    Truly, I owe it all to Devnest's program and I would
                    wholeheartedly recommend it to anybody considering it,
                    especially those with a desire to improve and strengthen
                    their capabilities, as a fully fledge software engineer,
                    everyday.
                  </p>
                </div>
                <div className="stories__cta">Vashudev Dhamma</div>
              </div>
            </div>
          </section>
        </Carousel.Item>
      </Carousel>

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
