import React from 'react';
import clsx from 'clsx';
//import PropTypes from 'prop-types';
import styles from '@pages/PagesStyle/DesktopAlbumPage.module.scss';
import AlbumTracklist from '@components/AlbumTracklist';

let currentTracklist = [
{title: 'Loulou', artist: 'Hupsylon', duration: '3:10'},
{title: 'Deuxieme', artist: 'Hupsylon', duration: '3:10'},
{title: 'Troisieme', artist: 'Hupsylon', duration: '3:10'},
{title: 'Quatrieme', artist: 'Hupsylon', duration: '3:10'},
{title: 'Cinquieme', artist: 'Hupsylon', duration: '00:00:00'},
{title: 'Sixieme', artist: 'Hupsylon', duration: '3:10'},
{title: 'Septieme', artist: 'Hupsylon', duration: '3:10'},
];

const DesktopAlbumPage = (props) => {
	//const { color } = props;
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

export default DesktopAlbumPage;