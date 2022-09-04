import React from 'react';

const About = () => {
return (
	<div
	style={{
		display: 'block',
		justifyContent: 'Left',
		alignItems: 'Left',
		height: '10%',
        width:'18%',
        border: '1px solid black',
        padding: '0.4%',
	}}
	>
	<div>This website provides three functionalities:</div>
    <div>1. Text Translator in 29 languages</div>
    <div>2. Text Extraction from image</div>
    <div>3. Speech to Text in 3 different languages</div>
	</div>
);
};

export default About;
