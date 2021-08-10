import React from 'react'

import './style.css';

function DataComponent(props) {
	const { data } = props;
	return (
		<div className="info">
			{
				data.map(item => {
					return(
						<p style={{
							color : item.color
						}}>enlem : {item.lat}, boylam : {item.lon}, yükseklik : {item.height}, mod : {item.mode ? 'manuel' : 'otonom'}</p>
					)
				})
			}
		</div>
	)
}

export default DataComponent
