import React from 'react';
import PropTypes from 'prop-types';
import { OrderingPageTemplate } from '../../templates/ordering-page';

const OrderingPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return <OrderingPageTemplate categories={data.categories} />;
  } else {
    return <div>Loading...</div>;
  }
};

OrderingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default OrderingPagePreview;
