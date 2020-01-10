import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Carousel from 'nuka-carousel';

import { Layout } from '../components/Layout';
import { PagingDots } from '../components/PagingDots';

export const IndexPageTemplate = ({ carousel = [] }) => (
  <Carousel
    autoplay
    wrapAround
    renderCenterLeftControls={null}
    renderCenterRightControls={null}
    renderBottomCenterControls={props => <PagingDots {...props} />}
  >
    {carousel.map(({ image, alt }, index) =>
      typeof image === 'string' ? (
        <img key={index} src={image} alt={alt} />
      ) : (
        <Img key={index} fluid={image.childImageSharp.fluid} alt={alt} />
      ),
    )}
  </Carousel>
);

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate carousel={frontmatter.carousel} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
      frontmatter {
        carousel {
          image {
            childImageSharp {
              fluid(maxWidth: 833, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          alt
        }
      }
    }
  }
`;
