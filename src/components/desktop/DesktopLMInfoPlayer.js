import React, {useState, useContext, useEffect} from 'react';
import { PlayerContext } from '@src/context/PlayerContext';
import { SpotifyContext } from '@components/SpotifyProvider';
//import clsx from 'clsx';
//import { Link } from 'react-router-dom';

//STYLE
import styles from '@components/desktop/style/DesktopLMInfoPlayer.module.scss';

const DesktopLMInfoPlayer = () => {

	const {player} = useContext(SpotifyContext);
	const [currentTrack, setCurrentTrack] = useState();


	useEffect(() => {
		player.addListener('player_state_changed', ({track_window: { current_track }}) => {
			console.log('infoPLayer',current_track);
			setCurrentTrack(current_track);
		})
	},[player])



	return (
			<div >
				{currentTrack && 
					<div className={ styles.gridLMInfo }>
						
						<img className={ styles.playedImg } src={currentTrack.album.images[0].url} alt=""/>
						<div className={ styles.playedTrack }>
							<h2 className={ styles.corpsTitle }>
								{currentTrack.name}
							</h2>
							<h3 className={ styles.corps }>
								{currentTrack.artists[0].name}
							</h3>
							{/* <img className={ styles.like } src="./assets/heartfilled.png" alt=""/> */}
						</div>
					</div>
				}
			</div>
	);
}

export default DesktopLMInfoPlayer;