import React from 'react';
import DesktopLeftMenuItems from '../Components/DesktopLeftMenuItems.js';
//import PropTypes from 'prop-types';
import { styleDesktopLM } from './ComponentStyle/DesktopLeftMenu.module.scss';

const DesktopLeftMenu = (props) => {
	//const { color } = props;
	return (
			<div className={ styleDesktopLM }>
				<h1>HOME</h1>
                <h3>Bibliothèque</h3>
                <DesktopLeftMenuItems/>
                <h3>Playlist</h3>
                <h2>Rap US 2020</h2>
			</div>
	);
}

export default DesktopLeftMenu;