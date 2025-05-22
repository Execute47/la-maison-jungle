import React from 'react';
import PropTypes from 'prop-types';

import CareScale from './CareScale';
import '../styles/PlantItem.css';

function PlantItem(
  {
    id, name, cover, light, water,
  },
) {
  return (
    <li key={id} className="lmj-plant-item">
      <img className="lmj-plant-item-cover" src={cover} alt={name} />
      <span>{name}</span>
      <CareScale careType="water" scaleValue={water} />
      <CareScale careType="light" scaleValue={light} />
    </li>
  );
}

PlantItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  light: PropTypes.number.isRequired,
  water: PropTypes.number.isRequired,
};

export default PlantItem;
