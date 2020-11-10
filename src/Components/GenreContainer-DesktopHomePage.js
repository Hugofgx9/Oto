import React from 'react';
import Genre from './Genre-DesktopHomePage'

import styles from '@components/ComponentStyle/GenreContainer-DesktopHomePage.module.scss'

const DesktopHomePage = (props) => {
	//const { color } = props;
	return (
			<div >
				<h2> Genres </h2>
				<div className={styles.GenreList}>
					<Genre></Genre>
					<Genre></Genre>
					<Genre></Genre>
					<Genre></Genre>
				</div>
				
			</div>
	);
}

export default DesktopHomePage;