import React from 'react';
import styles from '@components/ComponentStyle/LastReleaseArtistPage.module.scss';

const LastReleaseArtistPage = (props) => {
	//const { color } = props;
	return (
			<div>
				<p>
					<img className = {styles.LastReleaseIllustration} 
					src="https://m.media-amazon.com/images/I/91XmfqM1yBL._SS500_.jpg"/>
					
					<span className = {styles.corpsTitle}>
						hand crushed by a mallet (Remix) 
						[feat. Fall Out Boy, Craig Owens, 
						Nicole Dollanganger]
					</span>
					dateAlbum
				</p>
			</div>
	);
}

export default LastReleaseArtistPage;