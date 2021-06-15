import React from 'react'

import './style.css';

function DataComponent(props) {
	const { data } = props;
	console.log(data);

	return (
		<div className="info">
			{
				data.map(item => {
					return(
						<p style={{
							color : item.color
						}}>lat : {item.lat}, lon : {item.lon}, height : {item.height}</p>
					)
				})
			}
		</div>
	)
}

export default DataComponent
