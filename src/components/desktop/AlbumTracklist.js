import React, {useContext} from 'react';
import { SpotifyContext } from '@components/SpotifyProvider';
import { PlayerContext } from '@src/context/PlayerContext';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
//import PropTypes from 'prop-types';
import styles from '@components/desktop/style/AlbumTracklist.module.scss';

const AlbumTracklist = (props) => {
	const { uri, nb, title, artists, duration, gridClass } = props;

	const { spotifyApi, deviceId } = useContext(SpotifyContext);
	const {setIsPlay} = useContext(PlayerContext);


  const playSound = (uri) => {
    const data = {
      "device_id": deviceId,
      "uris": [ uri ]
    }
    spotifyApi.play(data)
      .then(setIsPlay(true))
  }

	return (
		<div className={ clsx(styles.trackElement, gridClass) }>
			<span> { nb } </span>
			<span onClick={ () => {playSound(uri)} } className={ clsx(styles.trackTitle) }> { title } </span>

			{artists && 
				<div>
					{artists.map((artist) => {
						return (
							<Link key={artist.id} to={`/artist/${artist.id}`} className={ clsx(styles.trackArtist) }> { artist.name }</Link>
						)
					})}	
				</div>
			}
			<span className={ clsx(styles.trackDuration)} > { duration } </span>
		</div>
	);
}

export default AlbumTracklist;