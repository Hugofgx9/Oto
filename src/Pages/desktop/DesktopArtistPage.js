import { useParams } from 'react-router-dom';
import React, { useContext, useState, useEffect } from 'react';
import { SpotifyContext } from '@components/SpotifyProvider';
//import PropTypes from 'prop-types';
import clsx from 'clsx';

import TopTitleArtistPage from '@components/desktop/TopTitleArtistPage.js';
import AlbumArtistPage from '@components/desktop/AlbumArtistPage.js';
import LastReleaseArtistPage from '@components/desktop/LastReleaseArtistPage.js';
import styles from '@pages/PagesStyle/DesktopArtistPage.module.scss';

const DesktopArtistPage = (props) => {
	const params = useParams();

	const [albums, setAlbums] = useState();
	const [artist, setArtist] = useState();
	const [topTracks, setTopTracks] = useState();

	const { spotifyApi } = useContext(SpotifyContext);
	
	useEffect(() => {
		// const searchArtists = async (artistQuery) => {
		// 	const results = await spotifyApi.searchArtists(artistQuery, {limit: 1});
		// 	return results.artists.items;
		// };
		const getArtist = async (artistID) => {
			const result = await spotifyApi.getArtist(artistID);
			return result
		}
		const getTopTracks = async (artistID) => {
			const result = await spotifyApi.getArtistTopTracks(artistID, 'FR');
			return result.tracks;
		};		
		const searchArtistAlbums = async (artistID) => {
			const result = await spotifyApi.getArtistAlbums(artistID, {limit: 6});
			return result.items;
		};
		const getSpotifyData = async () => {
			//const artists = await searchArtists(params.id);
			const artist = await getArtist(params.id);
			const albums = await searchArtistAlbums(params.id);
			const topTracks = await getTopTracks(artist.id);
			setTopTracks(topTracks);
			setAlbums(albums);
			setArtist(artist);
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
									<LastReleaseArtistPage name={albums[0].name} artist={artist.name} img={albums[0].images[0].url}/>
								</div>
							</div>
								
							<div className = {styles.topTracks}>
								<h2 className = {clsx(styles.title2, styles.categoryTopTitres)}>
									Top titres
								</h2>
								<ul className = {styles.listeTopTitres}>
									{ topTracks.slice(0,9).map((track, index) => {
											return (
												<li key={track.id} className= {styles.greyLight}>
													<TopTitleArtistPage title={track.name.slice(0,18) + '...'} img={track.album.images[2].url}/>
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