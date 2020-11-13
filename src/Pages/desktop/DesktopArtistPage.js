import { useParams } from 'react-router-dom';
import React, { useContext, useState, useEffect } from 'react';
import { SpotifyContext } from '@components/SpotifyProvider';
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


const DesktopArtistPage = (props) => {
	const params = useParams();

	const [albums, setAlbums] = useState({});
	const [artist, setArtist] = useState();

	const { spotifyApi } = useContext(SpotifyContext);

	useEffect(() => {
		const searchArtists = async (artistQuery) => {
			const results = await spotifyApi.searchArtists(artistQuery, {limit: 1});
			return results.artists.items;
		};

		const searchArtistAlbums = async (artistID) => {
			const result = await spotifyApi.getArtistAlbums(artistID, {limit: 6});
			return result.items;
		};
		const getSpotifyData = async () => {
			const artists = await searchArtists(params.id)
			const albums = await searchArtistAlbums(artists[0].id)
			setAlbums(albums);
			setArtist(artists[0]);
		};
		getSpotifyData();
	}, [spotifyApi, params])

	return (
		<div className={styles.artistPage}>

			{artist &&

				<div>
					<div className ={styles.artistBannerWrap} >
						<img src={artist.images[0].url} alt=""/>
					</div>
					<div className = {styles.artistPageContent}>
						<h2 className = {clsx(styles.artistName, styles.title, styles.greyLight)}> {artist.name} </h2>
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
									{ albums.map((album) => {
											return(
												<li key={album.id}>
													<AlbumArtistPage name={album.name} year="" img={album.images[1].url}/>
												</li>
											)
										}
									)}
								</ul>
							</div>
						</div>
					</div>
				</div>
			}
		</div>
	);
}

export default DesktopArtistPage;