import CareScale from "./CareScale"
import '../styles/PlantItem.css'

function PlantItem({ id, name, cover, light, water }) {
    return (
	<li>
		<img src={cover} alt={name} />
		<span>{name}</span>
		<CareScale careType='water' scaleValue={water} />
		<CareScale careType='light' scaleValue={light} />
	</li>
    )
}

export default PlantItem