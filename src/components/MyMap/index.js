import React, { useState, useEffect, Component } from 'react';
import socketIOClient from "socket.io-client";
import { Map, Marker } from "pigeon-maps";
import { osm } from 'pigeon-maps/providers'
import DataComponent from '../DataComponent';


function MyMap(props){

	const endpoint = "http://localhost:5555";	// hakem serverı
	const [coords, setCoords] = useState([]);
	const [colors, setColors] = useState([
		'#3a95cb',
		'#f4a201',
		'#7e539c',
		'#ff0040',
		'#10ffc7',
	]);

	useEffect(() => {
		// hakem serverına bağlan
		const socket = socketIOClient("http://localhost:5555");
		socket.on("output road", data => {
			console.log(data);

			const newCoords = data.map((item, key) => {
				return({
					...item,
					color : colors[key]
				})
			})
			console.log("gelen bilgi : ", data);
			setCoords(newCoords);
		})

	}, [])

	return(
		<div style={{ 
			display : 'flex',
			flexDirection : 'column'
		 }}>
			<Map 
				provider={osm}
				defaultCenter={[40.2526498, 29.5520571]} 
				defaultZoom={14}
				height={'100vh'}
			>
			{
				coords.map((item, key) => {
					return(
						<Marker width={70} anchor={[item.lat, item.lon]} color={item.color}></Marker>
					)	
				})
			}
			</Map>
			<DataComponent data={coords}></DataComponent>
		</div>
	)

}
 
export default MyMap;
