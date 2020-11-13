import React from 'react';
import clsx from 'clsx';
//import { Link } from 'react-router-dom';
import styles from '@pages/PagesStyle/MobileArtistPage.module.scss';

import MobileButton from '@components/mobile/MobileButton.js';
import MobileThinLine from '@components/mobile/MobileThinLine.js';

const albumsOfArtist = [
	{title: 'Dream But' , img: 'https://www.babelio.com/users/AVT_Jimi-Hendrix_897.jpg' , year: 2018},
	{title: 'Dream But' , img: 'https://www.babelio.com/users/AVT_Jimi-Hendrix_897.jpg' , year: 2018},	
	{title: 'Dream But' , img: 'https://www.babelio.com/users/AVT_Jimi-Hendrix_897.jpg' , year: 2018},
];

const topTrack = [
	{title: 'First'}, 
	{title: 'Second'},
	{title: 'Third'},  
];

const MobileArtistPage = () => {
	return (
		<div className={ styles.artistPage }>
			<div className={ clsx( styles.grid, styles.bluePart ) }>
				<div className={ clsx( styles.centerContent) }>
					<h2 className= { clsx(styles.grey1, styles.title2)} >Jimmy Hendrix</h2>
					<img src="https://www.babelio.com/users/AVT_Jimi-Hendrix_897.jpg" alt="Artist"/>
					<div className={ clsx( styles.playBtn) }>
						<MobileButton>Play</MobileButton>
					</div>
				</div>
			</div>
			<div className={ clsx(styles.grid ,styles.secondPart) } >
				<div className={ clsx(styles.centerContent, styles.greyLight)}>

					<div  className={ clsx(styles.lastProject, styles.section)} >
						<h3 className={ clsx(styles.title2) }>Dernières Sorties</h3>
						<img src="https://www.babelio.com/users/AVT_Jimi-Hendrix_897.jpg" alt=""/>
						<div className={ styles.projectInfo} >
							<h4>Nom Album</h4>
							<span>2020 - 1 titre</span>
						</div>
					</div>

					<div className={ clsx(styles.topTrack, styles.section)} >
						<div className={ styles.sectionBorders }>
							<MobileThinLine/>
						</div>
						<h3 className={ clsx(styles.title2) }>Top Titres</h3>
						<MobileThinLine/>
						<ul>
							{	topTrack.map((track, index) => {
									return(
										<li key={index}>
											<span> {track.title} </span>
											<MobileThinLine/>
										</li>
									)
								}
							)}
						</ul>
					</div>

					<div className={ clsx(styles.albumsList, styles.section)} >
						<div className={ styles.sectionBorders }>
							<MobileThinLine/>
						</div>
						<h3 className={ clsx(styles.title2) }>Albums</h3>
						<ul>
							{ albumsOfArtist.map((album, index) => {
									return (
										<li key={index} >
											<img src={ album.img } alt=""/>
											<h4> { album.title } </h4>
											<span> { album.year } </span>
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

export default MobileArtistPage; 

