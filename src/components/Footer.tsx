import React from 'react';

import styled from '@emotion/styled';

const FooterWrapper = styled.footer`
  background-color: #85412e;
  padding: 1em;
  color: #ccaa70;
  text-align: center;
  font-size: 12px;
`;

export const Footer = () => (
  <FooterWrapper>
    Copyright © {new Date().getFullYear()} Masterpiece Coffee Co.
  </FooterWrapper>
);
