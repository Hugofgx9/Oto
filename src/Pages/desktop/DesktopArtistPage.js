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

	const { spotifyApi } = useContext(SpotifyContext);
	// const [artistID, setArtistID] = useState("");
	// const [albumID, setAlbumID] = useState("");
	const [artist, setArtist] = useState({
		albums: [],
	});

	useEffect(() => {
		//let artistID ="";
		let albums = {};
		let paramsID = params.id;
		//let lastRelease = {};
		let obj = {};
			const searchArtist = async () => {
				const result = await spotifyApi.searchArtists(paramsID, {limit: 1})
				obj.name = result.artists.items[0].name;
				obj.id = result.artists.items[0].id;
				obj.img = result.artists.items[0].images[0].url;

				searchAlbums(result.artists.items[0].id);
				//lastRelease();
			};
			const searchAlbums = async (artistID) => {
				const result = await spotifyApi.getArtistAlbums(artistID, {limit: 6});
				albums = [];
				result.items.forEach((item, index) => {
					albums[index] = {};
					loadAlbum(item.id, index)
				});
				obj.albums = albums;
				setArtist(obj);
				console.log(obj.albums[0].name);
			};
			// const searchLastRelease = async () => {
			// 	const result = await spotifyApi.getArtistAlbums(artistID, {limit: 1});
			// 	//result.name;

			// 	//result.items[0]
			// };
			const loadAlbum = async (id, arrayIndex) => {
				const result2 = await spotifyApi.getAlbum(id)
				albums[arrayIndex].id = result2.id;
				albums[arrayIndex].name = result2.name;
				albums[arrayIndex].img = result2.images[1].url;
			}
			searchArtist();
	}, [spotifyApi, params])



	return (
		<div className={styles.artistPage}>
			<div className ={styles.artistBannerWrap} >
				<img src={artist.img} alt=""/>
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
							{ artist.albums.map((album, index) => {
									return(
										<li key={index}>
											<AlbumArtistPage name={album.name} year="" img={album.img}/>
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