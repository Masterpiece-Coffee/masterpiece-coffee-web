import React from 'react';

import styled from '@emotion/styled';

const FooterWrapper = styled.footer`
  background-color: #85412e;
  padding: 1em;
  color: white;
  text-align: center;
`;

export const Footer = () => (
  <FooterWrapper>
    Copyright © {new Date().getFullYear()} Masterpiece Coffee Co.
  </FooterWrapper>
);
