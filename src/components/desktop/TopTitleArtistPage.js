import React from 'react';
//import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import styles from '@components/desktop/style/TopTitlesArtistPage.module.scss';

const TopTitleArtistPage = (props) => {
	//const { color } = props;
	const { id, img, title, album } = props;
	return (

			<div>

				<p>

					<Link to={`/album/${id}`}>
						<img className  = { styles.IllustrationTopTitreArtistPage} src={img} alt="" />					
					</Link>
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