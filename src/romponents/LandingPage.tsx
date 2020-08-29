import React from 'react';
import Armstrong from '../images/Armstrong-Pame.jpg';
import Back3 from '../images/back3.jpg';
import girl from '../images/dummygirl.png';
import image from '../images/pp1.jpg';
import { Navbar, Nav } from 'react-bootstrap';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div>
      <Navbar className="navbar navbar-custom">
        <Navbar.Brand href="#home" className="hyy">
          Devnest
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <div
            className="collapse navbar-collapse "
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav ml-auto">
              <li>
                <a
                  href="https://docs.google.com/forms/d/1FDUajSVjIgG-7hBBl5ekOpHxurVi-DvqQ1AcbwiJpuI/viewform?edit_requested=true"
                  style={{ textDecoration: 'none', color: '#fff' }}
                >
                  Apply
                </a>
              </li>
              <li>
                <a href="#">Curriculum</a>
              </li>
              <li style={{ borderRight: 'none' }}>
                <a href="#">Team </a>
              </li>
              <li
                style={{
                  backgroundColor: '#F1A615',
                  clipPath: 'polygon(31% 0, 100% 0, 100% 100%, 0% 100%)',
                  alignItems: 'center',
                  height: '50px ',
                }}
              >
                <i className="fa fa-user-circle-o icon"> </i>
              </li>
            </ul>
          </div>
        </Navbar.Collapse>
      </Navbar>

      {/* section 1 */}
      <section className=" container-fluid program">
        <div className="container">
          <div className="prgm_head">
            <h2>PRogram features</h2>
          </div>
        </div>
        <div className="container">
          <div className="row pgrm_row_1">
            <div className="col-lg-4">
              <div>
                <button type="button" className="prgrm_btn_1">
                  LIVE CLASS EVERYDAY
                </button>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <button type="button" className="prgrm_btn_1">
                  {' '}
                  One to one guidance{' '}
                </button>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <button type="button" className="prgrm_btn_1 prgrm_btn">
                  Mock interviews every weekend
                </button>
              </div>
            </div>
          </div>
          <div className="row pgrm_row_2">
            <div className="col-lg-6">
              <div>
                <button type="button" className="prgrm_btn_2 prgm_btn_f">
                  industry focused learning model
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <button type="button" className="prgrm_btn_2 prgm_btn_p">
                  thriving community to seek help
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </div> */}

      {/* section 2 */}

      <div className="container-fluid">
        <section className="curriculum">
          <div className="dev_head">CURRICULUM</div>
          <div className="dev-curriculum">
            <div className="module_curriculum">
              <div className="module_div">
                <div className="module_head">
                  <h3>Weeks 1-6</h3>
                </div>
                <div className="module_text">
                  Algorithms and Data Structures with 150+ problems.
                </div>
              </div>
            </div>
            <div className="module_curriculum1">
              <div className="module_div">
                <div className="module_head">
                  <h3>Weeks 7-13</h3>
                </div>
                <div className="module_text">
                  Learning Web development basics such as HTML, CSS, JavaScript
                  and GIT with hands-on projects.
                </div>
              </div>
            </div>
            <div className="module_curriculum1">
              <div className="module_div ">
                <div className="module_head">
                  <h3>Weeks 14-18</h3>
                </div>
                <div className="module_text">
                  Getting expertise in writing React through multiple
                  industry-level project and one major project
                </div>
              </div>
            </div>
            <div className="module_curriculum1">
              <div className="module_div ">
                <div className="module_head">
                  <h3>Weeks 19-24</h3>
                </div>
                <div className="module_text">
                  Covering up CS Fundamentals and principles of System Design
                  and Choosing and Working on your Industry grade Capstone
                  project.
                </div>
              </div>
            </div>
            <div className="module_curriculum1">
              <div className="module_div ">
                <div className="module_head">
                  <h3>Weeks 25-30 </h3>
                </div>
                <div className="module_text">
                  Starting up with your mock interviews from well know Industry
                  experts and Connecting you with various companies and
                  scheduling your interviews.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* section 2 */}

      <section className="schedule">
        <div className="container p-5">
          <div className="row scrum_row">
            <div className="col-lg-4">
              <button type="button" className="scrum_btn">
                {' '}
                Stand-up
              </button>
            </div>
            <div className="col-lg-4 scrum_btn_2">
              <button type="button" className="scrum_btn scrum_2">
                {' '}
                Warm-up
              </button>
            </div>
            <div className="col-lg-4 scrum_btn_2">
              <button type="button" className="scrum_btn scrum_3">
                {' '}
                Pair Programming
              </button>
            </div>
            <div className="col-lg-6 scrum_btn_3">
              <button type="button" className="scrum_btn scrum_4">
                {' '}
                Project Time
              </button>
            </div>
            <div className="col-lg-6 scrum_btn_3">
              <button type="button" className="scrum_btn scrum_5">
                {' '}
                Evening Class
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <div className="container">
        <h1 className="PAYMENTPLAN_Title">PAYMENT PLAN </h1>
        <div className="row">
          <div className="col-md-6">
            <div className="card cardStyle ">
              <p className="POSTPAID">POST-PAID</p>
              <img className="card-img" src={Back3} />
              <div className="borderstyle">
                <h4 className="Money text-center"> 1,50,000 /- </h4>
              </div>
              <div className="card-block">
                <h4 className="card-title"></h4>
                <p className="card-text Text">
                  <p>Total Fees: 2,00,000 + GST </p>
                  <p>
                    {' '}
                    Registration fees: 20,000 (+18% GST) Non-refundable, paid
                    upfront
                  </p>
                  <p>
                    Tuition Fee Portion: 1,30,000 + GST Pay only when you get a
                    job of min 5 LPA
                  </p>
                  <p>
                    Pay using monthly payments: 15% of your monthly salary
                    capped at 130000 + GST.
                  </p>
                  <p>
                    ISA Breach Recovery Cheque 50,000 Executed only in the case
                    of ISA Breach
                  </p>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card cardStyle">
              <p className="POSTPAID">POST-PAID</p>
              <img className="card-img" src={Back3} />
              <div className="borderstyle">
                <h4 className="Money text-center"> 80,000 /-</h4>
              </div>
              <div className="card-block">
                <h4 className="card-title"></h4>
                <p className="card-text Text">
                  <p>Total Fees: 1,20,000 + GST 80,000 + GST </p>
                  <p>
                    Discount for early batches: 40,000 Use this option to
                    completely skip the ISA model
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt">
        <div className="row text-center">
          <div className="col">
            <button
              type="button"
              className="btn btn-secondary"
              style={{ marginRight: '20px', width: '250px' }}
            >
              ISA GUIDELINES
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              style={{ marginLeft: '20px', width: '250px' }}
            >
              FAQs{' '}
            </button>
          </div>
        </div>
      </div>
      {/* section 4 */}

      <div className="container" style={{ padding: '50px' }}>
        <div className="row registration">
          <div className="col-sm-9">
            <p className="BatchText">
              Batch 2 registration starts 10th Sept, 2020{' '}
            </p>
          </div>
          <div className="col-sm-3">
            <button type="button" className="buttonA">
              <a
                href="https://docs.google.com/forms/d/1FDUajSVjIgG-7hBBl5ekOpHxurVi-DvqQ1AcbwiJpuI/viewform?edit_requested=true"
                style={{ textDecoration: 'none', color: '#000' }}
              >
                APPLY NOW
              </a>{' '}
            </button>
          </div>
        </div>
      </div>

      {/* section 5 */}

      <div id="facilities">
        <div className="container">
          <div className="title">
            <h1>Team</h1>
            <div className="row">
              <div className="col-md-4">
                <div className="card text-center card1">
                  <img src={image} className="card-img-top"></img>
                  <div className="card-block">
                    <h5 className="card-title"> Vedansh</h5>
                    <h5 className="cardTitle"> CEO,Co-founder</h5>
                    <p className="card-text">
                      Senior Software
                      <br /> Developer, Hackerank
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card text-center card1">
                  <img src={girl} className="card-img-top"></img>
                  <div className="card-block">
                    <h5 className="card-title"> Sai Ahladini</h5>
                    <h5 className="cardTitle"> Operations</h5>
                    <p className="card-text">
                      Software <br /> Developer, Amazon{' '}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card text-center card1">
                  <img src={girl} className="card-img-top"></img>
                  <div className="card-block">
                    <h5 className="card-title"> Prachi</h5>
                    {/* <h5 className="cardTitle"> CEO,Co-founder</h5> */}
                    <p className="card-text">KIET</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 6 */}

      <div className=" container-fluid text-md-left Ft">
        <div className=" container">
          <div className="footer">
            <div className="row">
              <div className="col-md-4">
                <ul className="list-unstyled ">
                  <li>
                    <a href="#">DEVSNEST</a>
                  </li>
                  <li>
                    <a href="#">H-20,Some Campus</a>
                  </li>
                  <li>
                    <a href="#">Lucknow, UP </a>
                  </li>
                  <li>
                    <a href="#">219902</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-unstyled ">
                  <li>
                    <a href="#">CONTACT</a>
                  </li>
                  <li>
                    <a href="#">1800-2XX-32XX</a>
                  </li>
                  <li>
                    <a href="#">contact-us@devsnest.in</a>
                  </li>
                  <li>
                    <a href="#">Link 4</a>
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
                    <a href="#">TESTIMONIALS</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">PRIVACY POLICY </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
