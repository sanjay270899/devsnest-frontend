import React, { useState } from 'react';
import {
  Collapse,
  Navbar as BSNavbar,
  NavbarToggler,
  Nav as BSNav,
  NavItem,
} from 'reactstrap';
import { useSelector } from 'react-redux';
import logo from '../assets/images/logo.jpg';
import default_user from '../assets/images/default_user.png';
import { HashLink as Link } from 'react-router-hash-link';

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
    title: 'Challanges',
    to: '/challanges',
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

  const toggle = () => setIsOpen(!isOpen);

  const navItems = loginState.loggedIn ? loginMenuItems : homeMenuItems;

  return (
    <BSNavbar color="white" light expand="md" className="shadow-sm">
      <Link to="/" className="navbar-brand">
        <img
          src={logo}
          alt="Devsnest logo"
          height="72"
          width="72"
          class="d-inline-block align-top nav-logo"
        />
      </Link>

      <NavbarToggler onClick={toggle} />

      <Collapse isOpen={isOpen} navbar>
        <BSNav className={!loginState.loggedIn ? '' : ''} navbar>
          {navItems.map((item) => (
            <NavItem key={item.id}>
              <Link
                to={item.to}
                smooth
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            </NavItem>
          ))}

          {loginState.isLoading ? null : loginState.loggedIn ? (
            <NavItem className="nav-item-profile">
              <Link
                to="/dashboard"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                <img
                  src={loginState.user.image_url || default_user}
                  height="36"
                  width="36"
                  className="rounded-pill"
                  alt={loginState.user.name}
                />
                <span className="ml-3">{loginState.user.name}</span>
              </Link>
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
      </Collapse>
    </BSNavbar>
  );
}

export default Navbar;