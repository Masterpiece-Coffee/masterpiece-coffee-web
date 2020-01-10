import React from 'react';
import { Helmet } from 'react-helmet';
import { withPrefix, graphql, useStaticQuery } from 'gatsby';

import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { useSiteMetadata } from './useSiteMetadata';

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

  const {
    backgroundTexture: {
      fixed: { src: backgroundTexture },
    },
  } = useStaticQuery(
    graphql`
      query BackgroundTexture {
        backgroundTexture: imageSharp(
          fixed: { originalName: { eq: "coffee-bean-texture.jpg" } }
        ) {
          fixed {
            src
          }
        }
      }
    `,
  );

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
          href="https://fonts.googleapis.com/css?family=Francois+One|Dancing+Script&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Global
        styles={css`
          body {
            background: url(${backgroundTexture}) #1a0801;
            color: #281300;
            font-family: veranda, arial, sans-serif;
            margin: 22px;
          }
          img {
            display: block;
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
