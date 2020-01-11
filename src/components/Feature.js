import React from 'react';


// so far as I can tell, there are three types of features
// 	1) Standard (name, text) 
// 	2) features with subfeatures
// 	3) Features that give spells



function returnFeatureWithSubs(feature){
	console.log("wassup");
	return (
		<div>
			<h3> {feature.text} </h3>
			{
				feature.subfeatures.map((subfeature) => {
					return (
						<div>
							<h2><b>{subfeature.name}</b></h2>
							<h3>{subfeature.text}</h3>
						</div>
					);
				})
			}
		</div>
	);
}

function returnStandardFeature(feature) {
	return (
		<h2> {feature.text} </h2>
	);
}

function returnSpellsFeature(feature) {
	/* In the future, add a way to only show spells that should show up at your current level */
	const spells = feature.spells;
	const keys = Object.keys(spells);
	return (
		<div>
			<h3> {feature.text} </h3>
			{
				keys.map((level) => {
					return (
						<div>
							<h3>{level}: {spells[level].join(", ")}</h3>
						</div>
					);
				})
			}
		</div>

	);
}

const processFeature = (feature) => {
	// if (subfeatures in feature){
	// 	return returnFeatureWithSubs;
	// } else if (spells in feature) {
	// 	return returnSpellsFeature;
	// } else {
	// 	return returnStandardFeature;
	// }
	if (feature.hasOwnProperty('subfeatures')){
		console.log("subfeature")
		return returnFeatureWithSubs(feature);
	} else if (feature.hasOwnProperty('spells')) {
		console.log("it's a spell")
		return returnSpellsFeature(feature);
	} else {
		return returnStandardFeature(feature);
	}

} 



const Feature = ({levelFeatures}) => {


	return (
		<div>
			<h1> <b>{levelFeatures.name}</b> </h1>
			{processFeature(levelFeatures)}
		</div>
	);

}



export default Feature;