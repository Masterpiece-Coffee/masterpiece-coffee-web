import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';

import { Layout } from '../components/Layout';

const PageWrapper = styled.div`
  padding: 0.8em;
  column-count: 2;
`;

const Section = styled.div`
  display: inline-block;
  padding: 1.5em;
  font-size: 0.95em;
  line-height: 1.5em;
  h2 {
    font-size: 1.1em;
    margin-top: 0;
    margin-bottom: 0.25em;
  }
  p:first-of-type {
    margin-top: 0;
  }
`;

export const AboutPageTemplate = ({ sections = [] }) => (
  <PageWrapper>
    {sections.map(({ title, content }, index) => (
      <Section key={index}>
        <h2>{title}</h2>
        <ReactMarkdown>{content}</ReactMarkdown>
      </Section>
    ))}
  </PageWrapper>
);

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AboutPageTemplate sections={frontmatter.sections} />
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        sections {
          title
          content
        }
      }
    }
  }
`;
