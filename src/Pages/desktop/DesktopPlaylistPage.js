import { useParams} from 'react-router-dom';
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

const DesktopPlaylistPage = (props) => {
	const params = useParams();

  const { spotifyApi } = useContext(SpotifyContext);
  const [playlist, setplaylist] = useState();

  useEffect(() => {
		const getPlaylist = async (playlistID) => {
			const results = await spotifyApi.getPlaylist(playlistID);
			return results;
		}
		const getSpotifyData = async () => {
			const playlist = await getPlaylist(params.id);
			setplaylist(playlist);
		}
    getSpotifyData();
  }, [spotifyApi, params])

	return (
			<div>
				{ playlist && 

					<div className={ styles.albumPageContainer }>
						<img src={playlist.images[0].url} alt=""/>
						<div className={ styles.albumInfo }>
							<h2 className={ clsx(styles.title, styles.greyLight) }> {playlist.artist} </h2>
							<div className={ clsx(styles.bottomAlign) }>
								<h3 className={ clsx(styles.title2, styles.blue) }> {playlist.name} </h3>
								<div className= { clsx(styles.genreAndDate, styles.grey3) }>
									<h3 className={ styles.corps }>Alternative</h3>
									<span> - </span>
									<h3 className={ styles.corps }> {playlist.date} </h3>
								</div>
							</div>
						</div>
						<div className={ clsx(styles.albumInfo2)}>
							<p>
								<span> {playlist.tracks.items.length}, 20 minutes</span>
							</p>
							<span className={ styles.blue } > Lecture aléatoire </span>
						</div>
						<div className= { clsx(styles.title2, styles.headerMenu, styles.gridTrackList) } >
							<span>Morceau</span>
							<span>Artiste</span>
							<span>Durée</span>
						</div>
						<ul>
							{playlist.tracks.items.map((track, index) => {
								track = track.track;
								return (
									<li key={index}>
										<AlbumTracklist 
											nb={index} 
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
				}
			</div>
	);
}

export default DesktopPlaylistPage;