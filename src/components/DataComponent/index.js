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
						}}>enlem : {item.lat}, boylam : {item.lon}, yükseklik : {item.height}, mod : {item.mode ? 'manual' : 'otonom'}</p>
					)
				})
			}
		</div>
	)
}

export default DataComponent
