import React from 'react';
//import PropTypes from 'prop-types';
import styles from '@components/ComponentStyle/TopTitlesArtistPage.module.scss';

const TopTitleArtistPage = (props) => {
	//const { color } = props;
	return (

			<div>

				<p>
					<img className  = { styles.IllustrationTopTitreArtistPage}   
					src=""
					alt=""
					/>
					 trackName 
					<span className={styles.corps}>
						 albumName 
					</span>
					<span className={styles.add}>
						 + 
					</span>
				</p>
			</div>
	);
}

export default TopTitleArtistPage;