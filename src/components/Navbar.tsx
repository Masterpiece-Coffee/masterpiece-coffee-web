import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import logo from '../img/logo.jpg';
import navBanner from '../img/nav-banner.jpg';

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
`;

const MenuAndBannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #87402e;
  padding: 7px 0;
  a {
    margin: 0 20px;
    font-family: 'Francois One', sans-serif;
    font-size: 14px;
    color: #f7c982;
    text-decoration: none;

    &:hover {
      color: #ffdfae;
    }

    &.active {
      color: #d66541;
    }
  }
`;

const PhoneLinkWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
`;

export const Navbar = () => (
  <NavWrapper role="navigation" aria-label="main-navigation">
    <Link to="/" title="Logo">
      <img src={logo} alt="Masterpiece Coffee - California Roasted" />
    </Link>
    <MenuAndBannerWrapper>
      <MenuWrapper>
        <Link to="/" activeClassName="active">
          Home
        </Link>
        <Link to="/coffees" activeClassName="active">
          Our Coffees
        </Link>
        <Link to="/ordering" activeClassName="active">
          Ordering
        </Link>
        <Link to="/contact" activeClassName="active">
          Contact
        </Link>
        <PhoneLinkWrapper>
          <a href="tel:4158842990">(415) 884-2990</a>
        </PhoneLinkWrapper>
      </MenuWrapper>
      <img
        src={navBanner}
        alt='Freshly roasted organic & classic coffees. Since 1994. "Roasted daily to order"'
      />
    </MenuAndBannerWrapper>
  </NavWrapper>
);
