import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../templates/home-page';

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return <IndexPageTemplate carousel={data.carousel} />;
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
