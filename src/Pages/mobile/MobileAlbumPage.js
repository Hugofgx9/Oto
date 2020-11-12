import React from 'react';
import clsx from 'clsx';
//import { Link } from 'react-router-dom';
import styles from '@pages/PagesStyle/MobileAlbumPage.module.scss';

import MobileButton from '@components/MobileButton.js';
import MobilePlaybar from '@components/MobilePlaybar.js';

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
				<h3 className={ clsx(styles.title3, styles.blue) }>Hendrix</h3>
				<span> {albumTracklist.length} - 2020</span>
				<ul>
					{ albumTracklist.map(( track, index ) => {
						return (
							<li key={index}> 
								<span> {index} </span>
								<span> {track.title} </span>
							</li>
							)
						}
					)}
				</ul>
			</div>
			<MobilePlaybar/>
		</div>
	);
}

export default MobileAlbumPage; 

