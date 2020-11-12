import React from 'react';
import styles from '@components/ComponentStyle/AlbumArtistPage.module.scss';

const AlbumArtistPage = (props) => {
	//const { color } = props;
	return (
			<div>
				<p>
					<img className  ={ styles.AlbumArtistPage} src="" alt=""/>					
					albumName
					<span className = {styles.corpsdate}>
						dateAlbum
					</span>
				</p>
			</div>
	);
}

export default AlbumArtistPage;