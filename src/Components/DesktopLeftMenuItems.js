import React from 'react';
//import PropTypes from 'prop-types';
import { styleDesktopLMI } from './ComponentStyle/DesktopLeftMenuItems.module.scss';

const DesktopLeftMenuItems = (props) => {
	//const { color } = props;
	return (
			<div className={ styleDesktopLMI }>
				<h2>Favoris</h2>
				<h2>Albums</h2>
				<h2>Artistes</h2>
			</div>
	);
}

export default DesktopLeftMenuItems;