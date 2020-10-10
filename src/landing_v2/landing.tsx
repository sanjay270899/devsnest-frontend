import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import classNames from 'classnames';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import './landing.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const mentorsData = [
  {
    name: 'Vedansh Garg',
    company: 'Ex - HackerRank',
    img: './mentor_ved.jpg',
    linkedin: 'https://www.linkedin.com/in/vedanshgarg/',
    descp: `Vedansh was a Senior Engineer at Hackerrank. In the last 5 years, he scaled the HackerRank community from 500k to 10M Developers.

      He was also part of Navgurukul a Non Profit where he has worked on curriculum, jobs pipeline, and mentoring 100+ underprivileged students on software engineering.`,
  },
  {
    name: 'Naman Malhotra',
    company: 'HackerRank',
    img: './mentor_nam_f.jpg',
    linkedin: 'https://www.linkedin.com/in/naman03malhotra/',
    descp: `Hi, I am Naman Malhotra. I still remember the first line of code I wrote when I was 13. Since then, I have worked with many startup founders across the continents.

    I co-founded two startups; one of them was in the Ed-Tech space, and the other was in blockchain fintech. In both of them, I lead the entire tech end to end and product to some extent.

    I strongly believe that if you have the right set of skills, your background, traditional education, etc hardly matters. Given that you are ready to work your ass off.`,
  },
  {
    name: 'Sai Ahladni Tripathy',
    company: 'Ex - Amazon',
    img: './mentor_sai.jpg',
    linkedin: 'https://www.linkedin.com/in/ahladini/',
    descp: `Sai was a software developer at Amazon. She is an Alumni of BITS Pilani.

      She has previously worked as a placement co-ordinator at BITS and understands the recruitment market really well.

      Apart from this Sai enjoys playing with her paw-friend.`,
  },
];

