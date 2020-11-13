import React from 'react';
//import clsx from 'clsx';
//import { Link } from 'react-router-dom';

//STYLES
import styles from '@components/desktop/style/DesktopLM.module.scss';

//COMPONENTS
import DesktopLMNav from '@components/desktop/DesktopLMNav.js'
import DesktopLMInfoPlayer from '@components/desktop/DesktopLMInfoPlayer.js'


const DesktopLM = (props) => {
	return (
			<div className={ styles.DesktopLMGrid }>
				<DesktopLMNav/>
				<DesktopLMInfoPlayer/>
			</div>
	);
}

export default DesktopLM;