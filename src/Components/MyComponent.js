import React from 'react';
//import PropTypes from 'prop-types';
import { myContainer } from './ComponentStyle/MyComponent.module.scss';

const MyComponent = (props) => {
	//const { color } = props;
	return (
			<div className={ myContainer }>
				<p>
					Je viens de mon composant 
				</p>
				<p className="red-paragraph">
					Mon deuxieme paragraphe
				</p>
			</div>
	);
}

export default MyComponent;