const faqsData = [
  {
    question: `What is the ISA model?`,
    answer: `ISA is the Income Share Agreement. It is a payment model, where you pay us a percentage of your income. That is you pay the course fees only after you start earning with a minimum annual package of 5LPA.

While enrolling with ISA, you will only pay the registration fee which is 20k at the time of enrolling with us. And then until you are placed with a min package of 5LPA. You pay us 15% of your monthly salary for 2 years or until a max cap of 1.3Lakhs is reached. If you don’t get a job of 5LPA within 1 year of completion of course ISA expires.

The idea here is we win together, as we get the payment only after our teachings  and skills embraced have enabled you to earn a good offer.`,
  },
  {
    question: `How much do I have to pay for ISA?`,
    answer: `You pay 15% of your monthly salary till 2 years, with a max cap being 1.3L + GST.  i,e the ISA ends as soon as you have paid us back 1.3L + GST.

In this way, you end up paying only 1.3 lakh + GST no matter how high is your salary,

Example

Your CTC is 12LPA, which makes your monthly salary 1L, so you pay us 15% of 1L i.e. 15,000 per month. Ideally you should pay us for 2 years, but with 15,000 ISA 1.3L + GST is reached in 9 months. So you will stop paying us after 9 months.`,
  },
  {
    question: `From when and how long will I have to make the ISA payments?`,
    answer: `Your payment  starts after you join your first job and get your first salary. ISA payments last for the next 2 years or until you have paid us back 1.3L + GST.`,
  },
  {
    question: `Why is ISA payment more than upfront payment?`,
    answer: `Since the risk involved here is high, we ensure the amount is proportionate.`,
  },
  {
    question: `Is the % charged on CTC?`,
    answer: `Yes we charge the percentage on CTC.`,
  },
  {
    question: `What if I don’t get placed with a 5lpa offer?`,
    answer: `We trust our process and teaching, and make sure this never happens. However if for any reason, unfortunately you do not have an offer paying more than 5LPA until 1 year, you do not have to pay us anything.

ISA is valid for 1 year, as we believe our mentorship can help you crack a better paying job  soon if not now. You can always keep looking for better opportunities within Devsnest’s hiring network.

Post 1 year of completion the ISA expires, and you won't be liable to pay anymore.`,
  },
  {
    question: `Can I see the copy of ISA?`,
    answer: `Yes, definitely.
As you go through the enrollment process post your selection,  you sign the documents and receive a copy of it at the end.`,
  },
  {
    question: `Do I need to submit any document/guarantee?`,
    answer: `Since we are going to work with you and mentor you to become a better developer, we would need some security collateral to cover any risks. And for this you would have to submit 3 Bank Account Cheques. 2 of ₹ 50,000 and one of  ₹ 30,000.
We will not encash but in case of any ISA breach, we would use this to cover the fees.
Other than recovery cheques we don't need any document.`,
  },
  {
    question: `What is an ISA breach?`,
    answer: `An ISA breach happens when you do not follow any of the terms & conditions written in the ISA.
What and when will the ISA recovery cheques be used?
We want to run on trust, and would avoid this as much as we can, but Incases we have to, we would use it in cases of ISA Breach, or when you do not pay back any invoiced amount.

After completion of ISA, or complete repayment, we will return/destroy the cheques.`,
  },
  {
    question: `Do I have to submit any documents as a security?`,

    answer: `No you wouldn't need to submit any documents/hard copy, only the ISA recovery cheques are required,`,
  },
  {
    question: `How will you verify my income?`,
    answer: `As per the ISA, you will be legally bound to furnish all the documents relevant to your Income such as Offer Letter, Salary Slips, Income Tax Returns, Bank Statements, etc.`,
  },
  {
    question: `What will happen if I get fired or quit the job?`,
    answer: `You still have to keep paying.

Our training helped you crack the job, and we made sure you reach that level and keep growing in your career.
Post that it would be your choice, and between you and your company. We believe that we have embarked on the required training and it wouldn't be difficult for you to find the next job either.

However if you wanna find something through Devsnest network, we would be more than happy to help our alumni.`,
  },
  {
    question: `What happens if I change my job?`,

    answer: `Yes, you will have to keep paying. Our training and responsibility is to get you the first job. Post that you would grow with your skill and effort.`,
  },
  {
    question: `What happens if I join a job with a package less than 5LPA?`,
    answer: `In the rare case that you don't get a job of Rs. 5 LPA, your repayment will not start.

  Your repayment will only start if you get a job >= 5 LPA within 1 year of completing the course. Your payment period will only be 15% till the 2nd year after the end of course.`,
  },
  {
    question: `What happens if I choose a job with less than 5LPA for personal reasons?`,
    answer: `If you have multiple offers, of which one is > 5LPA, you would have to pay us, irrespective of which one you choose.

Since we have equipped you to crack a 5LPA job which is greater than minimum guaranteed, ISA will kick off irrespective of which offer you accept.`,
  },
  {
    question: `What happens if you drop out or are kicked out of the course?`,
    answer: `Within 2 weeks:
 You do not have to pay anything. However your registration fees 20k remains nonrefundable, as you would have been provided with the study materials and other documents..

Post 2 Weeks:
In case you drop out after 2 weeks, an invoice until that time of the course will be raised to you, and you will have to pay it within 30days.
90% attendance is mandatory and projects are compulsory, except for exceptional cases. If you do not adhere to the requirements you might be laid off. Cases where you are laid off from the course the above invoice would apply.`,
  },
  {
    question: `What will happen if I do not pay the invoiced amount?`,
    answer: `As much as we would hate to do it, we would have to use the recovery cheques in case you do not pay the above amount. And in case they bounce and we can't recover the amount, legal actions would be taken.

We want to run an organisation on mutual trust and we would hate it if we would have to make such efforts, and we would like if you understand the same and help us both keep that trust up.`,
  },
  {
    question: `Can I pay all the amount together?`,

    answer: `We understand some of us would not want to have the liabilities of continuous instalments, of course you can pay the whole amount anytime, and we would love to offer you 10% off in case you choose to pay at once in the beginning.`,
  },
  {
    question: `What if I don't pay?`,

    answer: `As much as we would hate to do it, we would have to use your cheques in case you do not pay the above amount. And in case they bounce/we can't get our money, legal actions would be taken.

We want to run an organisation on mutual trust and we would hate it if we would have to make such efforts, and we would like if you understand the same and help us both keep that trust up.
If I get placed without the help of your placement cell, am I still obliged to pay?
If you get a job within 2 weeks from the start of your course, you don’t have to pay for anything. But after that time period, you’ll have to pay even if you get placed outside our hiring network.

We believe that during these 6-8 months you'll receive tremendous learnings which will help you crack interviews for software development jobs.`,
  },
  {
    question: `I already hold an offer with a package more than 5LPA, how does ISA work for me?`,
    answer: `We are happy to know you have been doing well and we believe we can add value. Maybe get you a better offer or help you go to the next level at your job. For such special cases you can reach out to us, and we can discuss in detail on a model that would work for us both.`,
  },
  {
    question: `I'm in my 2nd/3rd year, how will ISA work for me?`,
    answer: `We only have ISA for students who can be employed in the next 1 year of the course completion. For others we do not support ISA currently. But in case you are really interested in joining us, and won't be able to pay upfront, we can discuss this on a case to case basis. Feel free to reach out to us in that case. :)`,
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
              <a href="#mentors" className="nav-item">
                Mentors
              </a>
              <a href="#faqs" className="nav-item">
                FAQs
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
            <h1 className="hero__heading">
              Education which makes you financially{' '}
              <span className="color-purple ">independent.</span>
            </h1>
            <div className="descpx hero__descp">
              A mentorship program designed to help you get your dream job. It
              evolves as per your needs to mold you into a kickass developer.
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

      <div id="mentors">
        <div className="headingx mentors__heading">Meet your mentors</div>
        <Carousel>
          {mentorsData.map((mentor) => {
            const { name, company, descp, img, linkedin } = mentor;
            return (
              <Carousel.Item>
                <section className="mentors">
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
          Start now, pay only when you get a Job
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
                <img src="./vashu_f.png" />
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

      <section className="faq" id="faqs">
        <div className="headingx faq__heading">FAQs</div>
        <div className="faq__container">
          <Accordion>
            {faqsData.map((faq, index) => {
              const { question, answer } = faq;

              return (
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey={`${index}`}>
                    {question}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={`${index}`}>
                    <Card.Body>{answer}</Card.Body>
                  </Accordion.Collapse>
                </Card>
              );
            })}
          </Accordion>
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
