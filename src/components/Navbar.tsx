import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { PreviewCompatibleImage } from './PreviewCompatibleImage';

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

export const Navbar = () => {
  const { logo, navBanner } = useStaticQuery(
    graphql`
      query NavbarImages {
        logo: file(base: { eq: "logo.jpg" }) {
          childImageSharp {
            fixed(width: 174, height: 267) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        navBanner: file(base: { eq: "nav-banner.jpg" }) {
          childImageSharp {
            fixed(width: 659, height: 233) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `,
  );

  return (
    <NavWrapper role="navigation" aria-label="main-navigation">
      <Link to="/" title="Logo">
        <PreviewCompatibleImage
          image={logo}
          alt="Masterpiece Coffee - California Roasted"
        />
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
          <Link to="/about" activeClassName="active">
            About Us
          </Link>
          <PhoneLinkWrapper>
            <a href="tel:4158842990">(415) 884-2990</a>
          </PhoneLinkWrapper>
        </MenuWrapper>
        <PreviewCompatibleImage
          image={navBanner}
          alt='Freshly roasted organic & classic coffees. Since 1994. "Roasted daily to order"'
        />
      </MenuAndBannerWrapper>
    </NavWrapper>
  );
};
