import React from 'react';
import styles from '@components/ComponentStyle/AlbumArtistPage.module.scss';

const AlbumArtistPage = (props) => {
	//const { color } = props;
	return (
			<div className  ={ styles.AlbumArtistPage}>
				
				<img  src="" alt=""/>
				<span className = {styles.albumName}>
				albumName
				</span>				
				<span className = {styles.corpsdate}>
					dateAlbum
				</span>
				
			</div>
	);
}

export default AlbumArtistPage;