import React from 'react';
import PropTypes from 'prop-types';
import { CoffeesPageTemplate } from '../../templates/coffees-page.tsx';

const CoffeesPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return <CoffeesPageTemplate coffeeTypes={data.coffeeTypes} />;
  } else {
    return <div>Loading...</div>;
  }
};

CoffeesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default CoffeesPagePreview;
