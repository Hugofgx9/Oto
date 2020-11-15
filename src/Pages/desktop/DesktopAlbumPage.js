import { useParams } from 'react-router-dom';
import React, { useContext, useState, useEffect } from 'react';
import { SpotifyContext } from '@components/SpotifyProvider';
import clsx from 'clsx';
//import PropTypes from 'prop-types';
import styles from '@pages/PagesStyle/DesktopAlbumPage.module.scss';
import AlbumTracklist from '@components/desktop/AlbumTracklist';

const msToHMS = ( ms ) => {
  let seconds = ms / 1000;
  //let hours = parseInt( seconds / 3600 );
  seconds = seconds % 3600;
  let minutes = parseInt( seconds / 60 ); 
  seconds = seconds % 60;
  seconds = Math.round(seconds);
  return( minutes+":"+seconds);
}

const DesktopAlbumPage = (props) => {
	const params = useParams();

  const { spotifyApi } = useContext(SpotifyContext);
	// const [artistID, setArtistID] = useState("");
	// const [albumID, setAlbumID] = useState("");
  const [album, setAlbum] = useState({
  														tracklist: [], 
  														name: null,
  														img: null,
  														artist: null,
  														date: ""});

//RAM : "4m2880jivSbbyEGAKfITCa"
//daft : "4tZwfgrHOc3mvqYlEYSvVi"

  useEffect(() => {
    const getAlbum = async () => {
      const result = await spotifyApi.getAlbum(params.id)
      setAlbum({
				tracklist: result.tracks.items, 
				name: result.name,
				img: result.images[1].url,
				artist:	result.artists[0].name,
				date: result.release_date
      });
    }
    getAlbum();
  }, [spotifyApi, params])

	return (
			<div className={ styles.albumPageContainer }>
				<img src={album.img} alt=""/>
				<div className={ styles.albumInfo }>
					<h2 className={ clsx(styles.title, styles.greyLight) }> {album.artist} </h2>
					<div className={ clsx(styles.bottomAlign) }>
						<h3 className={ clsx(styles.title2, styles.blue) }> {album.name} </h3>
						<div className= { clsx(styles.genreAndDate, styles.grey3) }>
							<h3 className={ styles.corps }>Alternative</h3>
							<span> - </span>
							<h3 className={ styles.corps }> {album.date.slice(0,4)} </h3>
						</div>
					</div>
				</div>
				<div className={ clsx(styles.albumInfo2)}>
					<p>
						<span> {album.tracklist.length}, 20 minutes</span>
					</p>
					<span className={ styles.blue } > Lecture aléatoire </span>
				</div>
				<div className= { clsx(styles.title2, styles.headerMenu, styles.gridTrackList) } >
					<span>Morceau</span>
					<span>Artiste</span>
					<span>Durée</span>
				</div>
				<ul>
					{album.tracklist.map((track, index) => {
						return (
							<li key={index}>
								<AlbumTracklist 
									nb={index} 
									uri={track.uri}
									title={track.name} 
									artist={track.artists.map((artist, index) => {
										return (
											artist.name
										)
									})}
									duration={msToHMS(track.duration_ms)} 
									gridClass={ styles.gridTrackList }
								/>
							</li>
						)
					})}	
				</ul>
			</div>
	);
}

export default DesktopAlbumPage;