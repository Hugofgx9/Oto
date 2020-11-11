import React from 'react';
//import PropTypes from 'prop-types';
import clsx from 'clsx';

import TitreArtistPage from '@components/TopTitlesArtistPage.js';
import AlbumArtistPage from '@components/AlbumArtistPage.js';
import LastReleaseArtistPage from '@components/LastReleaseArtistPage.js';
import styles from '@pages/PagesStyle/DesktopArtistPage.module.scss';

const DesktopArtistPage = (props) => {
	//const { color } = props;
	return (

		<div>

			<div className ={styles.ArtistBannerWrap} >
				<img className = {styles.ArtistBanner} src="https://scontent.fcdg2-1.fna.fbcdn.net/v/t1.0-9/70757437_10156194747250780_7003386579234324480_o.jpg?_nc_cat=101&ccb=2&_nc_sid=e3f864&_nc_ohc=9C5sAMgV7QAAX8Wuvn9&_nc_oc=AQkzD5BTSQUySSZ5MRVl7Tt53BW9mhfOirptin_fiAmj3lhMIDWk6ner9nBkCBqvKkU&_nc_ht=scontent.fcdg2-1.fna&oh=04e0c67d9a12b189c65017e29de23e28&oe=5FCFDC86" alt=""/>
			</div>
			
	
		<div className = {styles.ArtistPage}>

			<h2 className = {clsx(styles.ArtistName, styles.title)}>
				Fall Out Boy 
			</h2>

			<div className = {styles.DerniereSortieArtistPage} >
				<h2 className = {styles.title2}>
						Dernière sortie
				</h2>
				<div className = {clsx(styles.corps, styles.AlbumArtistPage)}>
        			<LastReleaseArtistPage/>
    			</div>
			</div>
				
			<div className = {styles.TopTitresArtist}>
				<h2 className = {styles.title2}>
					Top titres
				</h2>

				<ul className = {styles.ListeTopTitres}>
					<li>
						<TitreArtistPage/>
					</li>
					<li>
						<TitreArtistPage/>
					</li>
					<li>
						<TitreArtistPage/>
					</li>
					<li>
						<TitreArtistPage/>
					</li>
				</ul>
			</div>

			<div className={styles.AlbumsArtistPage}>
				<h2 className = {styles.title2} >
					Albums
				</h2>
				<ul className = {styles.ListeAlbums}>
					<li>
						<AlbumArtistPage/>
					</li>
					<li>
						<AlbumArtistPage/>
					</li>
					<li>
						<AlbumArtistPage/>
					</li>
					<li>
						<AlbumArtistPage/>
					</li>
				</ul>
    		</div>
				
		</div>

		</div>
	);
}

export default DesktopArtistPage;