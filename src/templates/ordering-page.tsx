import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import { Layout } from '../components/Layout';

const PageWrapper = styled.div`
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Category = styled.div`
  padding: 1.5em;
  h2 {
    font-size: 3em;
    font-family: 'Dancing Script', cursive;
    margin: 0;
  }
`;
const SubCategoryTitle = styled.h3`
  margin-top: 0.5em;
  font-size: 1.5em;
`;
const Product = styled.div`
  font-size: 0.95em;
  line-height: 1.5em;
  margin-bottom: 2em;
  h4 {
    margin-top: 0;
    margin-bottom: 0.25em;
    font-size: 14px;
  }
`;

const formatCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format;

export const OrderingPageTemplate = ({ categories = [] }) => (
  <PageWrapper>
    {categories.map(({ categoryTitle, subcategories }, index) => (
      <Category>
        <h2>{categoryTitle}</h2>
        {subcategories.map(({ subcategoryTitle, products }, index) => (
          <>
            <SubCategoryTitle>{subcategoryTitle}</SubCategoryTitle>
            {products.map(({ name, weight, price, description }, index) => (
              <Product>
                <h4>
                  {name} ({weight} lbs) ~ {formatCurrency(price)}
                </h4>
                <div>{description}</div>
              </Product>
            ))}
          </>
        ))}
      </Category>
    ))}
  </PageWrapper>
);

const OrderingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <OrderingPageTemplate categories={frontmatter.categories} />
    </Layout>
  );
};

export default OrderingPage;

export const pageQuery = graphql`
  query OrderingPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "ordering-page" } }) {
      frontmatter {
        categories {
          categoryTitle
          subcategories {
            subcategoryTitle
            products {
              name
              weight
              price
              description
            }
          }
        }
      }
    }
  }
`;
