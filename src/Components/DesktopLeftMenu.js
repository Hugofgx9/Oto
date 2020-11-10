import React from 'react';
//STYLE';
import { styleDesktopLM } from './ComponentStyle/DesktopLeftMenu.module.scss';

const DesktopLeftMenu = (props) => {
	//const { color } = props;
	return (
			<div className={ styleDesktopLM }>
				<h1>HOME</h1>
                <h3>Bibliothèque</h3>
                <h3>Playlists</h3>
                <h2>Rap US 2020</h2>
			</div>
	);
}

export default DesktopLeftMenu;