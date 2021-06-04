import React, { useState } from 'react';
import {
  Collapse,
  Navbar as BSNavbar,
  NavbarToggler,
  Nav as BSNav,
  NavItem,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
import { useSelector } from 'react-redux';
import useActions from '../hooks/useActions';
import { logout, login } from '../actions/loginActions';
import logo from '../assets/images/logo.jpg';
import default_user from '../assets/images/default_user.png';
import { HashLink as Link } from 'react-router-hash-link';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { API_ENDPOINTS } from '../constants/api';
import axios from '../config/axios.config';
import { toast } from 'react-toastify';

const homeMenuItems = [
  {
    title: 'Vision',
    to: '/#our-vision',
  },
  {
    title: 'Curriculum',
    to: '/#curriculum',
  },
  {
    title: 'Join Now',
    to: '/#community',
  },
  {
    title: 'FAQs',
    to: '/faqs#read',
  },
];

const loginMenuItems = [
  {
    title: 'Challenges',
    to: '/challenges',
  },
  {
    title: 'Leaderboard',
    to: '/leaderboard',
  },
  {
    title: 'Groups',
    to: '/groups',
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const loginState = useSelector((state) => state.loginState);
  const actions = useActions({ logout });

  const toggle = () => setIsOpen(!isOpen);

  const navItems = loginState.loggedIn ? loginMenuItems : homeMenuItems;

  const offsetScroll = (e, offset) => {
    window.scroll({
      top: e.offsetTop - offset,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <BSNavbar color="white" light expand="md" className="shadow-sm">
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="Devsnest logo"
            height="72"
            width="72"
            className="d-inline-block align-top nav-logo"
          />
        </Link>

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          {!loginState.isLoading && (
            <BSNav navbar>
              {navItems.map((item, index) => (
                <NavItem key={index}>
                  <Link
                    to={item.to}
                    className="nav-link"
                    onClick={() => setIsOpen(false)}
                    scroll={(e) => offsetScroll(e, 70)}
                  >
                    {item.title}
                  </Link>
                </NavItem>
              ))}

              {loginState.loggedIn ? (
                <NavItem className="nav-item-profile">
                  <UncontrolledDropdown>
                    <DropdownToggle tag="div" className="nav-link">
                      <img
                        src={loginState.user.image_url || default_user}
                        height="36"
                        width="36"
                        className="rounded-pill"
                        alt={loginState.user.name}
                      />
                      <span className="ml-3">{loginState.user.name}</span>
                    </DropdownToggle>
                    <DropdownMenu className="nav-menu">
                      <Link to="/" className="dropdown-item">
                        Dashboard
                      </Link>
                      <DropdownItem divider />
                      <DropdownItem tag="div" onClick={() => actions.logout()}>
                        Logout
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavItem>
              ) : (
                <NavItem>
                  <Link
                    className="nav-link"
                    to="/login"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                </NavItem>
              )}
            </BSNav>
          )}
        </Collapse>
      </BSNavbar>
    </>
  );
}

export const ConnectWithDiscordBanner = () => {
  const actions = useActions({ login });
  const loginState = useSelector((state) => state.loginState);
  const connectWithDiscordOpen = loginState.user && !loginState.user.discord_id;
  const [connectOpen, setConnectOpen] = useState(false);
  const toggleConnectOpen = () => setConnectOpen(!connectOpen);
  const [botToken, setBotToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const connectRequest = async () => {
    setIsLoading(true);
    try {
      await axios.put(API_ENDPOINTS.UPDATE_GOOGLE_USER, {
        data: {
          attributes: {
            bot_token: botToken,
          },
          type: 'users',
        },
      });
      const userResp = await axios.get(API_ENDPOINTS.CURRENT_USER);
      actions.login({
        ...userResp.data.data.attributes,
      });
      setConnectOpen(false);
      toast.success('Successfully connected');
    } catch (e) {}
    setIsLoading(true);
  };

  return (
    <Collapse isOpen={connectWithDiscordOpen}>
      <div className="bg-primary px-4 py-3 ">
        <div className="container d-flex align-items-center">
          <div className="ml-2 text-light" style={{ flex: 1 }}>
            Connect your account with discord to use our discord bot.
          </div>
          <button
            className="btn bg-light text-dark rounded-lg"
            onClick={toggleConnectOpen}
          >
            Connect with Discord
          </button>
        </div>
      </div>

      <Modal isOpen={connectOpen} toggle={toggleConnectOpen}>
        <ModalHeader toggle={toggleConnectOpen}>
          Connect with Discord
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label htmlFor="bot_token">Your token</label>
            <input
              className="form-control"
              type="text"
              name="bot_token"
              id="bot_token"
              autoComplete="false"
              autoFocus={true}
              value={botToken}
              onChange={(e) => setBotToken(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary btn-block"
            disabled={isLoading}
            onClick={connectRequest}
          >
            {isLoading ? 'Loading...' : 'Connect with token'}
          </button>
          <p className="d-flex align-items-center text-center my-2">
            <div style={{ flex: 1, height: 1, background: '#f2f2f2' }} />
            <span>OR</span>
            <div style={{ flex: 1, height: 1, background: '#f2f2f2' }} />
          </p>
          <button
            type="button"
            className="btn btn-primary btn-block"
            disabled={isLoading}
            onClick={() => {
              window.location = API_ENDPOINTS.DISCORD_LOGIN_REDIRECT;
            }}
          >
            Continue with discord
          </button>
        </ModalBody>
      </Modal>
    </Collapse>
  );
};

export default Navbar;
