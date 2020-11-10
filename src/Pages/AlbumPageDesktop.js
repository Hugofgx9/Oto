import React from 'react';
import clsx from 'clsx';
//import PropTypes from 'prop-types';
import styles from '@pages/PagesStyle/DesktopAlbumPage.module.scss';
import AlbumPageSingleTitle from '@components/AlbumPageSingleTitle';

let albumTrackList = [
{title: 'Premier', artist: 'Hupsylon'},
{title: 'Deuxieme', artist: 'Hupsylon'},
{title: 'Troisieme', artist: 'Hupsylon'},
{title: 'Quatrieme', artist: 'Hupsylon'},
{title: 'Cinquieme', artist: 'Hupsylon'},
{title: 'Sixieme', artist: 'Hupsylon'},
{title: 'Septieme', artist: 'Hupsylon'},
];

const AlbumPageDesktop = (props) => {
	//const { color } = props;
	return (
			<div className={ styles.albumPageContainer }>
				<img src=""/>
				<div className={ styles.albumInfo }>
				 <h2 className={ styles.title }>Mania</h2>
				 <h3 className={ clsx(styles.title2, styles.blue) }>Fall out Boy</h3>
				 <div className= { styles.genreAndDate }>
				 	<h3 className={ styles.corps }>Alternative</h3>
				 	<span> - </span>
				 	<h3 className={ styles.corps }>2018</h3>
				 </div>
				</div>
				<div>
					<p>
						<span> {albumTrackList.length}, 20 minutes</span>
					</p>
					<span className={ styles.blue } > Lecture aléatoire </span>
				</div>
				<div className= { clsx(styles.title2, styles.headerMenu) } >
					<span>Morceau</span>
					<span>Artiste</span>
					<span>Durée</span>
				</div>
				<ul>
				{albumTrackList.map((track, index) => {
					return (
						<li key={index}>
							<AlbumPageSingleTitle 	 
								nb={index} 
								title={track.title} 
								artist={track.artist} 
							/>
						</li>
					)
				})}
					
				</ul>
			</div>
	);
}

export default AlbumPageDesktop;