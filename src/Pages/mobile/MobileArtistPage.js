import React from 'react';
import clsx from 'clsx';
//import { Link } from 'react-router-dom';
import styles from '@pages/PagesStyle/MobileArtistPage.module.scss';

const MobileArtistPage = () => {
	return (
		<div className={ styles.artistPage }>
			<div className={ clsx( styles.grid, styles.bluePart ) }>
				<div className={ clsx( styles.centerContent) }>
					<h2 className= { clsx(styles.grey1, styles.title2)} >Jimmy Hendrix</h2>
					<img src="https://www.babelio.com/users/AVT_Jimi-Hendrix_897.jpg" alt="Artist Photo"/>
					<button className= { styles.playBtn}>Play</button>
				</div>
			</div>
		</div>
	);
}

export default MobileArtistPage; 

