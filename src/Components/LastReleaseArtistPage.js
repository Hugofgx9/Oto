import React from 'react';
import styles from '@components/ComponentStyle/LastReleaseArtistPage.module.scss';
import clsx from 'clsx'

const LastReleaseArtistPage = (props) => {
	//const { color } = props;
	return (
			<div>
				<p>
					<img className = {styles.LastReleaseIllustration} 
					src="https://m.media-amazon.com/images/I/91XmfqM1yBL._SS500_.jpg" alt=""/>
					
					<span className = {clsx(styles.corpsTitle, styles.LastReleaseTitle)}>
					
						hand crushed by a mallet (Remix) 
						[feat. Fall Out Boy, Craig Owens, 
						Nicole Dollanganger]
					</span>
					<div>
						100 gecs - Fall Out Boy - Craig Owens
					</div>					
					<div className = {styles.corps}>
						2020 - 1 titre, 2 min 55 s
					</div>					
						
				</p>
			</div>
	);
}

export default LastReleaseArtistPage;