import React from 'react';
//import PropTypes from 'prop-types';
import clsx from 'clsx';

import TopTitleArtistPage from '@components/desktop/TopTitleArtistPage.js';
import AlbumArtistPage from '@components/desktop/AlbumArtistPage.js';
import LastReleaseArtistPage from '@components/desktop/LastReleaseArtistPage.js';
import styles from '@pages/PagesStyle/DesktopArtistPage.module.scss';

let topTrackArray = [
	{title: 'U2', img: ''},
	{title: 'U2', img: ''},
	{title: 'U2', img: ''},
	{title: 'U2', img: ''},
	{title: 'U2', img: ''},
	{title: 'U2', img: ''},
	{title: 'U2', img: ''},
	{title: 'U2', img: ''},
	{title: 'U2', img: ''}
]

let allAlbumsArray= [
	{title: 'U2', img: ''},
	{title: 'U2', img: ''},
	{title: 'U2', img: ''},
	{title: 'U2', img: ''},
	{title: 'U2', img: ''},
	{title: 'U2', img: ''},
	{title: 'U2', img: ''},
	{title: 'U2', img: ''},
	{title: 'U2', img: ''}
]

const DesktopArtistPage = (props) => {
	//const { color } = props;
	return (
		<div className={styles.artistPage}>
			<div className ={styles.artistBannerWrap} >
				<img src="https://scontent.fcdg3-1.fna.fbcdn.net/v/t1.0-9/100927022_10156887336900780_4584604578883829760_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=Feq_qezjCZQAX82hSlc&_nc_ht=scontent.fcdg3-1.fna&oh=85eaad7a04ebbda0a98be2f81faa094e&oe=5FD2C40D" alt=""/>
			</div>

			<div className = {styles.artistPageContent}>
				<h2 className = {clsx(styles.artistName, styles.title, styles.greyLight)}> Fall Out Boy </h2>
				<div className = {styles.releaseAndTrackSection} >
					<div className = {styles.lastRelease} >
						<div className = {clsx(styles.corps, styles.albumArtistPage)}>
							<LastReleaseArtistPage/>
						</div>
					</div>
						
					<div className = {styles.topTracks}>
						<h2 className = {clsx(styles.title2, styles.categoryTopTitres)}>
							Top titres
						</h2>
						<ul className = {styles.listeTopTitres}>
							{ topTrackArray.map((track, index) => {
									return (
										<li key={index} className= {styles.greyLight}>
											<TopTitleArtistPage title={track.title} img={track.img}/>
										</li>
									)
								})
							}		
						</ul>
					</div>
				</div>

				<div className={styles.albumsSection}>
					<h2 className = {clsx(styles.title2, styles.categoryAlbum)} >
						Albums
					</h2>
					<div className={ styles.albumsListWrap }>
						<ul className = {styles.albumsList}>
							{ allAlbumsArray.map((album, index) => {
									return(
										<li key={index}>
											<AlbumArtistPage name={album.title} year="" img={album.img}/>
										</li>
									)
								}
							)}
						</ul>
					</div>
				</div>
			</div>

		</div>
	);
}

export default DesktopArtistPage;