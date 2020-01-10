import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

import { Layout } from '../components/Layout';

const PageWrapper = styled.div`
  padding: 20px;
`;

const CoffeeType = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  font-family: arial, san-serif;
  line-height: 1.5em;
`;

const CoffeeTypeSection = styled.div`
  flex: 1 1 0px;
  padding: 10px;
`;

const CoffeeTypeTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0.25em;
  font-size: 14px;
`;

const CoffeeTypeDescription = styled.div`
  font-size: 14px;
`;

export const CoffeesPageTemplate = ({ coffeeTypes = [] }) => (
  <PageWrapper>
    {coffeeTypes.map(({ image, alt, title, description }, index) => (
      <CoffeeType key={index}>
        <CoffeeTypeSection>
          {typeof image === 'string' ? (
            <img src={image} alt={alt} />
          ) : (
            <Img fixed={image.childImageSharp.fixed} alt={alt} />
          )}
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
