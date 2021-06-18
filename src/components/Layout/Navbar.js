import React, { useEffect, useState } from 'react';
import {
  Collapse,
  Navbar as BSNavbar,
  NavbarToggler,
  Nav as BSNav,
  NavItem,
  Modal,
  ModalBody,
} from 'reactstrap';
import { useSelector } from 'react-redux';
import useActions from '../../hooks/useActions';
import { logout, login } from '../../actions/loginActions';
import logo from '../../assets/images/logo.jpg';
import default_user from '../../assets/images/default_user.png';
import discord_icon from '../../assets/images/login/discord-icon.svg';
import phone_message from '../../assets/images/login/phone-message.svg';
import { HashLink as Link } from 'react-router-hash-link';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { API_ENDPOINTS } from '../../constants/api';
import axios from '../../config/axios.config';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router';

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
  const location = useLocation();
  const actions = useActions({ login });
  const loginState = useSelector((state) => state.loginState);
  const connectWithDiscordOpen = loginState.user && !loginState.user.discord_id;
  const [connectOpen, setConnectOpen] = useState(false);
  const toggleConnectOpen = () => setConnectOpen(!connectOpen);
  const [botToken, setBotToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTokenLoading, setIsTokenLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      const params = new URLSearchParams(location.search);
      const code = params.get('code');

      if (code) {
        setConnectOpen(true);
        setIsLoading(true);
        try {
          await axios.post(API_ENDPOINTS.CONNECT_DISCORD, {
            code,
          });
          const userResp = await axios.get(API_ENDPOINTS.CURRENT_USER);
          actions.login({
            ...userResp.data.data.attributes,
          });
          setConnectOpen(false);
          toast.success('Successfully connected');
        } catch (e) {
          // can break anywhere lmao
          const message = e?.response?.data?.data?.attributes?.error?.message;
          toast.error(message || 'Could not connect');
        }
        setIsLoading(false);
      }
    };

    load();
  }, [actions, location]);

  useEffect(() => {
    const connectRequest = async () => {
      setIsLoading(true);
      setIsTokenLoading(true);
      try {
        await axios.post(API_ENDPOINTS.CONNECT_DISCORD, {
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
      } catch (e) {
        // can break anywhere lmao
        const message = e?.response?.data?.data?.attributes?.error?.message;
        toast.error(message || 'Could not connect');
      }
      setIsLoading(false);
      setIsTokenLoading(false);
    };

    // if entered token's length is 40 automatically send connect request
    if (botToken.length === 40) {
      connectRequest();
    }
  }, [actions, botToken]);

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

      <Modal
        isOpen={connectOpen}
        toggle={toggleConnectOpen}
        contentClassName="border-0"
        size="lg"
        centered
      >
        <div
          className="py-5 px-4 modal-header d-flex align-items-center"
          style={{ backgroundColor: '#e3d2ff' }}
        >
          <h2 className="modal-title" style={{ color: '#404040' }}>
            Connect with Discord
          </h2>
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={toggleConnectOpen}
            style={{ color: '#8264B4' }}
          >
            <span className="h1" aria-hidden="true">
              ×
            </span>
          </button>
        </div>

        <ModalBody className="d-flex flex-wrap align-items-stretch justify-content-center">
          <div className="d-flex">
            <div className="mx-3 mt-2 mb-3 d-flex flex-column align-items-center">
              <div className="text-center text-muted mb-3">
                {isLoading && !isTokenLoading ? (
                  'Loading...'
                ) : (
                  <>
                    Continue with
                    <br />
                    discord
                  </>
                )}
              </div>
              <button
                type="button"
                className="btn p-4 rounded-lg"
                style={{ boxShadow: '0px 0px 20px #00000033' }}
                disabled={isLoading}
                onClick={() => {
                  window.location = API_ENDPOINTS.DISCORD_LOGIN_REDIRECT;
                }}
              >
                <img
                  src={discord_icon}
                  alt="Discord icon"
                  style={{ height: '6rem', width: '6rem' }}
                />
              </button>
            </div>

            <p className="d-flex flex-column align-items-center text-center mx-3 mb-0">
              <div style={{ flex: 1, width: 1, background: '#c3c3c3' }} />
              <span className="my-2" style={{ color: '#7b7b7b' }}>
                OR
              </span>
              <div style={{ flex: 1, width: 1, background: '#c3c3c3' }} />
            </p>

            <div className="mx-3 mt-2 mb-3 d-flex flex-column align-items-center">
              <div className="text-center text-muted mb-3">
                {isTokenLoading ? (
                  'Loading...'
                ) : (
                  <>
                    Connect with
                    <br />
                    token
                  </>
                )}
              </div>
              <button
                type="button"
                className="btn p-4 rounded-lg"
                style={{ boxShadow: '0px 0px 20px #00000033' }}
                disabled={isLoading}
              >
                <img
                  src={phone_message}
                  alt="Token"
                  style={{ height: '6rem', width: '6rem' }}
                />
              </button>
            </div>
          </div>

          <div className="form-group mt-2 mb-3 mx-3" style={{ flex: 1 }}>
            <label htmlFor="bot_token" className="sr-only">
              Your token
            </label>
            <input
              className="form-control bg-light form-control-lg"
              type="text"
              name="bot_token"
              id="bot_token"
              placeholder="Enter your token"
              autoComplete="false"
              autoFocus={true}
              value={botToken}
              onChange={(e) => setBotToken(e.target.value)}
              disabled={isLoading}
            />
            <div className="h6 mt-4">How to get token:</div>
            <ul>
              <li className="my-2">
                Open <a href="https://discord.gg/8zEqRuhH">Ask a bot Channel</a>
              </li>
              <li className="my-2">
                Run <code className="bg-light rounded mx-1">dn-connect</code>{' '}
                command
              </li>
              <li className="my-2">The bot will send you your token</li>
            </ul>
          </div>
        </ModalBody>
      </Modal>
    </Collapse>
  );
};

export default Navbar;