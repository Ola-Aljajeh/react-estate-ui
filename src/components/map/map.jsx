import { MapContainer, TileLayer } from "react-leaflet"
import Pin from "../pin/pin"
import "leaflet/dist/leaflet.css"
import "./map.scss"

function Map({ items }) {
	return (
		<MapContainer
			center={[52.4797, -1.90269]}
			zoom={8}
			scrollWheelZoom={false}
			className="map"
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{items.map((item) => (
				<Pin key={item.id} item={item} />
			))}
		</MapContainer>
	)
}

export default Map
