import { plantList } from '../data/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
	
	return (
	<>
		//Afficher la liste des catégories
		<ul>
			{categories.map((cat) => (
			<li key={cat}>{cat}</li>
			))}
		</ul>

		//Afficher un PlantItem pour chaque plante
		<div className="plant-list">
			<PlantItem 
				key={plant.id}
				name={plant.name}
				id={plant.id}
				cover={plant.cover}
				water={plant.water}
				light={plant.light}
			/>
		</div>
	</>
	)
}

export default ShoppingList
