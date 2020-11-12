import React from 'react';
//import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from '@components/ComponentStyle/TopTitlesArtistPage.module.scss';

const TopTitleArtistPage = (props) => {
	//const { color } = props;
	const { img, title, album } = props;
	return (

			<div>

				<p>
					<img className  = { styles.IllustrationTopTitreArtistPage}   
					src=""
					alt=""
					/>
					<span className={clsx(styles.trackName)}> { title } </span>
					<span className={clsx(styles.albumName)}>  { album } </span>						 albumName 
					<span className={styles.add}>
						 + 
					</span>
				</p>
			</div>
	);
}

export default TopTitleArtistPage;