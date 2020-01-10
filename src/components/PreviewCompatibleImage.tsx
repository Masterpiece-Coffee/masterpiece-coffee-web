import React from 'react';
import Img from 'gatsby-image';

const imgStyle = { display: 'block' };

export const PreviewCompatibleImage = ({ image, alt = '' }) => {
  if (!!image && !!image.childImageSharp) {
    return (
      <Img fixed={image.childImageSharp.fixed} alt={alt} style={imgStyle} />
    );
  }

  if (!!image && typeof image === 'string') {
    return <img src={image} alt={alt} style={imgStyle} />;
  }

  return null;
};
