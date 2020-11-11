import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
//STYLE';
import styles from './ComponentStyle/DesktopInfoPlayer.module.scss';

const DesktopInfoPlayer = () => {
	return (
			<div className={ styles.styleLeftMenuInfo }>
				<img src="https://images-na.ssl-images-amazon.com/images/I/710ZkhTLgJL._SY355_.jpg"/>
				<div className={ styles.trackPlayed }>
					<h2 className={ styles.corpsTitle }>
						On the turn
					</h2>
					<h3 className={ styles.corps }>
						Pink Floyd
					</h3>
					<img src="../assets/heartfilled.png"/>
				</div>
			</div>
	);
}

export default DesktopInfoPlayer;