import React from 'react';
import styles from '@components/desktop/style/LastReleaseArtistPage.module.scss';
import clsx from 'clsx'

const LastReleaseArtistPage = (props) => {
	//const { color } = props;
	return (
			<div className = {styles.LastReleaseArtistPage} >

					<h2 className = {clsx(styles.title2, styles.LastRelease)}>
							Dernière sortie
					</h2>

					<img className = {styles.CoverLastRelease} 
					src="https://m.media-amazon.com/images/I/91XmfqM1yBL._SS500_.jpg" alt=""/>
					
					<span className = {clsx(styles.corpsTitle, styles.TitleLastRelease)}>
					
						hand crushed by a mallet (Remix) 
						[feat. Fall Out Boy, Craig Owens, 
						Nicole Dollanganger]
					</span>
					<div className = {styles.ArtistLastRelease}>
						100 gecs - Fall Out Boy - Craig Owens
					</div>					
					<div className = {clsx(styles.corps, styles.DateLengthLastRelease)}>
						2020 - 1 titre, 2 min 55 s
					</div>					
						
			</div>
	);
}

export default LastReleaseArtistPage;