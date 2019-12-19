import React from 'react';
import './SpellPanel.css';

const SpellPanel = ({name, desc, range, level, higher_level, duration, concentration, casting_time}) => {

	return (
		<div className="bg-yellow dib br1 pa3 ma2 grow bw2 shadow5">
			<h2> <b>Name:</b> {name} </h2>
			<p> <b>Description: </b>{desc} </p>
			<p> <b>Higher Level: </b> {higher_level} </p>
			<p> <b>Level: </b> {level} </p>
			<p> <b>Duration: </b> {duration} </p>
			<p> <b>Concentration: </b> {concentration} </p>
			<p> <b>Casting Time: </b> {casting_time} </p>
			<p> <b>Range: </b> {range}  </p>
		</div>

	);
}

export default SpellPanel;