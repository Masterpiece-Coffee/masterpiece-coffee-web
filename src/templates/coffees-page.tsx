import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import { Layout } from '../components/Layout';
import { PreviewCompatibleImage } from '../components/PreviewCompatibleImage';

const PageWrapper = styled.div`
  padding: 0.8em;
`;

const CoffeeType = styled.div`
  display: flex;
  align-items: center;
  padding: 1em;
  line-height: 1.5em;
`;

const CoffeeTypeSection = styled.div`
  flex: 1 1 0px;
  padding: 1em;
`;

const CoffeeTypeTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0.25em;
  font-size: 0.9em;
`;

const CoffeeTypeDescription = styled.div`
  font-size: 0.9em;
`;

export const CoffeesPageTemplate = ({ coffeeTypes = [] }) => (
  <PageWrapper>
    {coffeeTypes.map(({ image, alt, title, description }, index) => (
      <CoffeeType key={index}>
        <CoffeeTypeSection>
          <PreviewCompatibleImage image={image} alt={alt} />
        </CoffeeTypeSection>
        <CoffeeTypeSection>
          <CoffeeTypeTitle>{title}</CoffeeTypeTitle>
          <CoffeeTypeDescription>{description}</CoffeeTypeDescription>
        </CoffeeTypeSection>
      </CoffeeType>
    ))}
  </PageWrapper>
);

const CoffeesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <CoffeesPageTemplate coffeeTypes={frontmatter.coffeeTypes} />
    </Layout>
  );
};

export default CoffeesPage;

export const pageQuery = graphql`
  query CoffeesPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "coffees-page" } }) {
      frontmatter {
        coffeeTypes {
          image {
            childImageSharp {
              fixed(width: 325, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          alt
          title
          description
        }
      }
    }
  }
`;
