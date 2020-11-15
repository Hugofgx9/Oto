import React, { useContext } from 'react';
import { PlayerContext } from '@src/context/PlayerContext';
import { SpotifyContext } from '@components/SpotifyProvider';

//SVG
import playbuton from '@src/assets/img/play.svg';
import pause from '@src/assets/img/pause.svg';
import suivant from '@src/assets/img/suivant.svg';
import precedent from '@src/assets/img/precedent.svg';
import boucle from '@src/assets/img/boucle.svg';
import aleatoire from '@src/assets/img/aleatoire.svg';

//styles
import styles from '@components/desktop/style/DesktopPlayerPlaybar.module.scss';

const DesktopPlayerPlaybar = () => {

	const {isPlay, setIsPlay} = useContext(PlayerContext);
	const { spotifyApi, deviceId } = useContext(SpotifyContext);

	const switchPlayPlause = () => {
		if (isPlay === true) {
			pauseSound()
		}
		else {
			resumeSound()
		}

	}
	const pauseSound = () => {
		const data = {
		  "device_id": deviceId,
		}
		spotifyApi.pause(data)
		  .then(setIsPlay(false))
  }

	const resumeSound = () => {
		const data = {
		  "device_id": deviceId,
		}
		spotifyApi.play(data)
		  .then(setIsPlay(true))
  }

	return (
		<div className={ styles.playbar}>
			<img src={boucle} alt="boucle" className={ styles.boucle}/>
			<img src={precedent} alt="precedent" className={ styles.precedent}/>
			<button onClick={() => switchPlayPlause()} className={ styles.playbuton} >
				{  /*!isPlay && 
					<img src={playbuton} alt="playbuton"/>
					 isPlay && 
					 variable ? if(true) : else 
					<img src={pause} alt="pause" />*/
				}
				{ isPlay ? <img src={pause} alt="pause" /> : <img src={playbuton} alt="playbuton"/> }
			</button>
			<img src={suivant} alt="suivant" className={ styles.suivant}/>
			<img src={aleatoire} alt="aleatoire" className={ styles.aleatoire}/>
			<div className={ styles.slidecontainer }>
				<input type="range" min="1" max="100" className={ styles.slider }/>
			</div>
		</div>
	);
}

export default DesktopPlayerPlaybar;