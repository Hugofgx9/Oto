import React from 'react';
import Genre from '../Components/Genre-DesktopHomePage.js'
import GenreContainer from '../Components/GenreContainer-DesktopHomePage.js'
import styles from '@components/ComponentStyle/GenreContainer-DesktopHomePage.module.scss'

const DesktopHomePage = (props) => {
	//const { color } = props;
	return (            
			<div className={styles.DesktopHomePage} >
                <GenreContainer></GenreContainer>
			</div>
	);
}

export default DesktopHomePage;