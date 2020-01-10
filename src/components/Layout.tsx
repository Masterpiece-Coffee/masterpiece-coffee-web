import React from 'react';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import useSiteMetadata from './SiteMetadata';
import coffeeBeanTexture from '../img/coffee-bean-texture.jpg';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LayoutContainer = styled.div`
  max-width: 833px;
`;

const PageContainer = styled.div`
  background: #ccaa70;
  color: #281300;
`;

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#85412e" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />

        <link
          href="https://fonts.googleapis.com/css?family=Francois+One&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Global
        styles={css`
          body {
            background: url(${coffeeBeanTexture}) #1a0801;
            font-family: sans-serif;
            margin: 22px;
          }
        `}
      />
      <LayoutWrapper>
        <LayoutContainer>
          <Navbar />
          <PageContainer>
            <div>{children}</div>
          </PageContainer>
          <Footer />
        </LayoutContainer>
      </LayoutWrapper>
    </>
  );
};