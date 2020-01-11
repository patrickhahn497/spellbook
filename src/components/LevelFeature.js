import React from 'react';
import Feature from './Feature'



const LevelFeature = ({level, levelFeatures}) => {
	console.log("Hullo!")
	console.log(levelFeatures);

	return (
		<div>
			<h1> Level: {level} </h1>
			<Feature levelFeatures={levelFeatures}/>
		</div>

	);

}

export default LevelFeature;




	// return (
	// 	<div>
	// 		<h1> Level: {level} </h1>
	// 		<Feature levelFeatures={levelFeatures}/>
	// 	</div>

	// );

			// {
			// 	for (const levelFeature of levelFeatures){


			// 	}
			// }