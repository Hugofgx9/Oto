import React from 'react';
import clsx from 'clsx';
//import { Link } from 'react-router-dom';
import styles from '@pages/PagesStyle/MobileAlbumPage.module.scss';

import MobileButton from '@components/mobile/MobileButton.js';
import MobileThinLine from '@components/mobile/MobileThinLine.js';

let albumTracklist = [
	{title: 'firstTrack'},
	{title: 'secondTrack'},
	{title: 'threeTrack'},
	{title: 'fourthTrack'},
	{title: 'fifthTrack'},
] 

const MobileAlbumPage = () => {
	return (
		<div className={ clsx(styles.albumPage, styles.greyLight) }>
			<div className={ clsx(styles.content) }>
				<h2 className= { clsx(styles.title2)} >Purple Haze</h2>
				<img src="https://www.babelio.com/users/AVT_Jimi-Hendrix_897.jpg" alt=""/>
				<div className={ clsx(styles.btn) }>
					<MobileButton> Play </MobileButton>
					<MobileButton> Random </MobileButton>
				</div>
			</div>
			<div className={ clsx(styles.content) }>
				<div className={ clsx(styles.infoAndArtist)}>
					<div>
						<h3 className={ clsx(styles.corps, styles.blue) }>Hendrix</h3>
						<span className= { clsx(styles.infoAlbum, styles.grey3)}> {albumTracklist.length} titres - 2020</span>
					</div>
				</div>
				<MobileThinLine className={ clsx( styles.separateTracklist )}/>
				<ul>
					{ albumTracklist.map(( track, index ) => {
						return (
							<li key={index}> 
								<div>
									<span className={ styles.grey3 }> {index} </span>
									<span> {track.title} </span>
								</div>
								<MobileThinLine/>
							</li>
							)
						}
					)}
				</ul>
			</div>
		</div>
	);
}

export default MobileAlbumPage; 

