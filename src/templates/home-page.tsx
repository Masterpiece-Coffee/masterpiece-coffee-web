import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Carousel from 'nuka-carousel';

import { Layout } from '../components/Layout';
import { PagingDots } from '../components/PagingDots';
import { PreviewCompatibleImage } from '../components/PreviewCompatibleImage';

export const IndexPageTemplate = ({ carousel = [] }) => (
  <Carousel
    autoplay
    wrapAround
    renderCenterLeftControls={null}
    renderCenterRightControls={null}
    renderBottomCenterControls={props => <PagingDots {...props} />}
  >
    {carousel.map(({ image, alt }, index) => (
      <PreviewCompatibleImage key={index} image={image} alt={alt} />
    ))}
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
              fixed(width: 833, quality: 100) {
                ...GatsbyImageSharpFixed
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
