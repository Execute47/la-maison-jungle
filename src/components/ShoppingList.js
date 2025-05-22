import React from 'react';

import { plantList } from '../data/plantList';
import PlantItem from './PlantItem';
import '../styles/ShoppingList.css';

function ShoppingList() {
  const categories = plantList.reduce(
    (acc, plant) => (acc.includes(plant.category) ? acc : acc.concat(plant.category)),
    [],
  );

  return (
    <>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>

      <div className="lmj-plant-list">
        {plantList.map((plant) => (
          <PlantItem
            key={plant.id}
            id={plant.id}
            name={plant.name}
            cover={plant.cover}
            water={plant.water}
            light={plant.light}
          />
        ))}
      </div>
    </>
  );
}

export default ShoppingList;
