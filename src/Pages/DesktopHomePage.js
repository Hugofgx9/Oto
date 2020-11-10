import React from 'react';
import Genre from '../Components/ItemSuggestion-DesktopHomePage.js'
import SuggestionsContainer from '../Components/SuggestionsContainer-DesktopHomePage.js'
import styles from '@pages/PagesStyle/DesktopHomePage.module.scss'

const DesktopHomePage = (props) => {
	//const { color } = props;
	return (            
			<div className={styles.DesktopHomePage} >
				<div>

				</div>
				<div>
                	<SuggestionsContainer></SuggestionsContainer>
					<SuggestionsContainer></SuggestionsContainer>
					<SuggestionsContainer></SuggestionsContainer>
				</div>

			</div>
	);
}

export default DesktopHomePage;