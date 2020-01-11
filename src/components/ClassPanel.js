import React from 'react';
import {variantRanger} from '../Resources/VariantRanger.js';
import LevelFeature from './LevelFeature'


const ClassPanel = ({classFeatures}) => {
	var features = variantRanger;
	const testFeature = features[1][0];
	// for (let i = 1; i <= 20; i++){
	// 	if i in variantRanger {
	// 		features.push(variantRanger[i]);
	// 	}
	// }

	return (
		<div>
		{

			// <LevelFeature level={1} levelFeatures={features[1][0]}/>

			<LevelFeature level={3} levelFeatures={features[5][0]}/>

		}
		</div>

	);

}



export default ClassPanel;