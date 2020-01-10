import React from 'react';
import styled from '@emotion/styled';
import { Layout } from '../components/Layout';

const PageWrapper = styled.div`
  padding: 0.8em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NotFoundPage = () => (
  <Layout>
    <PageWrapper>
      <h1>Page Not Found</h1>
      <p>
        This route doesn&#39;t exist... Use the menu above to explore the site.
      </p>
    </PageWrapper>
  </Layout>
);

export default NotFoundPage;
