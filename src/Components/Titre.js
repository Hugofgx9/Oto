import React from 'react';
//import PropTypes from 'prop-types';
import { myContainer } from './ComponentStyle/MyComponent.module.scss';

const MyComponent = (props) => {
	//const { color } = props;
	return (
			<div className={ myContainer }>
				<p>
					illustrationAlbum
					trackName
					albumName
					ajouter
				</p>
			</div>
	);
}

export default MyComponent;