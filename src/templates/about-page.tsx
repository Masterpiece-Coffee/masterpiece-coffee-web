import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';

import { Layout } from '../components/Layout';

const PageWrapper = styled.div`
  padding: 1em;
  column-count: 2;
`;

const Section = styled.div`
  display: inline-block;
  padding: 1.5em;
  line-height: 1.5em;
  h2 {
    font-size: 1.5em;
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
