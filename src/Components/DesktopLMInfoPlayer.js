import React from 'react';
//import clsx from 'clsx';
//import { Link } from 'react-router-dom';

//STYLE
import styles from './ComponentStyle/DesktopLMInfoPlayer.module.scss';

const DesktopLMInfoPlayer = () => {
	return (
			<div className={ styles.gridLMInfo }>
				<img className={ styles.playedImg } src="https://images-na.ssl-images-amazon.com/images/I/710ZkhTLgJL._SY355_.jpg" alt=""/>
				<div className={ styles.playedTrack }>
					<h2 className={ styles.corpsTitle }>
						On the turn
					</h2>
					<h3 className={ styles.corps }>
						Pink Floyd
					</h3>
					{/* <img className={ styles.like } src="./assets/heartfilled.png" alt=""/> */}
				</div>
			</div>
	);
}

export default DesktopLMInfoPlayer;