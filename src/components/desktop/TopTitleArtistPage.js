import React from 'react';
//import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from '@components/desktop/style/TopTitlesArtistPage.module.scss';

const TopTitleArtistPage = (props) => {
	//const { color } = props;
	const { img, title, album } = props;
	return (

			<div>

				<p>
					<img className  = { styles.IllustrationTopTitreArtistPage}   
					src={img}
					alt=""
					/>
					<span className={clsx(styles.trackName)}> { title } </span>
					<span className={clsx(styles.albumName)}>  { album } </span>
					<span className={styles.add}>
						 + 
					</span>
				</p>
			</div>
	);
}

export default TopTitleArtistPage;