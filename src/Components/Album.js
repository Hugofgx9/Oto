import React from 'react';
//import PropTypes from 'prop-types';
import { myContainer } from './ComponentStyle/MyComponent.module.scss';

const MyComponent = (props) => {
	//const { color } = props;
	return (
			<div className={ myContainer }>
				<p>
					illustrationAlbum
					albumName
					dateAlbum
				</p>
			</div>
	);
}

export default MyComponent;