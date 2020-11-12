import React from 'react';
import styles from '@components/desktop/style/AlbumArtistPage.module.scss';

const AlbumArtistPage = (props) => {
	const { name, year, img} = props;
	return (
			<div className  ={ styles.AlbumArtistPage}>
				
				<img  src={img} alt=""/>
				<span className = {styles.albumName}> {name} </span>				
				<span className = {styles.corpsdate}> {year} </span>
				
			</div>
	);
}

export default AlbumArtistPage;