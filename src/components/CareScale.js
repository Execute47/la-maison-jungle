import React from 'react';
import PropTypes from 'prop-types';

import waterasset from '../assets/water.svg';
import sunasset from '../assets/sun.svg';

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType = careType === 'light' ? sunasset : waterasset;

  return (
    <div>
      {range.map((rangeElem) => (
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>
            <img src={scaleType} alt={careType} />
          </span>
        ) : null
      ))}
    </div>
  );
}

CareScale.propTypes = {
  scaleValue: PropTypes.number.isRequired,
  careType: PropTypes.string.isRequired,
};

export default CareScale;
