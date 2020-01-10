import React from 'react';
import Img from 'gatsby-image';

export const PreviewCompatibleImage = ({ image, alt = '' }) => {
  if (!!image && !!image.childImageSharp) {
    return <Img fixed={image.childImageSharp.fixed} alt={alt} />;
  }

  if (!!image && typeof image === 'string') {
    return <img src={image} alt={alt} />;
  }

  return null;
};
