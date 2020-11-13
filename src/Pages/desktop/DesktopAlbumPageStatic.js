import React from 'react';
import clsx from 'clsx';
//import PropTypes from 'prop-types';
import styles from '@pages/PagesStyle/DesktopAlbumPage.module.scss';
import AlbumTracklist from '@components/desktop/AlbumTracklist';

let currentTracklist = [
{title: 'BOSS', artist: 'Johnny', duration: '3:10'},
{title: 'Deuxieme', artist: 'Johnny', duration: '3:10'},
{title: 'Troisieme', artist: 'Johnny', duration: '3:10'},
{title: 'Quatrieme', artist: 'Johnny', duration: '3:10'},
{title: 'Cinquieme', artist: 'Johnny', duration: '00:00:00'},
{title: 'Sixieme', artist: 'Johnny', duration: '3:10'},
{title: 'Septieme', artist: 'Johnny', duration: '3:10'},
];

const DesktopAlbumPageStatic = (props) => {

	return (
			<div className={ styles.albumPageContainer }>
				<img src="https://images-na.ssl-images-amazon.com/images/I/710ZkhTLgJL._SY355_.jpg" alt=""/>
				<div className={ styles.albumInfo }>
					<h2 className={ clsx(styles.title, styles.greyLight) }>Mania</h2>
					<div className={ clsx(styles.bottomAlign) }>
						<h3 className={ clsx(styles.title2, styles.blue) }>Fall out Boy</h3>
						<div className= { clsx(styles.genreAndDate, styles.grey3) }>
							<h3 className={ styles.corps }>Alternative</h3>
							<span> - </span>
							<h3 className={ styles.corps }>2018</h3>
						</div>
					</div>
				</div>
				<div className={ clsx(styles.albumInfo2)}>
					<p>
						<span> {currentTracklist.length}, 20 minutes</span>
					</p>
					<span className={ styles.blue } > Lecture aléatoire </span>
				</div>
				<div className= { clsx(styles.title2, styles.headerMenu, styles.gridTrackList) } >
					<span>Morceau</span>
					<span>Artiste</span>
					<span>Durée</span>
				</div>
				<ul>
					{currentTracklist.map((track, index) => {
						return (
							<li key={index}>
								<AlbumTracklist 
									nb={index} 
									title={track.title} 
									artist={track.artist}
									duration={track.duration} 
									gridClass={ styles.gridTrackList }
								/>
							</li>
						)
					})}	
				</ul>
			</div>
	);
}

export default DesktopAlbumPageStatic ;