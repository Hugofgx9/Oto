import React from 'react';
//import PropTypes from 'prop-types';
import clsx from 'clsx';

import TopTitleArtistPage from '@components/TopTitleArtistPage.js';
import AlbumArtistPage from '@components/AlbumArtistPage.js';
import LastReleaseArtistPage from '@components/LastReleaseArtistPage.js';
import styles from '@pages/PagesStyle/DesktopArtistPage.module.scss';

const DesktopArtistPage = (props) => {
	//const { color } = props;
	return (
		<div className={styles.insertionMenu}>
			<div className ={styles.ArtistBannerWrap} >
				<img className = {styles.ArtistBanner} src="https://scontent.fcdg3-1.fna.fbcdn.net/v/t1.0-9/100927022_10156887336900780_4584604578883829760_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=Feq_qezjCZQAX82hSlc&_nc_ht=scontent.fcdg3-1.fna&oh=85eaad7a04ebbda0a98be2f81faa094e&oe=5FD2C40D" alt=""/>
			</div>

			<div className = {styles.DesktopArtistPage}>
				<h2 className = {clsx(styles.ArtistName, styles.title)}>
					Fall Out Boy 
				</h2>

				<div className = {styles.LastReleaseZoneArtistPage} >
			
					<div className = {clsx(styles.corps, styles.AlbumArtistPage)}>
						<LastReleaseArtistPage/>
					</div>
				</div>
					
				<div className = {styles.TopTitresArtist}>
					<h2 className = {clsx(styles.title2, styles.CategoryTopTitres)}>
						Top titres
					</h2>

					<ul className = {styles.ListeTopTitres}>

						<div className = {styles.firstRow} >
						<li>
							<TopTitleArtistPage/>
						</li>
						<li>
							<TopTitleArtistPage/>
						</li>
						<li>
							<TopTitleArtistPage/>
						</li>
						</div>

						<div className = {styles.secondRow}>
						<li>
							<TopTitleArtistPage/>
						</li>
						<li>
							<TopTitleArtistPage/>
						</li>
						<li>
							<TopTitleArtistPage/>
						</li>
						</div>
						
						<div className = {styles.thirdRow}>
						<li>
							<TopTitleArtistPage/>
						</li>
						<li>
							<TopTitleArtistPage/>
						</li>
						<li>
							<TopTitleArtistPage/>
						</li>
						</div>
						
						
					</ul>
				</div>

				<div className={styles.AlbumsArtistPage}>
					<h2 className = {clsx(styles.title2, styles.CategoryAlbum)} >
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